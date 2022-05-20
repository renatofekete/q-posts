import React, { useEffect } from 'react'
import style from './Page.module.css'

function Page({children, message}: {children: React.ReactNode, message:string}): JSX.Element {

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