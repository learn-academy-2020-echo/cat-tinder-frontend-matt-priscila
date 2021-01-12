import React, { Component } from "react"
import { NavLink } from "react-router-dom"
class CatIndex extends Component {
  render() {
    return (
      <>
        <h1>Come Meow with Us!</h1>
        {this.props.cats.map((cat, index) => {
          return (
            <NavLink to={`/catshow/${cat.id}`} key={index}>
              {cat.name}
            </NavLink>
          )
        })}
      </>
    )
  }
}

export default CatIndex
