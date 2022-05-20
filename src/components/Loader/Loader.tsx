import { ReactNode, useEffect } from 'react'

type TProps = {
  isLoading: boolean
  children: ReactNode
  message: string
}

function Loader({isLoading, children, message}: TProps): JSX.Element {

  useEffect(() => {
    console.log(`${message} Loader`)
  }, [message])
   
  return(
    <>
      {
        isLoading ? <div>Loading...</div> : children
      }
    </>
  )
}

export default Loader