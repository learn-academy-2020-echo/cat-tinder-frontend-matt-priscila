import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CatEdit from "../catedit"
Enzyme.configure({ adapter: new Adapter() })

it("header paragraph text", () => {
  const renderedComponent = shallow(<CatEdit />)
  expect(renderedComponent.find("h1").text()).toEqual("This is our CatEdit!")
  console.log(renderedComponent.find("h1"))
})
