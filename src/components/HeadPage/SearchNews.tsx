import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchNews = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearching = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <Box my={2} p={2} mx={3}>
      <form onSubmit={(e) => handleSearching(e)}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search news ..."
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchNews;
