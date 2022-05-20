import { useEffect } from 'react'
import Page from '../../components/Page/Page'
import styling from './HomePage.module.css'

function HomePage({message}: {message: string}): JSX.Element {
  useEffect(() => {
    console.log(`${message} HomePage`)
  }, [message])

  return(
    <Page message={message}>
      <article className={styling.page}>
        <h1 className={styling.title}>Home page</h1>
        <p><a href='https://github.com/renatofekete/q-posts' target='_blank' rel="noreferrer noopener">Github repository</a></p>
        <p>Approximate time needed to finish the assignment: <b>12h</b></p>
        <p>Build/run process description:</p>
        <ul>
          <li>git clone https://github.com/renatofekete/q-posts.git or download ZIP to a folder</li>
          <li>run <code>yarn</code> in downloaded folder to install dependencies</li>
          <li>run <code>yarn start</code> to run app in development mode on <a href="http://localhost:3000">http://localhost:3000</a></li>
        </ul>
      </article>
    </Page>
  )
}

export default HomePage