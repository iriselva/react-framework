import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { format } from "date-fns";
import Arrow from "./Arrow";

/* Project cards */
/* Placing items content as parameter */
function Post({ date, image, title, description, live, git }) {
  /* for collapsing cards */
  const [showText, setShowText] = useState(false);
  let { url, alt } = image;

  return (
    <div className={styles.card} onClick={() => setShowText(!showText)}>
      <div>
        <img alt={alt} src={`${url}`} />
        <div className="description">{alt}</div>
        <div className="text"></div>

        <h3>{title}</h3>
        <div className={styles.open}>
          <h4>Created: {format(new Date(date), "MMMM do, yyyy")}</h4>
          <Arrow
            className={`${styles.arrowDown} ${showText ? styles.arrowUp : ""}`}
          />
        </div>

        {/* show this when expanded */}
        <div
          className={`${styles.textContainer} ${
            showText ? styles.expanded : ""
          }`}
        >
          <p>{description}</p>
          <div className={styles.buttons}>
            {live && (
              <button>
                <a href={live} target="_blank" rel="noopener noreferrer">
                  Live version
                </a>
              </button>
            )}
            {git && (
              <button href={git} target="_blank">
                <a href={git} target="_blank" rel="noopener noreferrer">
                  Git Repository
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
