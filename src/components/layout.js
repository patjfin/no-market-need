import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Splash from "../components/splash"
import MainNav from "../components/main-nav"
import logo from "../../content/assets/NMN.png"


class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Splash title={title} description={description} />
      )
    } else {
      header = (
        <div
        class="splash-secondary"
        style={{
          display: "flex",
          padding: "30px"
        }}>
        <Link to="/">
          <div
            class="icon-link"
            style={{
              width: "100px",
              height: "44px"
            }}>
              <img 
                src={logo}
                style={{
                  width: "100%",
                  display: "block",
                  height: "auto",
                }}
              />
            </div>
          </Link>
        </div>
      )
    }
    return (
      <div>
        <div
        class="splash"
          style={{color: "#F6F0FD", padding: "20px"}}>
        <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
      </section>
          <header
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
            }}>
            {header}
          </header>
        </div>
        <div class="main-nav">
          <div style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(40),
              }}>
            <MainNav />
        </div>

        </div>
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: "30px",
            maxWidth: rhythm(40),
          }}>
          {children}
        </main>
        <footer           
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: "30px",
            maxWidth: rhythm(40),
          }}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
