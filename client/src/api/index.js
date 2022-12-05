import axios from 'axios';

const API= axios.create({baseURL: 'http://localhost:5000'});
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
  
 //connects with our backend to receive posts doesnt wrok atm
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const getTxns = () => API.get(`/transactions`);
export const getTxn=(id)=> API.post(`/transactions/${id}`);
export const createPost= (newPost) =>   API.post(`/posts`, newPost);
export const updatePost=(id, updatePost) => API.patch(`/posts/${id}`,updatePost);
export const deletePost=(id, deletePost) => API.delete(`/posts/${id}`,deletePost);
export const registerPost = (id, form) => API.post(`/posts/${id}/registerPost`,form);
export const logTime = (form) => API.post(`/attendance/log`,form);
export const getLogs = () => API.get(`/attendance/`);
export const fetchPost=(id)=> API.post(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const signIn=(formData) => API.post('/users/signin', formData);
export const signUp=(formData) => API.post('/users/signup', formData);
export const googleSign=(formData,token) => API.post('/users/googlesign', [formData,token]);
export const approveTxn=(id, post)=> API.post(`/transactions/approve/${id}`, post);
export const declineTxn=(id)=> API.post(`/transactions/decline/${id}`);
export const fetchPostsbyReg = (regPosts) => API.get(`/posts/regposts?regpostsquery=${regPosts}`);
