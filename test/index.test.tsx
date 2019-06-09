import * as React from "react";
import { shallow, CommonWrapper } from "enzyme";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import mockProps from "../src";

const SubComponent = () => <div />;

const Component = (props: any) => <SubComponent {...props} />;

describe("enzyme-to-json-mock-props", () => {
  let wrapper: CommonWrapper;
  const props = {
    foo: {
      bar: 123
    },
    asd: {
      qwe: 321
    },
    iop: "asd"
  };

  beforeEach(() => {
    wrapper = shallow(<Component {...props} />);
  });

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mock the indicated props", () => {
    expect(mockProps(wrapper, ["foo", "poi", "iop"])).toMatchSnapshot();
  });
});
