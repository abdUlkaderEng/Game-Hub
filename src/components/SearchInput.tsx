import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../Store";
import { useNavigate } from "react-router-dom";



const SearchInput = () => {
  const setsearchText = useGameQueryStore(s => s.setSearchText)
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setsearchText(ref.current.value);
          navigate('/')
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
