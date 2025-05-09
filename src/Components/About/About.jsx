import React from 'react'
import style from "./about.module.css"

function About() {
  return (
    <div className={style.info_container}>
      <p className={style.for_Title}>About</p>
      <h4>Evangadi Networks </h4>
      <p>
        No matter what stage of life you are in, whether you're just starting
        elementary school or being promoted to CEO of a Fortune 500 company, you
        have much to offer to those who are trying to follow in your footsteps.
        Whether you are willing to share your knowledge or you are just looking
        to meet mentors of your own, please start by joining the network here.
      </p>
      <button className={style.btn1}>HOW IT WORKS</button>
    </div>
  );

}

export default About