import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import Splash from "../components/splash"
import SplashMinified from "../components/splash-minified"
import MainNav from "../components/main-nav"
import logo from "../../content/assets/NMN.png"

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Splash description={description} />
      )
    } else {
      header = (
        <SplashMinified description={description} />
      )
    }
    return (
      <div>
        <div class="splash" style={{ color: "#F6F0FD", padding: "20px" }}>
          <section className="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
          </section>
          <header
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
            }}
          >
            {header}
          </header>
        </div>
        <div class="main-nav">
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
            }}
          ></div>
        </div>
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: "30px",
            maxWidth: rhythm(40),
          }}
        >
          {children}
        </main>
        <footer
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: "30px",
            maxWidth: rhythm(40),
          }}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
