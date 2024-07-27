import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./SearchBar.scss";

type SearchBarProps = {
  onSubmit: (value: string) => void
}
export default function SearchBar( {onSubmit} : SearchBarProps) {

  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(search);
    
  }
  return (
    <div className="searchBar">
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Recherche"
          variant="outlined"
          value={search}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
