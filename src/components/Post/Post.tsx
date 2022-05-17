import { IAuthor, IComments, IPost } from '../../shared/types/interfaces/interfaces'

type TProps = {
  author: IAuthor | undefined
  post: IPost
  comments?: IComments[]
}

function Post({author, post, comments}: TProps) {
  return (
    <div>
      <h4>Author: {author?.name}</h4>
      <h2>Title: {post.title}</h2>
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