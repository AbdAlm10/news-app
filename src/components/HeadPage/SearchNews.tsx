import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useNewsQueryStore from "../../store";
import { useNavigate } from "react-router-dom";

const SearchNews = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useNewsQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const handleSearching = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/");
    }
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
