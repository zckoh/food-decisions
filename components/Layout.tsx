import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <>
        <Head>
            <title>Food Decisions</title>
        </Head>
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1500px" }}
            m="0 auto"
        >
            <NavBar />
            {children}
            <Footer />
        </Flex>
    </>
);

export default Layout;
