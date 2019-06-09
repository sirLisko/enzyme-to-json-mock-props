# enzyme-to-json-mock-props

> it gives you the ability to mock props generated via `enzyme-to-json`.

## Install

```bash
npm install enzyme-to-json-mock-props
```

## Example

```js
import { shallow } from "enzyme";
import mockProps from "enzyme-to-json-mock-props";

test("I am a test", () => {
  // ...

  expect(mockProps(wrapper, ["foo", "poi", "iop"])).toMatchSnapshot();
});
```
