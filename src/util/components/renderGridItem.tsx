import { Grid } from "@mui/material";
import renderComponents from "./renderComponents";

export default function renderGridItem(
  components: any,
  xs: boolean | number = true
) {
  return (
    <Grid item xs={xs}>
      {renderComponents(components)}
    </Grid>
  );
}
