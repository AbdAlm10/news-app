import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectTopic: (topic: string) => void;
  selectedTopic: string;
}

const TopicsSelector = ({ onSelectTopic, selectedTopic }: Props) => {
  const topics = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const currentSortTopic = topics.find((e) => e === selectedTopic);

  return (
    <Box mt={2} ml={5}>
      <Menu>
        <MenuButton
          size="sm"
          as={Button}
          bg="white"
          rightIcon={<BsChevronDown />}
        >
          {currentSortTopic ? currentSortTopic : "topics"}
        </MenuButton>
        <MenuList>
          {topics.map((topic) => (
            <MenuItem onClick={() => onSelectTopic(topic)} key={topic}>
              {topic}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TopicsSelector;
