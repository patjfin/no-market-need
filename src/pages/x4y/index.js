import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { companies, objects } from "../../../lib/startup-generator"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

class X4Y extends React.Component {
  constructor(props) {
    super(props)
    const company = companies[Math.floor(Math.random() * companies.length)]
    const object = objects[Math.floor(Math.random() * objects.length)]
    this.state = {
      company: company,
      object: object,
      key: new Date(),
    }
  }

  resetGame() {
    const company = companies[Math.floor(Math.random() * companies.length)]
    const object = objects[Math.floor(Math.random() * objects.length)]
    this.setState({
      company: company,
      object: object,
      key: new Date(),
    })
  }

  resetGameEvent(event) {
    if (event.keyCode === 13) {
      this.resetGame()
    }
  }

  componentWillMount() {
    if (typeof document !== `undefined`) {
      document.addEventListener(
        "keydown",
        this.resetGameEvent.bind(this),
        false
      )
    }
  }

  componentWillUnmount() {
    if (typeof document !== `undefined`) {
      document.removeEventListener(
        "keydown",
        this.resetGameEvent.bind(this),
        false
      )
    }
  }

  renderTime = value => {
    if (value === 0) {
      return <div className="timer">Time's up!</div>
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{value}</div>
        <div className="text">seconds</div>
      </div>
    )
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={description}
      >
        <SEO title="x4y Companies" />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: "1",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                color: "#393eff",
                textAlign: "center",
                minHeight: "115px",
              }}
            >
              {this.state.company.name} for {this.state.object.name}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div class="x4y-logo">
                <img
                  src={"/logos/" + this.state.company.logo}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>

              <div class="x4y-for">for</div>

              <div class="x4y-emoji">{this.state.object.icon}</div>
            </div>
          </div>

          <div class="x4y-sidebar">
            <div
              style={{
                fontSize: "30px",
              }}
            >
              X for Y
            </div>

            <div class="x4y-explaination">
              "X for Y" startup ideas are great, even Andy Chen{" "}
              <a href="https://andrewchen.co/x-for-y-startup-ideas/">agrees</a>.
              So why not come up with your own?
            </div>

            <div class="keys-container">
              <div>
                <b>Key controls</b>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <div class="key">Enter</div>
                <div class="explainer">to shuffle company</div>
              </div>
            </div>

            <div class="reset-button" onClick={this.resetGame.bind(this)}>
              Shuffle
            </div>

            <CountdownCircleTimer
              isPlaying
              durationSeconds={60}
              colors={[["#00cc88", 0.5], ["#F7B801", 0.3], ["#A30000"]]}
              renderTime={this.renderTime}
              onComplete={() => [false, 1000]}
              key={this.state.key}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default X4Y

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
          }
        }
      }
    }
  }
`
