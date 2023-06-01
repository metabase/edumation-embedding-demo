import { defaultTheme, GlobalStyle } from "@constants/theme";
import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import DefaultContainer from "@components/container/DefaultContainer";
import MainContainer from "@components/container/MainContainer";
import Nav from "@components/ui/nav/Nav";
import { ThemeProvider } from "styled-components";
import JWTProvider from "@components/thirdParty/metabase/JWTProvider";
import { useAccountsStore } from "@stores/accounts";

type EmbeddingDemoAppComponentProps = NextComponentType<
  NextPageContext,
  any,
  any
> & {
  container?: NextComponentType;
};

type EmbeddingDemoAppProps = AppProps & {
  Component: EmbeddingDemoAppComponentProps;
};

export default function App({
  Component,
  pageProps,
}: EmbeddingDemoAppProps): ReactElement {
  const Container = Component.container || DefaultContainer;
  const { account } = useAccountsStore((state) => ({ account: state.account }));

  return (
    <>
      <Head>
        <title>Edumation</title>
      </Head>

      <JWTProvider user={account} expiresIn="2 days">
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Nav />
          <MainContainer>
            <Container {...pageProps}>
              <Component {...pageProps} />
            </Container>
          </MainContainer>
        </ThemeProvider>
      </JWTProvider>
    </>
  );
}
