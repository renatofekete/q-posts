import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IAuthor, IComments, IPost } from '../../shared/types/interfaces/interfaces'

type TProps = {
  author: IAuthor | undefined
  post: IPost
  comments?: IComments[]
}

function Post({author, post, comments}: TProps) {
  useEffect(() => {
    console.log("hello from post")
  }, [])
  return (
    <div>
      <h4>Author: {author?.name}</h4>
      <Link to={`/post/${post.id}`}>Title: {post.title}</Link>
      <p>{post.body}</p>
      <ul>
        {comments?.map((comment) => {
          return(
            <li>
              <p>{comment.body}</p>
              <h6>{comment.name} <span>{comment.email}</span></h6>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Post