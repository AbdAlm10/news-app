import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useNewsQueryStore from "../../store";

const TopicsSelector = () => {
  const selectedTopic = useNewsQueryStore((s) => s.newsQuery.topic);
  const onSelectTopic = useNewsQueryStore((s) => s.setSelectedTopic);

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
    <Box mt={2} ml={5}>
      <Menu>
        <MenuButton
          size="md"
          fontFamily="Montserrat"
          fontWeight="bold"
          as={Button}
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
