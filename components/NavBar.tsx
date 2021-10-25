import { useState, ReactNode } from "react";
import { Text, Link, Spacer, Button, IconButton } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@auth0/nextjs-auth0";
import {
    faMoon,
    faSun,
    faTimes,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Flex } from "@chakra-ui/layout";
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

interface NavLinkProps {
    children: ReactNode;
    isLast?: boolean;
    to: string;
}

const NavLink = ({ children, isLast, to = "/", ...rest }: NavLinkProps) => {
    const color = useColorModeValue("gray.900", "gray.100");

    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            color={color}
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Text>
    );
};

interface NavbarLinksProps {
    isOpen: boolean;
}

const NavbarLinks = ({ isOpen }: NavbarLinksProps) => {
    const { user, isLoading } = useUser();
    return (
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/how">How It works </NavLink>
                <NavLink to="/faetures">Features </NavLink>

                {!isLoading && !user && (
                    <NavLink to="/api/auth/login" isLast>
                        <Button
                            size="md"
                            rounded="md"
                            color={[
                                "orange.500",
                                "orange.500",
                                "white",
                                "white",
                            ]}
                            bg={["white", "white", "orange.500", "orange.500"]}
                            _hover={{
                                bg: [
                                    "orange.100",
                                    "orange.100",
                                    "orange.600",
                                    "orange.600",
                                ],
                            }}
                        >
                            Log in
                        </Button>
                    </NavLink>
                )}
                {user && (
                    <NavLink to="/api/auth/logout" isLast>
                        <Button
                            size="md"
                            rounded="md"
                            color={[
                                "orange.500",
                                "orange.500",
                                "white",
                                "white",
                            ]}
                            bg={["white", "white", "orange.500", "orange.500"]}
                            _hover={{
                                bg: [
                                    "orange.100",
                                    "orange.100",
                                    "orange.600",
                                    "orange.600",
                                ],
                            }}
                        >
                            Log out
                        </Button>
                    </NavLink>
                )}
            </Flex>
        </Box>
    );
};

const ColorToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue("black", "white");

    return (
        <IconButton
            aria-label="color-mode-toggle"
            onClick={toggleColorMode}
            color={color}
            ml={{ base: "none", md: "15" }}
            mr={{ base: "15", md: "none" }}
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
            bg={["orange.500", "orange.500", "transparent", "transparent"]}
            color={["white", "white", "orange.700", "orange.700"]}
            {...props}
        >
            <Flex align="center">
                <Logo />
            </Flex>
            <Spacer />
            <ColorToggleButton />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <NavbarLinks isOpen={isOpen} />
        </Flex>
    );
};
export default NavBar;
