import { getMonth } from "../../utils/getMonth.js";

describe("test get month by number", () => {
  const correct_1 = 1;
  const correct_2 = 5;

  const incorrect_1 = 13;
  const incorrect_2 = '';
  const incorrect_3 = -4;

  it("Positive tests: month to equal январь & май", () => {
    expect(getMonth(correct_1)).toBe('январь');
    expect(getMonth(correct_2)).toBe('май');
  }),
  it("Negative tests: month to equal неизвестно", () => {
    expect(getMonth(incorrect_1)).toBe('неизвестно');
    expect(getMonth(incorrect_2)).toBe('неизвестно');
    expect(getMonth(incorrect_3)).toBe('неизвестно');
  });
});