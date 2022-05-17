import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post/Post';
import { IAuthor, IComments, IPost } from './shared/types/interfaces/interfaces';


function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComments[]>([]);
  const [users, setUsers] = useState<IAuthor[]>([]);

  useEffect(() => {

    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ])
    .then(([res1, res2, res3]) => {
      Promise.all([res1.json(), res2.json(), res3.json()])
      .then(([data1, data2, data3]) => {
        setPosts(data1)
        setComments(data2)
        setUsers(data3)
      })
    })
    
  }, [])

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <Post post={post} author={users.find((user) => user.id === post.userId)} comments={comments.filter((comment) => comment.postId === post.id)}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
