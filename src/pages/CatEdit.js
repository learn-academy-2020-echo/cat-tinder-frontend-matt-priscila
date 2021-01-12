import React, { Component } from "react"

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
      },
      submitted: false,
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }
  handleSubmit = () => {
    this.props.updateCat(this.state.form, this.props.cat.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <div>
        <h1>This is our CatEdit!</h1>
      </div>
    )
  }
}

export default CatEdit
