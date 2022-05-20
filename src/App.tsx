import { Routes, Route, Link } from "react-router-dom";
import PostsPage from './pages/Posts/PostsPage';
import PostPage from './pages/Post/PostPage';
import HomePage from './pages/Home/HomePage';
import { useEffect } from 'react';

function App() {
  const message = "Hello from"

  useEffect(() => {
    console.log(`${message} App`)
  })
   

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<HomePage message={message}/>}/>
        <Route path="/posts" element={<PostsPage message={message}/>}/>
        <Route path="/post/:id" element={<PostPage message={message}/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
