import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Card from "../components/Card.js"
import styles from '../components/AboutGrid.module.css'

import "../components/reset.css"
import "../components/global.css"

// markup
const AboutPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function cursorLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function photoEnter(event) {
    setCursorText("🙌");
    setCursorVariant("contact");
  }

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rob Pignone / Design Manager / About Me</title>
          <meta name="description" content="Rob Pignone is a design manager based in Australia" />
          <link rel="canonical" href="https://robp.me/about/" />
        </Helmet>
        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
        <Hero text="I’m a father, lover of anything with two wheels, and have always been a designer at heart." details={false} />

        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>

        <motion.section className="grid">
          <div className={styles.aboutGrid}>
            <motion.div className={`${styles.video} ${styles.first}`}>
              <video src="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/sketchnew.mp4" className={styles.video} autoPlay playsInline muted onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
            </motion.div>
            <motion.div className={styles.wrapper}>
              <div className={styles.smallVideo}>
                <video src="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/cyclingnew.mp4" className={styles.video} autoPlay playsInline muted onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
              </div>
              <div className={`${styles.smallVideo} ${styles.second}`}>
                <video src="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/bambinew.mp4" className={styles.video} autoPlay playsInline muted onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
              </div>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.third}`}>
              <video src="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/climbabout.mp4" className={styles.video} autoPlay playsInline muted onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.fourth}`}>
              <video src="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/skinew.mp4" className={styles.video} autoPlay playsInline muted onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
            </motion.div>
          </div>
        </motion.section>
        <motion.section className="grid about">
          <div className="bio">
            <h2 className="h2">I’m currently leading, mentoring, and building teams as a design manager in the financial sector.</h2>
          </div>
          <div className="bio-body">
            <p className="paragraph paragraph--large">
              I’m focused on mentoring and ways of working, I work carefully and methodically.
              I'm careful with my time and attention in order to produce quality experiences
              and help my teams maintain maximum efficiency.
            </p>
            <p className="paragraph paragraph--large">
              In my current role, I look to drive better financial experiences for all of our
              customers across both Consumer and Business products. Our product design team hopes
              to help people and businesses in their everyday lives access and utilise the
              financial services that are critical to them.
            </p>
          </div>
        </motion.section>

        <motion.section className="grid about">
          <div className="experience">
            <h2 className="h2">Experience</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2021 - Current
                </h6>
                <h4 className="h4">
                  Snr Design Manager at Westpac Group
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2016 - 2021
                </h6>
                <h4 className="h4">
                  Human Centred Design Manager at Westpac Group
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - 2016
                </h6>
                <h4 className="h4">
                  CX Design Producer at Westpac
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2011 - 2015
                </h6>
                <h4 className="h4">
                  Lead Digital Producer at DDB
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2010 - 2011
                </h6>
                <h4 className="h4">
                  Snr Digital Producer at BMF Australia
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2005 - 2009
                </h6>
                <h4 className="h4">
                  UI and Interaction Designer at OnQue Digital
                </h4>
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section className="container next-project">
          <div className="grid">
            <h2 className="h2 grid-title">Next Project</h2>
          </div>
          <div className="grid work-grid">
            <Card
              image="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/server-video-tile-imagee.png"
              imageAlt="Mockup of Discord's video chat feature with a person using it"
              link="/server-video"
              color="pink"
              title="Server Video"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
              imageAlt="Image of Discord's Onboarding Screen"
              link="/discord-growth"
              color="blue"
              title="Discord Onboarding"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>

      </div>
  )
}

export default AboutPage
