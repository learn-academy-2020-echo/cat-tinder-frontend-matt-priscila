import React, { Component } from "react"
import { NavLink } from "react-router-dom"
class CatIndex extends Component {
  render() {
    return (
      <div className=" main-body">

        <h1>Come Meow with Us!</h1>
        {this.props.cats.map((cat, index) => {
          return (
            <div className= "index-links"> <NavLink to={`/catshow/${cat.id}`} key={index}>
              {cat.name}
            </NavLink>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CatIndex
