import React from "react"

import { rhythm } from "../utils/typography"
import Splash from "../components/splash"
import SplashMinified from "../components/splash-minified"

class Layout extends React.Component {
  state = {
    email: "",
    submitted: false,
    text: "Subscribe to keep up",
    buttonText: "Submit",
  }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      email: value,
    })
  }

  _handleSubmit = async e => {
    e.preventDefault()
    this.setState({ buttonText: "Submitting..." })

    await fetch("https://hooks.zapier.com/hooks/catch/6111089/o7aq218/", {
      method: "POST",
      body: JSON.stringify({ email: this.state.email }),
    })

    this.setState({
      email: "",
      text: "Thanks for subscribing!",
      buttonText: "Submit",
    })
  }

  render() {
    const { location, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <Splash description={description} />
    } else {
      header = <SplashMinified description={description} />
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
            width: "100%",
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
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <span
            class="grey-text"
            style={{
              fontSize: "12px",
              padding: "30px",
              maxWidth: rhythm(40),
              display: "flex",
              justifyContent: "center",
            }}
          >
            Collected ramblings from
            <a href="https://twitter.com/patjfin">&nbsp; Patrick Finlay</a>
          </span>
        </footer>
      </div>
    )
  }
}

export default Layout
