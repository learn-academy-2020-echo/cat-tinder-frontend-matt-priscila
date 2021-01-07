import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CatIndex from "../catindex"
Enzyme.configure({ adapter: new Adapter() })

it("header paragraph text", () => {
  const renderedComponent = shallow(<CatIndex />)
  expect(renderedComponent.find("div").text()).toEqual("This is our CatIndex!")
  console.log(renderedComponent.find("div"))
})
