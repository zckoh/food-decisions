import { Text, TextProps } from "@chakra-ui/layout";

const Copyright = (props: TextProps) => (
    <Text fontSize="sm" {...props}>
        &copy; {new Date().getFullYear()} Zac Koh. All rights reserved.
    </Text>
);

export default Copyright;
