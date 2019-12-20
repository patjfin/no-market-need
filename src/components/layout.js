import React from "react"

import { rhythm } from "../utils/typography"
import Splash from "../components/splash"
import SplashMinified from "../components/splash-minified"

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
          class="grey-text"
          style={{
            fontSize: "12px",
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: "30px",
            maxWidth: rhythm(40),
            display: "flex",
            justifyContent: "center",
          }}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
