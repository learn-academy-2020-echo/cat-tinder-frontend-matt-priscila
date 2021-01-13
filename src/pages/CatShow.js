import React, { Component } from "react"
import { Button } from "reactstrap"

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    let { cat } = this.props
    return (
      <div className="main-body">
        <h1>Hi! Nice to meet ya!</h1>
        <p>My names, {cat.name}</p>
        <p>I'm {cat.age} years old</p>
        <p>I enjoy {cat.enjoys}</p>
        <Button href={`/catedit/${this.props.cat.id}`}>
          Edit Purrfile Here
        </Button>
        <br />
        <br />
        <br />
        <Button>Delete Cat Profile</Button>
      </div>
    )
  }
}

export default CatShow
