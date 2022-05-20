import { useEffect } from 'react'
import Page from '../../components/Page/Page'

function HomePage({message}: {message: string}): JSX.Element {
  useEffect(() => {
    console.log(`${message} HomePage`)
  }, [message])

  return(
    <Page message={message}>
      <h1>Hello home</h1>
    </Page>
  )
}

export default HomePage