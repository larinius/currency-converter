import React from "react";
import { useQuery } from "@tanstack/react-query";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import Exchange from "./Exchange";
import Header from "./Header";

const AppBody = () => {
  const apiQueryUSD =
    "https://v6.exchangerate-api.com/v6/9820e31cab170b12856bdbf7/latest/USD";
  const apiQueryEUR =
    "https://v6.exchangerate-api.com/v6/9820e31cab170b12856bdbf7/latest/EUR";
  const apiQueryUAH =
    "https://v6.exchangerate-api.com/v6/9820e31cab170b12856bdbf7/latest/UAH";

  const usd = useQuery(
    [apiQueryUSD],
    () => fetch(apiQueryUSD).then((res) => res.json()),
    { staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  );

  const eur = useQuery(
    [apiQueryEUR],
    () => fetch(apiQueryEUR).then((res) => res.json()),
    { staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  );

  const uah = useQuery(
    [apiQueryUAH],
    () => fetch(apiQueryUAH).then((res) => res.json()),
    { staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: 5,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box
        display="flex"
        sx={{ bgcolor: "success.light", width: "100%" }}
        justifyContent="center"
      >
        <Box minHeight="100vh" m={5} sx={{ width: "70%" }}>
          <Stack
            direction={"row"}
            mb={3}
            sx={{
              color: "white",
              fontSize: 44,
              fontWeight: "bold",
              alignContent: "center",
            }}
          >
            <CurrencyExchangeIcon sx={{ fontSize: 64, marginRight: 3 }} />{" "}
            <Box> Currency Converter </Box>
          </Stack>

          <Item>
            <Container>
              <Box
                m={1}
                p={1}
                sx={{
                  display: "flex",
                }}
              >
                <Header
                  usd={usd.data?.conversion_rates.UAH}
                  eur={eur.data?.conversion_rates.UAH}
                />
                <Box />
              </Box>
            </Container>
            <Container>
              <Box
                m={1}
                p={1}
                sx={{
                  display: "flex",
                }}
              >
                <Box />

                <Exchange
                  usd={usd.data?.conversion_rates}
                  eur={eur.data?.conversion_rates}
                  uah={uah.data?.conversion_rates}
                />
              </Box>
            </Container>
          </Item>
        </Box>
      </Box>
    </>
  );
};

export default AppBody;
