import React, { useState, useEffect } from "react";


//styled components
import { SearchForm } from "../styledcomponents/SearchBarStyling";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  const url = `https://official-joke-api.appspot.com/random_joke`

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result)
        })
    }
    fetchData()
  }, [url])

  const handleSubmit = e => {
    e.preventDefault();
    alert(value);
  };

  console.log(data)

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