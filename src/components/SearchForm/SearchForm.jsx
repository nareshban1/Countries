import {
  SearchButton,
  Searchform,
  SearchIcon,
  SearchInput,
} from "./SearchFormStyles";
import { useState, useEffect } from "react";
const SearchForm = ({ setUrl }) => {
  const [query, setQuery] = useState("");
  const setSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length) {
      setUrl(`https://restcountries.com/v2/name/${query}`);
    } else {
      setUrl("https://restcountries.com/v2/all");
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (query.length === 0) {
        setUrl("https://restcountries.com/v2/all");
      }
    }

    return () => {
      mounted = false;
    };
  }, [query]);
  return (
    <Searchform onSubmit={handleSubmit}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <SearchInput
        type="text"
        placeholder="Search for a Country..."
        value={query}
        onChange={setSearchQuery}
      ></SearchInput>
    </Searchform>
  );
};

export default SearchForm;
