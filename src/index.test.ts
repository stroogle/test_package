import { describe, it, expect } from "@jest/globals";
import { add } from "./index";

describe("Test for add", () => {
    it("Check this out!", () => {
        expect(add(5, 6)).toBe(11);
    });
})