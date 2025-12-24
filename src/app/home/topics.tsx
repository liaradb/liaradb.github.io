import { Grid } from "@mui/material";
import { Features } from "./features";
import { UseCases } from "./use_cases";
import { Docs } from "./docs";

export const Topics = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Features />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <UseCases />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Docs />
      </Grid>
    </Grid>
  );
};
