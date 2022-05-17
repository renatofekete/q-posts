import Posts from './pages/Posts/Posts';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
   

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
      <Route path="/" element={<h1>Hello from home</h1>}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/post/:id" element={<h1>Hello from single post</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
