import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Splash from "../components/splash"
import Navbar from "../components/navbar"
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
        <div style={{
          display: "flex",
          padding: "30px"
        }}>
          <div
            style={{
              width: "100px"
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
        </div>
      )
    }
    return (
      <div>
        <div 
          style={{ backgroundColor: "black", color: "white"}}>
          <header
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(40),
            }}>
            {header}
          </header>
        </div>
        <div>
          {/* <Navbar /> */}
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
            maxWidth: rhythm(40),
          }}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
