import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { companies, objects } from "../../../lib/startup-generator"

class X4Y extends React.Component {
  
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    
    const company = companies[Math.floor(Math.random()*companies.length)];
    const object = objects[Math.floor(Math.random()*objects.length)];

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
                fontSize: "80px",
                textDecoration: "underline",
              }}
            >
              X for Y
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#828282"
              }}
            >
              You have 1 minute to pitch the company below...
            </div>
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "120px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <div>
              <img
                src={'/logos/' + company.logo}
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
              {object.icon}
            </div>
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "#393eff",
            }}
          >
            "{company.name} for {object.name}"
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