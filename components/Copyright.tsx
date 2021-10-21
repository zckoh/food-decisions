import { Text, TextProps } from "@chakra-ui/layout";
import * as React from "react";

const Copyright = (props: TextProps) => (
    <Text fontSize="sm" {...props}>
        &copy; {new Date().getFullYear()} Foode, Inc. All rights reserved.
    </Text>
);

export default Copyright;
