
import React from "react"

import hero from "../../content/assets/side.png"
import { Link } from "gatsby"


const Splash = ({ description }) => {
  return (
    <div
      class="splash"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px"
      }}>
      <Link to="/">
        <div
          class="icon-link"
          style={{
            width: "250px",
          }}
        >
          <img 
            src={hero}
            style={{
              width: "100%",
              display: "block",
              height: "auto",
              marginBottom: "0px",
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default Splash
