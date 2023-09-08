import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import useInView from "react-cool-inview";
import Card from '../components/Card'
import FeaturedCard from './FeaturedCard'

function WorkGrid(props) {
  // const [visibleState, setVisibleState] = useState("initial");

  // Scroll Reveal
  // https://github.com/wellyshen/react-cool-inview
  // const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView({
  //     threshold: 0.0, // Default is 0
  //     unobserveOnEnter: true,
  //     onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
  //       setVisibleState("visible");
  //     },
  //     onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
  //       setVisibleState("initial");
  //     }
  //   }
  // );

  const gridVariants = {
    initial: {
      opacity: 0.25,
      scale: 0.98,
      y: 60,
      transition: {
        type: "spring",
        duration: 0.8
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  function projectEnter(event) {
    props.onProjectEnter();
  }

  function projectLeave(event) {
    props.onProjectLeave();
  }

  return (
    <div className="grid">
      <div className="work-grid">
          <FeaturedCard
            image="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/featured-tile.png"
            imageAlt="CRM UI Mobile"
            link="/wbc-one-crm"
            color="pink"
            title="Westpac One CRM"
            key="Westpac One CRM"
            size="featured"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
          <Card
            image="https://rpp-personalsite.s3.ap-southeast-2.amazonaws.com/biz-invoice.png"
            link="/wbc-business-invoice"
            imageAlt="Biz Invoice Screens"
            color="blue"
            title="Westpac Biz Invoice"
            size="normal"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
          <Card
            image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
            link="/banker-templates-system"
            imageAlt="UI of Banker Template Library"
            color="green"
            title="Westpac Banker UI Kit"
            size="normal"
            alignment="bottom"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
      </div>
    </div>
  )
}

export default WorkGrid
