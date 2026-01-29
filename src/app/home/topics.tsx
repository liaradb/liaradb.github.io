import { Grid } from "@mui/material";
import { Features } from "./features";
import { UseCases } from "./use_cases";
import { Explorer } from "./explorer";

export const Topics = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }} container>
        <Features />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} container>
        <UseCases />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} container>
        <Explorer />
      </Grid>
    </Grid>
  );
};
