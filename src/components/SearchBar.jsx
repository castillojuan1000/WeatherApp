import React, { useState, useRef } from "react";
import _ from 'lodash';

//components 
import Loading from './Loading'
import useFetch from './useFetch'

//styled components
import { SearchForm } from "../styledcomponents/SearchBarStyling";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [searchString, setSearchString] = useState('')



  const url = query => `http://api.weatherstack.com/current?access_key=3ba5e386afdcf2427ebc7c7b5c9c7b99&query=${query}`
  //todo: define a functions so the it wont call the endpoint after every keystroke 
  // const url = `http://api.weatherstack.com/current?access_key=3ba5e386afdcf2427ebc7c7b5c9c7b99&query=${value}`

  const { data, isLoading, hasError, errorMessage, updateUrl } = useFetch(url)
  //todo: create an Error Conponent to handle the  error ? 
  const delayedQuery = useRef(_.debounce(q => url(q), 500)).current;

  const handleChange = e => {
    e.persist();
    setValue(e.target.value)
    delayedQuery(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(value);
  };


  console.log(url())

  if (isLoading) return <Loading />

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