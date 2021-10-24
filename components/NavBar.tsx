import React, { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
    faMoon,
    faSun,
    faTimes,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Spacer } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";
import NextLink from "next/link";
import Logo from "./Logo";

interface MenuToggleProps {
    toggle: any;
    isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
    const color = useColorModeValue("gray.900", "gray.100");

    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            <IconButton
                as="a"
                aria-label="menu-toggle"
                color={color}
                icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
            />
        </Box>
    );
};

interface MenuItemProps {
    children: React.ReactNode;
    isLast?: boolean;
    to: string;
}

const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemProps) => {
    const color = useColorModeValue("gray.900", "gray.100");

    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            color={color}
            {...rest}
        >
            <NextLink href={to} passHref>
                <Link>{children}</Link>
            </NextLink>
        </Text>
    );
};

interface MenuLinksProps {
    isOpen: boolean;
}

const MenuLinks = ({ isOpen }: MenuLinksProps) => (
    <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
    >
        <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
        >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/how">How It works </MenuItem>
            <MenuItem to="/faetures">Features </MenuItem>

            {/* <MenuItem to="/signup" isLast>
            <Button
                size="sm"
                rounded="md"
                color={[
                    "primary.500",
                    "primary.500",
                    "white",
                    "white",
                ]}
                bg={[
                    "white",
                    "white",
                    "primary.500",
                    "primary.500",
                ]}
                _hover={{
                    bg: [
                        "primary.100",
                        "primary.100",
                        "primary.600",
                        "primary.600",
                    ],
                }}
            >
                Create Account
            </Button>
        </MenuItem> */}
        </Flex>
    </Box>
);

const ColorToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue("gray.900", "gray.100");

    return (
        <IconButton
            aria-label="color-mode-toggle"
            onClick={toggleColorMode}
            color={color}
            ml={{ base: "15", md: "none" }}
            mr={{ base: "none", md: "15" }}
            icon={
                <FontAwesomeIcon
                    icon={colorMode === "light" ? faMoon : faSun}
                />
            }
        />
    );
};

const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Flex
            as="nav"
            align="center"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["blue.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            <Flex align="center">
                <Logo />
            </Flex>
            <Spacer />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <ColorToggleButton />
            <MenuLinks isOpen={isOpen} />
        </Flex>
    );
};
export default NavBar;
