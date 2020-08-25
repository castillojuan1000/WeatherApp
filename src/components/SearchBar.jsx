import React, { useState, useEffect } from "react";


//styled components
import { SearchForm } from "../styledcomponents/SearchBarStyling";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const url = `http://api.weatherstack.com/current?access_key=3ba5e386afdcf2427ebc7c7b5c9c7b99&query=atlanta`

  //todo: define a functions so the it wont call the endpoint after every keystroke 
  // const url = `http://api.weatherstack.com/current?access_key=3ba5e386afdcf2427ebc7c7b5c9c7b99&query=${value}`

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result)
          setIsLoading(false)
        })
    }
    fetchData()
  }, [url])

  const handleSubmit = e => {
    e.preventDefault();
    alert(value);
  };

  console.log(data)

  if (isLoading) return <h1>Loading...</h1>

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