import { CommonWrapper } from "enzyme";
import toJson, { Json } from "enzyme-to-json";

/**
 * mockProps helper is used to mock props on any Enzyme wrapper Jest snapshot
 * @param wrapper any Enzyme wrapper
 * @param props an array of prop names to be mocked
 */
const mockProps = (wrapper: CommonWrapper, props: Array<string>): Json =>
  toJson(wrapper, {
    noKey: false,
    map: component =>
      props.reduce(
        (component: Json, prop: string): Json =>
          component.props[prop]
            ? {
                ...component,
                props: {
                  ...component.props,
                  [prop]: `[${prop}]`
                }
              }
            : component,
        component
      )
  });

export default mockProps;
