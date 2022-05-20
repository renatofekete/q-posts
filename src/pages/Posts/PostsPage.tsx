import { useEffect, useState } from 'react';
import '../../App.css';
import { IUser, IComments, IPost } from '../../shared/types/interfaces/interfaces';
import Post from '../../components/Post/Post';
import List from '../../components/List/List';
import Page from '../../components/Page/Page';
import Filter from '../../components/Filter/Filter';

function PostsPage({message}: {message: string}): JSX.Element {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComments[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredValue, setFilteredValue] = useState('')
  
  useEffect(() => {
    
    console.log(`${message} PostsPage`)

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
    
  }, [message])
 
  function filterPosts(searchTerm: string) {
    if(searchTerm) {
      const filteredUser = users.filter((user) => searchTerm === user.name)[0]
      if(filteredUser) {
        setFilteredPosts(posts.filter((post) => post.userId === filteredUser.id))
        setFilteredValue(searchTerm)
        return
      }
    }
    setFilteredPosts([])
    return
  }

  function renderPosts(postsList: IPost[]): JSX.Element {
    return <List message={message} items={postsList} renderItem={(post: IPost) => {
      return (
        <Post
        message={message}
        classes='article'
        key={post.id + post.title} 
        title={post.title} 
        content={post.body} 
        link={`/post/${post.id}`} 
        subtitle={users.find((user) => user.id === post.userId)?.name} 
        children={
        <List message={message} classes='comment-list' title='Comments' items={comments.filter((comment) => comment.postId === post.id)} renderItem={(comment) => {
          return(
            <Post
              message={message}
              classes='comment'
              key={comment.id + comment.name} 
              title={comment.name}
              content={comment.body}
              subtitle={comment.email}
              as={'div'}
            />
          )
        }} />} 
        />
      )
    }}/>
  }

  return (
      <Page message={message}>
        <Filter message={message} items={users} onClick={filterPosts}/>
        {filteredPosts.length > 0 && <h2>Posts by: {filteredValue}</h2>}        
        {filteredPosts && filteredPosts.length > 0 ? renderPosts(filteredPosts) : renderPosts(posts)}
      </Page>
  );
}
export default PostsPage