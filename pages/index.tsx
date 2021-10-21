import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Flex, VStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    return (
        <Container maxWidth="container.xl" padding={0}>
          asdlkj
            <Flex h="100vh" py={20}>
                <VStack
                    w="full"
                    h="full"
                    p={10}
                    spacing={10}
                    alignItems="flex-start"
                >
                    <p>helo</p>
                </VStack>
                <VStack
                    w="full"
                    h="full"
                    p={10}
                    spacing={10}
                    alignItems="flex-start"
                    bg="gray.50"
                >
                    <p>helo2</p>
                </VStack>
            </Flex>
        </Container>
    );
};

export default Home;
