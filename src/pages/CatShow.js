import React, { Component } from "react"

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    let { cat } = this.props
    return (
      <>
        <h1>This is our CatShow!</h1>
        <p> { cat.name} </p>
        <p>{ cat.age} </p>
        <p>{ cat.enjoys} </p>
      </>
    )
  }
}

export default CatShow
