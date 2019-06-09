import { CommonWrapper } from "enzyme";
import toJson, { Json } from "enzyme-to-json";

const mockProps = (wrapper: CommonWrapper, props: Array<string>) =>
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
