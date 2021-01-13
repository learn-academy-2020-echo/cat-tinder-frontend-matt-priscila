import React, { Component } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import "./App.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import cats from "./mockCats.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [],
    }
  }

  componentDidMount() {
    this.catIndex()
  }

  catIndex = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => {
        return response.json()
      })
      .then((catsArray) => {
        // set the state with the data from the backend into the empty array
        this.setState({ cats: catsArray })
      })
      .catch((errors) => {
        console.log("index errors:", errors)
      })
  }

  createCat = (newcat) => {
    console.log(newcat)
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response === 422) {
          alert("That submission did not work, please try again!")
        }
        console.log(response)
        return response.json()
      })
      .then((payload) => {
        console.log(payload)
        this.catIndex()
      })
      .catch((errors) => {
        console.log("create errors:", errors)
      })
  }

  updateCat = (editcat, id) => {
    console.log(editcat)
    console.log(id)
    fetch(`http://localhost:3000/catshow/${id}`,
   {
      body: JSON.stringify(editcat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => {
        if (response === 422) {
          alert("That submission did not work, please try again!")
        }
        console.log(response)
        return response.json()
      })
      .then((payload) => {
        console.log(payload)
        this.catIndex()
      })
      .catch((errors) => {
        console.log("create errors:", errors)
      })

  }

  // deleteCat = (deletecat, id) => {
  //   console.log(editcat)
  //   console.log(id)

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/catindex" component={CatIndex} /> */}

          <Route
            path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} />}
          />

          {/* <Route path="/catshow" component={CatShow} /> */}
          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = props.match.params.id

              let cat = this.state.cats.find((cat) => cat.id === parseInt(id))

              return <CatShow cat={cat} />
            }}
          />

          {/* <Route path="/catnew" component={CatNew} /> */}
          <Route
            path="/catnew"
            render={(props) => <CatNew createCat={this.createCat} />}
          />

          <Route
            exact path={"/catedit/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return <CatEdit updateCat={ this.updateCat } cat={ cat } />
            }}
          /> 
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
