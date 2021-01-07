import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header from "../header"
Enzyme.configure({ adapter: new Adapter() })

it("render paragraph text", () => {
  const renderedComponent = shallow(<Header />)
  expect(renderedComponent.find("p").text()).toEqual(
    "A place where we Meow together"
  )
  console.log(renderedComponent.find("p"))
})

it("header paragraph text", () => {
  const renderedComponent = shallow(<Header />)
  expect(renderedComponent.find("h1").text()).toEqual("Cat Tinder")
  console.log(renderedComponent.find("h1"))
})
