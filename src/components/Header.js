import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

const Header = ({ usd, eur }) => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={3} mb={3}>
      <Grid container spacing={1} justifyContent="center">
        <Grid xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2" gutterBottom>
            USD: {parseFloat(usd).toFixed(2)}
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2" gutterBottom>
            EUR: {parseFloat(eur).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
