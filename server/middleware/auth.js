/*@brief: Middleware based on user tokens for authentication
 * @author: Justin To and Daniel Capinpin
 */
import jwt from "jsonwebtoken";
/*@brief: Authenticates users by getting user token from request headers and decoding it
 * @params: req,  next
 * req: request sent to server
 * next: function
 * @author: Justin To and Daniel Capinpin
 */
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; //if token is less than 500 in length means its custom and not from google

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "dlsucao"); //decrypt token using key
      req.id = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.id = decodedData?.sub;
      console.log(req.id);
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
