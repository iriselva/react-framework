import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { client } from '../utils/prismicPosts'

import Post from '../components/Post'

export default function Home({ collaborativeProjects, personalProjects }) {
  const renderPosts = posts => (
    <div className={styles.grid}>
      {posts !== undefined &&
      posts.sort((post1, post2) => new Date(post2.date) - new Date(post1.date)).map((p) => {
        console.log(p)
        let title = p.title[0].text
        let description = p.description[0].text
        let key = `${p.date}+${title}`
        return <Post 
          key={key} 
          date={p.date} 
          image={p.image} 
          title={title} 
          description={description} 
          live={p.live?.url}
          git={p.git?.url}/>
      })} 
    </div>
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>My portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;600&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          My mini portfolio!
        </h1>

        <p className={styles.description}>
          Hi! My name is Iris I am a web development student and here is a small overview of my projects.
        </p>
      
        <h2>Pet Projects</h2>
       {renderPosts(personalProjects)}
       <h2>Collaborative Projects</h2>
       {renderPosts(collaborativeProjects)}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/iriselva"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github{' '}

        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query('')

  const posts = res.results.map((p) => {
    return p.data
  })
  const {personalProjects, collaborativeProjects} = posts.reduce(({personalProjects = [], collaborativeProjects = []}, post) => {
      if (post.is_collaborative) {
        collaborativeProjects.push(post);
      } else {
        personalProjects.push(post);
      }
      return {
        collaborativeProjects,
        personalProjects
      }
  }, {});


  return {
    props: {
      collaborativeProjects,
      personalProjects,
    },
  }
}


