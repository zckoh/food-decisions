import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = (props: ButtonGroupProps) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={
                <FontAwesomeIcon icon={faLinkedin} fontSize="20px" />
            }
        />
        <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FontAwesomeIcon icon={faGithub} fontSize="20px" />}
        />
        <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FontAwesomeIcon icon={faTwitter} fontSize="20px" />}
        />
    </ButtonGroup>
);

export default SocialMediaLinks;
