import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import profileImage from "../../content/assets/patrick-profile.png"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const posts = data.allMdx.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={description}
      >
        <SEO title="All posts" />

        <div class="home-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                    <article class="article-container" key={node.fields.slug}>
                      <h3
                        style={{
                          marginTop: "8px",
                          marginBottom: "18px",
                          textAlign: "center",
                          fontSize: "28px",
                        }}
                      >
                        {title}
                      </h3>
                      <div class="author mt_12">
                        <img class="profile-icon" src={profileImage} />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "8px",
                          }}
                        >
                          <span class="small-text light-text">Patrick</span>
                          <span
                            style={{ marginTop: "-3px" }}
                            class="tiny-text grey-text"
                          >
                            7 minute read
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              )
            })}
          </div>

          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              minWidth: "250px",
            }}
          >
            <u>Resources</u>

            <Link to="x4y">
              X4Y startup idea generator
            </Link>
          </div>

        </div>
          
      </Layout>
    )
  }
}

export default BlogIndex

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
