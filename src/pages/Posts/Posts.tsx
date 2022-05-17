import { SyntheticEvent, useEffect, useState } from 'react';
import '../../App.css';
import { IAuthor, IComments, IPost } from '../../shared/types/interfaces/interfaces';
import Post from '../../components/Post/Post';
function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComments[]>([]);
  const [users, setUsers] = useState<IAuthor[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("")

  useEffect(() => {
    
    console.log("hello from posts")

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

  function setSearchValue(e: {target: HTMLInputElement}) {
    setSearchTerm(e.target.value)  
  }

  function filterPosts() {
    if(searchTerm) {
      const filteredAuthor = users.filter((user) => searchTerm === user.name)[0]
      if(filteredAuthor) {
        setFilteredPosts(posts.filter((post) => post.userId === filteredAuthor.id))
        return
      }
    }
    setFilteredPosts([])
    return
  }

  function renderPosts(postsList: IPost[]): any {
    return postsList.map((post) => {
      return (
          <Post post={post} author={users.find((user) => user.id === post.userId)} comments={comments.filter((comment) => comment.postId === post.id)}/>
      )
    })  
  }

  return (
    <div className="App">
      <div>
        <input type="text" list="author-list" onChange={setSearchValue}/>

        <datalist id='author-list'>
          {users.map((user) => <option value={user.name}/>)}
        </datalist>
        <button onClick={filterPosts}>Filter</button>
      </div>
      <h1>Posts{filteredPosts.length > 0 && ` by: ${searchTerm}`}</h1>
      <div>
        {filteredPosts.length > 0 ? renderPosts(filteredPosts) : renderPosts(posts)}
      </div>
    </div>
  );
}
export default Posts