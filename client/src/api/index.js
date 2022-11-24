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
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const registerPost = (id, file) => API.post(`/posts/${id}/registerPost`,file);

export const fetchPost=(id)=> API.post(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const signIn=(formData) => API.post('/users/signin', formData);
export const signUp=(formData) => API.post('/users/signup', formData);
export const googleSign=(formData,token) => API.post('/users/googlesign', [formData,token]);
