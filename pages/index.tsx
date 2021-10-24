import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
    return (
        <Container maxWidth="container.xl" padding={0}>
            <Flex h="90vh">This will be the landing page</Flex>
        </Container>
    );
};

export default Home;
