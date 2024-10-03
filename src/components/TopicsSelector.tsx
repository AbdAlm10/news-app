import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const TopicsSelector = () => {
  const topics = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <Box mt={2} ml={5}>
      <Menu>
        <MenuButton
          size="sm"
          as={Button}
          bg="white"
          rightIcon={<BsChevronDown />}
        >
          Topics
        </MenuButton>
        <MenuList>
          {topics.map((topic) => (
            <MenuItem onClick={() => console.log(topic)} key={topic}>
              {topic}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TopicsSelector;
