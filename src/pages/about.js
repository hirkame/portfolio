import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import aboutStyles from "./about.module.css"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className={aboutStyles.container}>
      <div className={aboutStyles.photo}>
        <Image />
      </div>
      <div>
        <h2 style={{ paddingTop: 0 }}>Hiroki Kameyama</h2>

        <h3>Profile</h3>
        <p>
          Hiroki Kameyama is a university student in Japan. <br />
          He has been studying social sciences at the Department of Humanities
          and Social Sciences of University of Tokyo. His academic interests are
          African Politics, Political Science in Africa, and Qualitative Social
          Science.
          <br />
          Alongside his academic studies, he does Web/App design and front-end
          coding as a freelancer.
        </p>

        <h3>Academic Background</h3>
        <p>
          University of Tokyo / Bachelor’s Degree, Interdisciplinary Social
          Sciences
        </p>

        <h3>Experience</h3>
        <p>
          Progate Inc., Africa Team Lead, August 2018 - April 2020, Tokyo
          (Mainly remote)
          <br />
          Hongo Aerospace Inc., Intern, April 2017 - January 2018, Tokyo
          <br />
          NPO Bizjapan, Vice President, May 2016 - Mar. 2018, Tokyo
        </p>

        <h3>Contact</h3>
        <p>
          <a
            style={{ textDecoration: "underline", color: "#1F4C66" }}
            href="https://twitter.com/hirkame"
          >
            Twitter
          </a>{" "}
          /{" "}
          <a
            style={{ textDecoration: "underline", color: "#1F4C66" }}
            href="https://www.linkedin.com/in/hiroki-kameyama/"
          >
            Linkedin
          </a>{" "}
          /{" "}
          <a
            style={{ textDecoration: "underline", color: "#1F4C66" }}
            href="https://github.com/hirkame"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default About
