import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet"

import Cursor from "../components/Cursor.js"
import ClientOnly from "../components/ClientOnly.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import WorkGrid from "../components/WorkGrid.js"
import AboutSection from "../components/AboutSection.js"
import Footer from "../components/Footer.js"

import "../components/reset.css"
import "../components/global.css"

// markup
const IndexPage = () => {
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

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  const duration = 0.3

  const pageVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: duration },
    },
  }

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rob Pignone / Design Leader and Manager / Home</title>
        <meta name="description" content="The personal site of Rob Pignone, an experience design leader and design manager from Australia." />
        <link rel="canonical" href="https://robp.me" />
      </Helmet>
      <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
      <Hero text="An experience design leader and manager dedicated to crafting polished native and web experiences." details={true}/>
      <ClientOnly>
        <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        <WorkGrid onProjectEnter={projectEnter} onProjectLeave={cursorLeave} />
        <AboutSection />
      </ClientOnly>
      <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
    </main>
  )
}

export default IndexPage
