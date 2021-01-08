import React, { Component } from "react"
import { Button } from "reactstrap"

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-buttons">
          <Button id="home-button" outline color="primary">
            Home Page
          </Button>{" "}
          <Button id="create-button" outline color="secondary">
            Create Purr Account
          </Button>{" "}
          <Button id="browse-button" outline color="success">
            See all our Purrdy Cats
          </Button>{" "}
          {/* <Button id="third-button" outline color="info">
            info
          </Button>{" "} */}
          {/* <Button id="first-button" outline color="warning">
            warning
          </Button>{" "}
          <Button outline color="danger">
            danger
          </Button> */}
        </div>
        <br />
        <br />
        <br />
      </>
    )
  }
}

export default Header
