"use client"
import React from 'react'
import { useState } from 'react'

const SearchBar = ({transactions, onSearch}: searchBarProps) => {
  const [searchText, setSearchText] = useState<string>("")
  const [searchTimeout, setSearchTimeout] = useState<number | undefined>(undefined)

  const filterTransactions = (searchText:string): Transaction[] => {
    const regex = new RegExp(searchText, "i"); // Case-insensitive search
    const filtered = transactions.filter((item) =>
      regex.test(item.name) || regex.test(item.date) || regex.test(item.category)
    );
    console.log('Filtered Results:', filtered); // Debugging line
    return filtered;
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(searchTimeout){
    clearTimeout(searchTimeout)
    }
    setSearchText(e.target.value)
    const timeoutId = window.setTimeout(() => {
      const searchResults = filterTransactions(e.target.value);
      onSearch(searchResults);
    }, 500); // Delay to reduce unnecessary filtering

    setSearchTimeout(timeoutId);
  };
  return (
    <div className="search-bar">
      <form className="search-form">
            <input type='text'
            placeholder='Search for transactions ...'
            required
            onChange={handleSearchChange}
            className="search-input"
            />
      </form>
      </div>
  )
}

export default SearchBar