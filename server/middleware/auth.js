import jwt from 'jsonwebtoken';

const auth= async(req, res, next)=>{
    try {
        const token =req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;    //if token is less than 500 in length means its custom and not from google

        let decodedData;

        if(token && isCustomAuth){
            decodedData=jwt.verify(token, 'dlsucao');
            req.id=decodedData?.id;
        }else{
            decodedData = jwt.decode(token);
            req.id=decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;