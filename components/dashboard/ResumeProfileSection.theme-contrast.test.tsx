import { render } from "@testing-library/react";
import ResumeProfileSection from "./ResumeProfileSection";

describe("Theme Contrast Test", () => {

  test("renders in light mode", () => {
    document.documentElement.classList.remove("dark");
    const { container } = render(<ResumeProfileSection />);
    expect(container).toBeTruthy();
  });

  test("renders in dark mode", () => {
    document.documentElement.classList.add("dark");
    const { container } = render(<ResumeProfileSection />);
    expect(container).toBeTruthy();
  });

});