import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ErrorMessages } from "../../constants";

interface HeaderProps {
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  setPageSize: Dispatch<SetStateAction<number>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
}

export default function Header({ size, setSize, setPageSize, sort, setSort, order, setOrder }: HeaderProps) {
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedNumber = parseInt(inputValue);
    if (!isNaN(parsedNumber)) {
      setSize(parsedNumber);
    }
  };

  const handleOnClick = () => {
    if (size > 100) {
      setInputError(true);
    } else if (size < 1) {
      setInputError(true);
    } else {
      setPageSize(size);
      setInputError(false);
    }
  };

  const handleChangeBySort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const handleChangeByOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TextField
          label="Liczba elementów na stronie"
          type="number"
          sx={{ minWidth: 200, mr: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: 1, max: 100 }}
          value={size}
          onChange={handleInputChange}
          error={inputError}
          helperText={inputError && ErrorMessages.pageSizeInput}
        />
        <Button variant="contained" size="large" onClick={handleOnClick}>
          Zmień
        </Button>
      </Box>
      <Box>
        <FormControl sx={{ minWidth: 120, mr: 2 }}>
          <Select value={sort} onChange={handleChangeBySort}>
            <MenuItem value="popular">Popularność</MenuItem>
            <MenuItem value="activity">Aktywność</MenuItem>
            <MenuItem value="name">Alfabetycznie</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <Select value={order} onChange={handleChangeByOrder}>
            <MenuItem value="desc">Malejąco</MenuItem>
            <MenuItem value="asc">Rosnąco</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
