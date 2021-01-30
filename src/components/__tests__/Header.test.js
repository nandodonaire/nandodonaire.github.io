import { shallow } from "enzyme";
import Header from "../Header";

describe("Tests for Header component", () => {
  test("should render Header component", () => {
    shallow(<Header />);
  });
});
