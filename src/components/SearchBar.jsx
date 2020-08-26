import React, { useState, useEffect } from "react";

//components 
import Loading from './Loading'
import useFetch from './useFetch'

//styled components
import { SearchForm } from "../styledcomponents/SearchBarStyling";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const url = `http://api.weatherstack.com/current?access_key=3ba5e386afdcf2427ebc7c7b5c9c7b99&query=atlanta`
  //todo: define a functions so the it wont call the endpoint after every keystroke 
  // const url = `http://api.weatherstack.com/current?access_key=3ba5e386afdcf2427ebc7c7b5c9c7b99&query=${value}`

  const { data, isLoading, hasError, errorMessage } = useFetch(url)


  const handleSubmit = e => {
    e.preventDefault();
    alert(value);
  };

  console.log(data)


  if (isLoading) return <Loading />

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City or Zip Code"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
}