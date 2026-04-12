import { MenuItem, Select } from "../src/components/Select/Select";

import { expect, test } from "vitest";

test("renders Select component", () => {
  expect(
    <Select value="option1" onChange={() => {}}>
      <MenuItem value="option1" label="Option 1" />
      <MenuItem value="option2" label="Option 2" />
      <MenuItem value="option3" label="Option 3" />
    </Select>,
  ).toMatchSnapshot();
});
