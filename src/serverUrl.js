const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3030';
} else {
  serverUrl = 'https://freelance-backend.onrender.com'; 
}