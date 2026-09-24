import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import { Footer, Header } from "@/components/layout";

import theme from "../theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const layout = Component.getLayout ?? getLayout;

  return layout(<Component {...pageProps} />);
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const getLayout = function getLayout(page: ReactElement) {
  return (
    <html lang="en" className={roboto.variable}>
      <Box
        component="body"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Box flexGrow={1}>{page}</Box>
          <Footer />
        </ThemeProvider>
      </Box>
    </html>
  );
};
