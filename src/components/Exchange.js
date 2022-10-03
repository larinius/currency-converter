import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Select from "@mui/material/Select";

const Exchange = ({ usd, eur, uah }) => {
  const [currencyA, setCurrencyA] = useState("EUR");
  const [currencyB, setCurrencyB] = useState("UAH");
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [activeA, setActiveA] = useState(false);
  const [activeB, setActiveB] = useState(false);

  const currencies = [
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
    {
      value: "UAH",
      label: "UAH",
    },
  ];

  const handleChangeSelectA = (event) => {
    setActiveB(true);
    setCurrencyA(event.target.value);
  };

  const handleChangeSelectB = (event) => {
    setActiveA(true);
    setCurrencyB(event.target.value);
  };

  const handleChangeInputA = (event) => {
    setActiveA(true);
    setInputA(event.target.value.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
  };

  const handleChangeInputB = (event) => {
    setActiveB(true);
    setInputB(event.target.value.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
  };

  useEffect(() => {
    const rates = { USD: usd, EUR: eur, UAH: uah };

    if (activeA) {
      const newValueB =
        currencyA === currencyB
          ? inputA
          : parseFloat(inputA * rates[currencyA][currencyB]).toFixed(2);

      setInputB(newValueB);
      setActiveA(false);
    }

    if (activeB) {
      const newValueA =
        currencyB === currencyA
          ? inputB
          : parseFloat(inputB * rates[currencyB][currencyA]).toFixed(2);

      setInputA(newValueA);
      setActiveB(false);
    }
  }, [currencyA, currencyB, inputA, inputB]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={5} mb={10}>
        <Grid container spacing={1} justifyContent="center">
          <Grid xs={12} sm={12} md={4} lg={4}>
            <Box
              flexGrow={1}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "15ch" },
                justifyContent: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ m: 1, width: "20ch" }}
                id="input-currency-a"
                value={inputA}
                onChange={handleChangeInputA}
              />

              <Select
                sx={{ m: 1 }}
                size="big"
                id="select-currency-a"
                value={currencyA}
                onChange={handleChangeSelectA}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4}>
            <SwapHorizIcon sx={{ fontSize: 44, marginRight: 3 }} />
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4}>
            <Box
              flexGrow={1}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "15ch" },
                justifyContent: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ m: 1, width: "20ch" }}
                id="input-currency-b"
                value={inputB}
                onChange={handleChangeInputB}
              />

              <Select
                sx={{ m: 1 }}
                size="big"
                id="select-currency-b"
                value={currencyB}
                onChange={handleChangeSelectB}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Exchange;
