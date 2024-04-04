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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { md: "center" },
        gap: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: { md: "center" }, alignItems: "center" }}>
        <TextField
          label="Liczba elementów na stronie"
          type="number"
          sx={{ minWidth: { xs: 140, md: 200 }, mr: 2 }}
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
        <FormControl sx={{ minWidth: { xs: 120, md: 160 }, mr: 2 }}>
          <Select value={sort} onChange={(event: SelectChangeEvent) => setSort(event.target.value)}>
            <MenuItem value={SortValues.popular}>Popularność</MenuItem>
            <MenuItem value={SortValues.activity}>Aktywność</MenuItem>
            <MenuItem value={SortValues.name}>Alfabetycznie</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: { xs: 120, md: 160 } }}>
          <Select value={order} onChange={(event: SelectChangeEvent) => setOrder(event.target.value)}>
            <MenuItem value={OrderValues.desc}>Malejąco</MenuItem>
            <MenuItem value={OrderValues.asc}>Rosnąco</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
