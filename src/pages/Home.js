import React, { Component } from "react"

class Home extends Component {
  render() {
    return (
      <div className="main-body">
        <h1>Welcome to Purrdy Cats</h1>
        <img
          id="home-pic"
          src="https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt="Sad Dog"
          // width="600"
        ></img>
      </div>
    )
  }
}
export default Home
