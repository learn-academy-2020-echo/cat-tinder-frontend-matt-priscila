import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Footer from "../footer"
Enzyme.configure({ adapter: new Adapter() })

it("render paragraph text", () => {
  const renderedComponent = shallow(<Footer />)
  console.log(renderedComponent)
  expect(renderedComponent.find("p").text()).toEqual("Link Based")
})
