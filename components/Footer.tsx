import { Box, Stack, Container } from "@chakra-ui/react";
import Copyright from "./Copyright";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => (
    <Container maxWidth="container.xl" padding={0}>
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            maxW="7xl"
            py="12"
            px={{ base: "4", md: "8" }}
        >
            <Stack>
                <Stack
                    direction="row"
                    spacing="4"
                    align="center"
                    justify="space-between"
                >
                    <Logo />
                    <SocialMediaLinks />
                </Stack>
                <Copyright alignSelf={{ base: "center", sm: "start" }} />
            </Stack>
        </Box>
    </Container>
);

export default Footer;
