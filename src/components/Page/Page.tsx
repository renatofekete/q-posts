import { ReactNode, useEffect } from 'react'
import style from './Page.module.css'

type TProps = {
  message: string
  children: ReactNode
}

function Page({children, message}: TProps): JSX.Element {

  useEffect(() => {
    console.log(`${message} Page`)
  }, [message])

  return(
    <div className={style.content}>
      {children}
    </div>
  )
}

export default Page