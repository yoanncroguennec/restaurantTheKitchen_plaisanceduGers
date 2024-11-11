"use client";

import { useState } from "react";
import { MenuItem, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export default function LocalSwitcher() {
  const [language, setLanguage] = useState("");
  const [i18n] = useTranslation("global");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <label className='border-2 rounded'>
      <InputLabel>Langue</InputLabel>
      <Select
        value={language}
        label='Langue'
        onChange={handleChange}
      >
        <MenuItem value='en'>Ten</MenuItem>
        <MenuItem value='es'>Twenty</MenuItem>
      </Select>
    </label>
  );
}
