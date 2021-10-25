import {
    HTMLChakraProps,
    useColorModeValue,
    useToken,
    Heading,
    Box,
} from "@chakra-ui/react";

const Logo = (props: HTMLChakraProps<"div">) => {
    const [white, black] = useToken("colors", ["white", "gray.800"]);
    return (
        <Box {...props}>
            <Heading
                as="a"
                href="/"
                size="lg"
                color={useColorModeValue(black, white)}
            >
                Food Decisions
            </Heading>
        </Box>
    );
};

export default Logo;
