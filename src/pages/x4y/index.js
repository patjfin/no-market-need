import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { companies, objects } from "../../../lib/startup-generator"
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class X4Y extends React.Component {

  constructor(props) {
    super(props);
    const company = companies[Math.floor(Math.random()*companies.length)];
    const object = objects[Math.floor(Math.random()*objects.length)];
    this.state = {
      company: company,
      object: object,
      key: new Date,
    }
  }

  resetGame(event) {
    if (event.keyCode == 13) {
      const company = companies[Math.floor(Math.random()*companies.length)];
      const object = objects[Math.floor(Math.random()*objects.length)];
      this.setState({
        company: company,
        object: object,
        key: new Date,
      });
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.resetGame.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.resetGame.bind(this), false);
  }

  renderTime = (value) => {
    if (value === 0) {
      return <div className="timer">Time's up!</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{value}</div>
        <div className="text">seconds</div>
      </div>
    );
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <div>
            <div
              style={{
                textAlign: "center",
                fontSize: "40px",
                textDecoration: "underline",
              }}
            >
              X for Y
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#828282",
                marginBottom: "12px",
              }}
            >
              You have 30 seconds to pitch the company below...
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#828282",
                marginBottom: "40px",
              }}
            >
              Press ENTER to shuffle
            </div>
            
              <CountdownCircleTimer
                isPlaying
                durationSeconds={30}
                colors={[["#00cc88", 0.5], ["#F7B801", 0.3], ["#A30000"]]}
                renderTime={this.renderTime}
                onComplete={() => [false, 1000]}
                key={this.state.key}
              />
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "120px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <img
                src={'/logos/' + this.state.company.logo}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                  width: "120px",
                }}
              />
            </div>

            <div
              style={{
                fontSize: "22px",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              for
            </div>
            
            <div>
              {this.state.object.icon}
            </div>
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "#393eff",
            }}
          >
            "{this.state.company.name} for {this.state.object.name}"
          </div>

        </div>
      </Layout>
    )
  }
}

export default X4Y;

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