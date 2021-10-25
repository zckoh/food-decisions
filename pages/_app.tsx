import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </UserProvider>
    );
}
export default App;
