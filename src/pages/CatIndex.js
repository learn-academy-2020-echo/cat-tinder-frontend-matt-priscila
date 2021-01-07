import React, { Component } from "react"

class CatIndex extends Component {
  render() {
    return (
      <>
        <h1>Come Meow with Us!</h1>
        { this.props.cats.map((cat, index) => {
          return (
            <a href={`/catshow/${cat.id}`}><p key={ index }>{ cat.name }</p></a>
          )
        })}
      </>
    )
  }
}

export default CatIndex
