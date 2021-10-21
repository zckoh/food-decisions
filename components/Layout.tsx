import React from "react";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "./NavBar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <>
        <Head>
            <title>Food Decisions</title>
        </Head>
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
        >
            <NavBar />
            {children}
            <Footer />
        </Flex>
    </>
);

export default Layout;
