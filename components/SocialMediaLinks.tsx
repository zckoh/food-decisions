import {
    ButtonGroup,
    ButtonGroupProps,
    IconButton,
    Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

const SocialMediaLinks = (props: ButtonGroupProps) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <Link isExternal href="https://www.linkedin.com/in/zackoh">
            <IconButton
                aria-label="LinkedIn"
                icon={<FontAwesomeIcon icon={faLinkedin} fontSize="20px" />}
            />
        </Link>
        <Link isExternal href="https://zckoh.github.io">
            <IconButton
                aria-label="Twitter"
                icon={<FontAwesomeIcon icon={faGlobeEurope} fontSize="20px" />}
            />
        </Link>
        <Link isExternal href="https://github.com/zckoh/food-decisions">
            <IconButton
                aria-label="GitHub"
                icon={<FontAwesomeIcon icon={faGithub} fontSize="20px" />}
            />
        </Link>
    </ButtonGroup>
);

export default SocialMediaLinks;
