import Operate from "../logic/operate";

describe('Operate', () => {
  test('adds two numbers', () => {
    expect(Operate("3", "2", "+")).toBe("5");
  })

  test('subtracts two numbers', () => {
    expect(Operate("3", "2", "-")).toBe("1");
  })
}
)