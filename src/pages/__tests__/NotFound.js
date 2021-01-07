import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NotFound from "../notfound"
Enzyme.configure({ adapter: new Adapter() })

it("renders an image", () => {
  const renderedComponent = shallow(<NotFound />)
  expect(renderedComponent.find("img").prop("alt")).toEqual("Sad Dog")
  console.log(renderedComponent.find("img"))
})
