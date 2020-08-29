import React, { useState, useCallback } from "react";
import _ from 'lodash';

//components 
// import Loading from './Loading'
// import useFetch from './useFetch'

//styled components
import { SearchForm } from "../styledcomponents/SearchBarStyling";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [searchString, setSeachString] = useState("")









  const getString = (string) => setSeachString(string);

  const delayedString = useCallback(_.debounce(string => getString(string), 500), []);

  const handleChange = e => {
    e.persist();
    setValue(e.target.value)
    delayedString(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

  };


  console.log(searchString)
  // if (isLoading) return <Loading />

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City or Zip Code"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
}