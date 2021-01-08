import React, { Component } from "react"
import { Button } from "reactstrap"

class Header extends Component {
  render() {
    return (
      <>

        <div className="header-buttons">
      < img src= "https://image.freepik.com/free-vector/cat-couple-love-tangling-their-tails_71767-44.jpg" width="300" />
          <Button id="home-button" href= "/" outline color="primary">

            Home Page
          </Button>{" "}
          <Button id="create-button" href="/catnew"outline color="secondary">
            Add Purr Account
          </Button>{" "}
          <Button id="browse-button" href= "/catindex" outline color="success">
            See Pretty Purrdy Cats
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
