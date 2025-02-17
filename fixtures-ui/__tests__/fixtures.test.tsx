import FixturesList from "@/components/fixture-list";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const fixtures = [
  {
    id: "1",
    raceName: "Australian Grand Prix",
    date: "2025-03-16",
    circuit: "Albert Park Circuit",
    location: "Melbourne, Australia",
  },
];
describe("Fixtures", () => {
  beforeEach(() => {});

  it("renders fixtures", () => {
    render(<FixturesList fixtures={fixtures} />);
    expect(screen.getByText("Australian Grand Prix")).toBeInTheDocument();
  });
});
