import React, { useState } from "react";
import { Button, IconButton } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
    faMoon,
    faSun,
    faTimes,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import Logo from "./Logo";

interface MenuToggleProps {
    toggle: any;
    isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            <IconButton
                as="a"
                aria-label="menu-toggle"
                icon={
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        fontSize="20px"
                    />
                }
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
        <Box
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
        >
            <Link href={to} color={color}>
                {children}
            </Link>
        </Box>
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
        <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
        >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/how">How It Works</MenuItem>
        </Stack>
    </Box>
);

const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue("gray.900", "gray.100");

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["black", "black", "primary.700", "primary.700"]}
            {...props}
        >
            <Flex>
                <Logo />
            </Flex>
            <IconButton
                aria-label="color-mode-toggle"
                onClick={toggleColorMode}
                color={color}
                icon={
                    <FontAwesomeIcon
                        icon={colorMode === "light" ? faMoon : faSun}
                        inverse={colorMode === "light" ? false : true}
                        fontSize="20px"
                    />
                }
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </Flex>
    );
};
export default NavBar;
