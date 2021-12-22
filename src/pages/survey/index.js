import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { HorizontalBar } from "react-chartjs-2"
import { categories } from "../../../lib/survey-data"
import { rhythm } from "../../utils/typography"

const chartOptions = {
  scales: {
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
}

class X4Y extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: null,
    }
    this.changeChart = this.changeChart.bind(this)
  }

  changeChart(key) {
    let category = categories[key]
    this.setState({
      chartData: {
        labels: category.labels,
        datasets: [
          {
            label: category.name,
            backgroundColor: category.color,
            borderColor: category.color,
            borderWidth: 1,
            data: category.data,
          },
        ],
      },
    })
  }

  resetChart() {
    this.setState({
      chartData: null,
    })
  }

  chartElement() {
    return (
      <div>
        <div className="flex" style={{ marginBottom: "30px" }}>
          <div className="survey-close" onClick={this.resetChart.bind(this)}>
            Categories
          </div>
          <svg
            viewBox="0 0 20 20"
            width="15"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16"
              fill="#808c96"
              fill-rule="evenodd"
            />
          </svg>
          <div className="breadcrumbs-subtle">CRM</div>
        </div>
        <HorizontalBar data={this.state.chartData} options={chartOptions} />
      </div>
    )
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    var chart

    if (this.state.chartData) {
      chart = this.chartElement()
    } else {
      chart = (
        <div
          className="survey-categories"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="survey-item"
            onClick={this.changeChart.bind(this, "analytics")}
          >
            <div className="survey-category title">Analytics</div>
            <img
              className="survey-category image large"
              src={"/survey/analytics.png"}
            />
          </div>

          <div
            className="survey-item survey-crm"
            onClick={this.changeChart.bind(this, "crm")}
          >
            <div className="survey-category title">CRM</div>
            <img
              className="survey-category image small"
              src={"/survey/crm.png"}
            />
          </div>

          <div
            className="survey-item survey-comms"
            onClick={this.changeChart.bind(this, "comms")}
          >
            <div className="survey-category title">Customer communication</div>
            <img
              className="survey-category image large"
              src={"/survey/customer-communication.png"}
            />
          </div>

          <div
            className="survey-item"
            onClick={this.changeChart.bind(this, "design")}
          >
            <div className="survey-category title">Design</div>
            <img
              className="survey-category image small"
              src={"/survey/design.png"}
            />
          </div>

          <div
            className="survey-item survey-dev"
            onClick={this.changeChart.bind(this, "dev")}
          >
            <div className="survey-category title">Dev tools</div>
            <img
              className="survey-category image large"
              src={"/survey/dev-tools.png"}
            />
          </div>

          <div
            className="survey-item survey-doc"
            onClick={this.changeChart.bind(this, "documentation")}
          >
            <div className="survey-category title">Documentation</div>
            <img
              className="survey-category image small"
              src={"/survey/documentation.png"}
            />
          </div>

          <div
            className="survey-item survey-mgmt"
            onClick={this.changeChart.bind(this, "mgmt")}
          >
            <div className="survey-category title">Project management</div>
            <img
              className="survey-category image large"
              src={"/survey/project-management.png"}
            />
          </div>
        </div>
      )
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={description}
      >
        <SEO title="x4y Companies" />

        <div className="survey-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1",
            }}
          >
            {chart}
          </div>

          <div className="survey-sidebar">
            <div
              style={{
                fontSize: "30px",
              }}
            >
              Startup tools survey
            </div>
            <div className="survey-explanation">
              We asked 200+ startups what tools they use. Click a category to
              see the most popular.
            </div>
            <span
              class="grey-text"
              style={{
                fontSize: "12px",
                maxWidth: rhythm(40),
                marginTop: 10,
                display: "flex",
              }}
            >
              Created by
              <a href="https://twitter.com/RomyLynch">&nbsp;Romy Lynch</a>
            </span>{" "}
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
