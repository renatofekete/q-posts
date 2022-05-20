import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './Post.module.css'

type TProps = {
  subtitle: string | undefined
  content: string
  title: string
  message: string
  link?: string
  children?: React.ReactNode
  as?: React.ElementType
  classes?: string
}

function Post({message, subtitle, content, link, children, title, as, classes}: TProps): JSX.Element {
  const El = as || "article"

  function getTitle(): React.ReactNode {
    return link ? <Link to={link}>{title}</Link> : title
  }

  useEffect(() => {
    console.log(`${message} Post`)
  }, [message])

  return (
    <El className={`${style.container} ${classes ? classes : ""}`}>
      <h2 className={style.title}>{getTitle()}</h2>
      <h4 className={style.subtitle}>{subtitle}</h4>
      <p>{content}</p>
        {children}
    </El>
  )
}
export default Post