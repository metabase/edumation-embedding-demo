/**
 * @jest-environment jsdom
 */
import { act, render, screen } from "@testing-library/react";
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

  it("passes new parameters to iframe on font settings change", () => {
    mockRouter.push("/embedding/public");

    render(
      <ThemeProvider theme={defaultTheme}>
        <PublicEmbeddingPage />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("embedding-iframe").getAttribute("src")).toMatch(
      "&font=false",
    );

    act(() => {
      mockRouter.push("/embedding/public?font=Ubuntu");
    });

    const iframeEl = screen.getByTestId(
      "embedding-iframe",
    ) as HTMLIFrameElement;
    expect(iframeEl.getAttribute("src")).toMatch("&font=Ubuntu");
    expect(iframeEl.contentWindow?.location.href).toMatch("&font=Ubuntu");
  });
});
