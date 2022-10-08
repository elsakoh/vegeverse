import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hamburger from '../components/hamburger'

const Community: NextPage = () => {
  return (
    <main> 
      <div id='outer-container'>
        <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div> 
      <div id="page-wrap" className={styles.container} >
          <h1>This will be the community page.</h1>
          <h2></h2>
      </div>
    </main>
  )
}

export default Community