import React from "react";
import {
    HTMLChakraProps,
    useColorModeValue,
    useToken,
    Heading,
    Box,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = (props: HTMLChakraProps<"div">) => {
    const [white, black] = useToken("colors", ["white", "gray.800"]);
    return (
        <NextLink href="/">
            <Box {...props}>
                <Heading
                    as="a"
                    size="lg"
                    color={useColorModeValue(black, white)}
                >
                    Food Decisions
                </Heading>
            </Box>
        </NextLink>
    );
};

export default Logo;
