import { useEffect } from 'react'
import Page from '../../components/Page/Page'

function HomePage({message}: {message: string}): JSX.Element {
  useEffect(() => {
    console.log(`${message} HomePage`)
  }, [message])

  return(
    <Page message={message}>
      <article>
        <h1>Home page</h1>
        <a href='https://github.com/renatofekete/q-posts' target='_blank' rel="noreferrer noopener">Github repository</a>
        <p>Approximate time needed to finish the assignment: 12h</p>
      </article>
    </Page>
  )
}

export default HomePage