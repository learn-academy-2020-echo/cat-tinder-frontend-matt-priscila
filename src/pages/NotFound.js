import React, { Component } from "react"

class NotFound extends Component {
  render() {
    return (
      <>
        <h1>
          Uh oh, you found a the Sad Dog on our App, looks like something went
          wrong{" "}
        </h1>
        <img
          src="https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Sad Dog"
          width="600"
        ></img>
      </>
    )
  }
}

export default NotFound
