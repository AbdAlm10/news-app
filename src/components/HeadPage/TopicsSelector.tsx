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
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  const currentSortTopic = topics.find((e) => e === selectedTopic);

  return (
    <Box mt={2} ml={3}>
      <Menu>
        <MenuButton
          size="md"
          fontFamily="Montserrat"
          fontWeight="bold"
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
