import { expect, test } from "vitest";
import { Button } from "../src/components/Button/Button";
import { ArrowRightIcon } from "lucide-react";

test("renders Button component", () => {
  expect(
    <Button label="Test Button" startIcon={<ArrowRightIcon />} />,
  ).toMatchSnapshot();
});
