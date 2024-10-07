import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppLayout } from "@/layouts";
import { FavoriteUserStoreProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppLayout>
        <FavoriteUserStoreProvider>
          <Component {...pageProps} />
        </FavoriteUserStoreProvider>
      </AppLayout>
    </ChakraProvider>
  );
}
