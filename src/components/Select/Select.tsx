import { FormControl, Select as MUISelect, MenuItem, SelectChangeEvent } from "@mui/material";

export interface SelectProps {
  value: string;
  setValue: (arg: string) => void;
  data: SelectItem[];
  margin?: boolean;
}

export interface SelectItem {
  id: number;
  name: string;
  value: string;
}

export default function Select({ value, setValue, data, margin }: SelectProps) {
  return (
    <FormControl sx={{ minWidth: { xs: 120, md: 160 }, ...(margin && { ml: 2 }) }}>
      <MUISelect value={value} onChange={(event: SelectChangeEvent) => setValue(event.target.value)}>
        {data.map((item: SelectItem) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
