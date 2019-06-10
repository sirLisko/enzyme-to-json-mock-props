# enzyme-to-json-mock-props [![npm][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

> it gives you the ability to mock props generated via `enzyme-to-json`.

## Install

```bash
npm install enzyme-to-json-mock-props
```

## Example

Assuming you are using `enzyme-to-json/serializer` as `snapshotSerializers`, [example](https://github.com/adriantoine/enzyme-to-json-v3-testing/blob/master/package.json#L25-L29).

```js
import * as React from "react";
import { shallow } from "enzyme";
import mockProps from "enzyme-to-json-mock-props";

const SubComponent = () => <div />;

const Component = props => (
  <SubComponent {...props} style={{ background: "red", color: "black" }} />
);

describe("my snapshot", () => {
  const props = {
    foo: {
      bar: 123
    },
    foobar: "asd",
    asd: {
      qwe: 321
    }
  };
  it("should render properly", () => {
    const wrapper = shallow(<Component {...props} />);
    expect(
      mockProps(wrapper, ["foo", "foobar", "style", "qwe"])
    ).toMatchSnapshot();
  });
});
```

**before (without `mockProps`):**

```js
exports[`enzyme-to-json-mock-props should render properly 1`] = `
<SubComponent
  asd={
    Object {
      "qwe": 321,
    }
  }
  foo={
    Object {
      "bar": 123,
    }
  }
  foobar="asd"
  style={
    Object {
      "background": "red",
      "color": "black",
    }
  }
/>
`;
```

**after (with `mockProps`):**

```js
exports[`enzyme-to-json-mock-props should mock the indicated props 1`] = `
<SubComponent
  asd={
    Object {
      "qwe": 321,
    }
  }
  foo="[foo]"
  foobar="[foobar]"
  style="[style]"
/>
`;
```

[npm-image]: https://img.shields.io/npm/v/enzyme-to-json-mock-props.svg
[npm-url]: https://npmjs.com/package/enzyme-to-json-mock-props
[travis-image]: https://travis-ci.org/sirLisko/enzyme-to-json-mock-props.svg?branch=master
[travis-url]: https://travis-ci.org/sirLisko/enzyme-to-json-mock-props
[coverage-image]: https://coveralls.io/repos/github/sirLisko/enzyme-to-json-mock-props/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sirLisko/enzyme-to-json-mock-props?branch=master
