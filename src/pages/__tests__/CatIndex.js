import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CatIndex from "../catindex"
Enzyme.configure({ adapter: new Adapter() })

it("to see header text", () => {
  const renderedComponent = shallow(<CatIndex cats = {[]} />)
  expect(renderedComponent.find("h1").text()).toEqual("Come Meow with Us!")
  console.log(renderedComponent.find("h1"))
})


