import { Input } from "../src/components/Input/Input";

import { test, expect } from "vitest";

test("renders Input component", () => {
  expect(<Input type="text" placeholder="Test Input" />).toMatchSnapshot();
});
