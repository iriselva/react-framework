import styles from '../styles/Home.module.css'
import { client } from '../utils/prismicPosts'
import Post from '../components/Post'
import { Fragment } from 'react'

/* Home page projects content */
export default function Home({ collaborativeProjects, personalProjects }) {
  
  const renderPosts = posts => (
    <div className={styles.grid}>
      {/* sorting posts by date */}
      {posts !== undefined &&
      posts.sort((post1, post2) => new Date(post2.date) - new Date(post1.date)).map((p) => {
        let title = p.title[0].text
        let description = p.description[0].text
        let key = `${p.date}+${title}`
        /* Posts data from Prismic */
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
      <Fragment>
        {/* Rendering projects if collab or personal */}
        <h2>Personal Projects</h2>
          {renderPosts(personalProjects)}
        <h2>Collaborative Projects</h2>
          {renderPosts(collaborativeProjects)}
      </Fragment>     
  )
}


export async function getStaticProps() {
  const res = await client.query('')

  /* mapping through prismics data */
  const posts = res.results.map((p) => {
    return p.data
  })
  /* configuring the boolean element if they are collab or personal */
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


