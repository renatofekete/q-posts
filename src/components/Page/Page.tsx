import { useEffect } from 'react'
import style from './Page.module.css'

function Page(props: any): JSX.Element {
  useEffect(() => {
    console.log(`${props.message} Page`)
  }, [props.message])

  return(
    <div className={style.content}>
      {props.children}
    </div>
  )
}

export default Page