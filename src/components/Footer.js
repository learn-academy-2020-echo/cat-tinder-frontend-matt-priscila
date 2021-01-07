import React, { Component } from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="#">See the Cats</NavLink>{" "}
          <NavLink href="#">Create a cat</NavLink>{" "}
          <NavLink href="#">Destroy the cat</NavLink>{" "}
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </Nav>
      </div>
    )
  }
}

export default Footer
