import { Grid } from "@mui/material";
import renderComponents from "./renderComponents";

const initGridItem = {
  data: {
    components: [],
  },
};

export default function renderGridItem(
  gridItem: any = initGridItem,
  xs: boolean | number = true
) {
  return (
    <Grid item xs={xs}>
      {renderComponents(gridItem.data.components)}
    </Grid>
  );
}
