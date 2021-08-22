import LightBulb from "../components/LightBulb";
import styles from "../styles/Home.module.css";

/* About me page */
export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <h2>Hi!</h2>
        <p>
          My name is Íris Elva Ólafsdóttir. I am born and raised in Reykavík
          Iceland and currently studying Web development at the Reykajvik
          Technical School. I have a cat called Fúsi and love to draw, knit and
          to do anything creative like coding!
        </p>
      </div>
      <div className={styles.about}>
        <div>
          <h2>Education</h2>
          <h3>Web development, Diploma,</h3>
          <p>Reykjavik Technical Scool, Summer 2021</p>
          <hr></hr>
          <br />
        </div>
        <div>
          <h3>Web Media, Diploma</h3>
          <p>University of Iceland, 2020</p>
          <hr></hr>
          <br />
        </div>
        <div>
          <h3>Medum and Material-based Art, BFA</h3>
          <p>National Art Academy of Oslo, 2017</p>
          <hr></hr>
          <br />
        </div>
        <div>
          <h3>Cermaics, Diploma</h3>
          <p>Reykavik School of Visual Arts, 2014</p>
          <hr></hr>
          <br />
        </div>
      </div>
      <div className={styles.about}>
        <h2>Skills</h2>
        <div className={styles.skillsContainer}>
          <ul className={styles.skillsList}>
            <h3>Programming</h3>
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- Javascript</li>
            <li>- React</li>
            <li>- React Native</li>
            <li>- API Consupmtion</li>
            <li>- Python</li>
            <li>- Express.js</li>
            <li>- Swagger</li>
            <li>- Mongo.db</li>
            <li>- Deployment</li>
            <li>- Animation and transforming</li>
          </ul>
          <ul className={styles.skillsList}>
            <h3>Design</h3>
            <li>- Figma</li>
            <li>- Adobe Illustraitor/Indesign</li>
            <li>- UX</li>
            <li>- User Testing</li>
            <li>- Storyboard and Prototyping</li>
            <li>- Desgin sprint</li>
            <li>- Agile Methodologies</li>
          </ul>
          <div className={styles.blubWrapper}>
            <LightBulb />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2>Contact Me</h2>
        <h3>Email</h3>
        <a href="mailto: iriselva@gmail.com">
          <p>iriselva@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
