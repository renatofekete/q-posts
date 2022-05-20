import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import List from '../../components/List/List';
import Page from '../../components/Page/Page';
import Post from '../../components/Post/Post';
import { IUser, IComments, IPost } from '../../shared/types/interfaces/interfaces'
import styles from './PostPage.module.css'

function PostPage({message}: {message: string}): JSX.Element {
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComments[]>([]);
  const [user, setUser] = useState<IUser>();

  const { id } = useParams()

  

  useEffect(() => {

    console.log(`${message} PostPage`)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
      setPost(data)
      const userId = data.userId
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
    })
    .catch(e => console.error(e))

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(
        res => res.json()  
      )
      .then(data => {
        setComments(data)
      })
      .catch(e => console.error(e))

      
    
  }, [id, message])
  
  return (
    <Page message={message}>
      <article className={styles.container}>
        <h1 className={styles.title}>{post?.title}</h1>
        <h4 className={styles.details}>{user?.name}</h4>
        <p className={styles.content}>{post?.body}</p>
        
        {
          <List message={message} title='Comments' classes='comment-list' items={comments} renderItem={(comment) => {
            return(            
              <Post message={message} key={comment.id} classes='comment comments-page' title={comment.name} subtitle={comment.email} content={comment.body} />           
            )
          }} />
        }
      </article>
    </Page>
  )

}

export default PostPage