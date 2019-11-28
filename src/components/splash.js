
import React from "react"

import { rhythm } from "../utils/typography"
import logo from "../../content/assets/NMN.png"

const Splash = ({title, description}) => {
  return (
    <div style={{
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      backgroundColor: "black",
    }}>
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
      <div
        style={{
          display: "flex",
          "flex-direction" : "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 60,
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Lato",
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: "flex",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <h2
          style={{
            fontSize: 18,
            fontWeight: 400,
            fontStyle: "italic",
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: "flex",
          }}>
          {description}
        </h2>
      </div>
    </div>
  )
}

export default Splash
