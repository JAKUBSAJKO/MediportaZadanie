import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { DefaultValues, ErrorMessages, OrderValues, SortValues } from "../../constants";
import { useGlobalStore } from "../../stores/globalStore";

export default function Header() {
  const { setPageSize, sort, setSort, order, setOrder } = useGlobalStore();

  const [size, setSize] = useState(DefaultValues.pageSize);
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
        <FormControl sx={{ minWidth: 160, mr: 2 }}>
          <Select value={sort} onChange={handleChangeBySort}>
            <MenuItem value={SortValues.popular}>Popularność</MenuItem>
            <MenuItem value={SortValues.activity}>Aktywność</MenuItem>
            <MenuItem value={SortValues.name}>Alfabetycznie</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 160 }}>
          <Select value={order} onChange={handleChangeByOrder}>
            <MenuItem value={OrderValues.desc}>Malejąco</MenuItem>
            <MenuItem value={OrderValues.asc}>Rosnąco</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
