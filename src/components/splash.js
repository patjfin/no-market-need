
import React from "react"
import hero from "../../content/assets/hero.png"

const Splash = ({ description }) => {
  return (
    <div
    style={{
      display: "flex",
      minHeight: "50vh",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <img 
        src={hero}
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "block",
          height: "auto",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      />

      <div
        style={{
          position: "relative",
          minHeight: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Pixel",
          textAlign: "center",
        }}
      >
        <p
          style={{
            position: "absolute",
            marginLeft: "1px",
            fontFamily: "Pixel",
            color: "#FFCADD",
          }}
        >{description}</p>
        <p
          style={{
            position: "absolute",
            marginLeft: "-1px",
            fontFamily: "Pixel",
            color: "#ACECF4",
          }}
        >{description}</p>
        <p
          style={{
            position: "absolute",
            fontFamily: "Pixel",
            color: "white",
          }}
        >{description}</p>
      </div>
    </div>
  )
}

export default Splash
