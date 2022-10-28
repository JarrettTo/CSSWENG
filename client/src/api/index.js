import axios from 'axios';

const url= 'http://localhost:5000/posts'; //connects with our backend to receive posts doesnt wrok atm
export const fetchPosts = () => axios.get(url);
export const createPost= (newPost) =>   axios.post(url, newPost);
export const updatePost=(id, updatePost) => axios.patch(`${url}/${id}`,updatePost);