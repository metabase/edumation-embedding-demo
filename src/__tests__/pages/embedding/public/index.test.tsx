/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import PublicEmbeddingPage from "@pages/embedding/public";
import mockRouter from "next-router-mock";
import { defaultTheme } from "@constants/theme";
import { ThemeProvider } from "styled-components";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("PublicEmbeddingPage", () => {
  it("renders iframe with embedded app", () => {
    mockRouter.push("/embedding/public");

    render(
      <ThemeProvider theme={defaultTheme}>
        <PublicEmbeddingPage />
      </ThemeProvider>,
    );

    const iframe = screen.getByTestId("embedding-iframe");

    expect(iframe).toBeInTheDocument();
  });

  it("re-renders iframe on font settings change", () => {
    mockRouter.push("/embedding/public");

    const { rerender } = render(
      <ThemeProvider theme={defaultTheme}>
        <PublicEmbeddingPage />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("embedding-iframe").getAttribute("src")).toMatch(
      "&font=false",
    );

    mockRouter.push("/embedding/public?font=Ubuntu");

    rerender(
      <ThemeProvider theme={defaultTheme}>
        <PublicEmbeddingPage />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("embedding-iframe").getAttribute("src")).toMatch(
      "&font=Ubuntu",
    );
  });
});
