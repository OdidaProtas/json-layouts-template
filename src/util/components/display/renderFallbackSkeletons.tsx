import { Skeleton } from "@mui/material";

export default function renderFallbackSkeletons(components: any[]) {
  return components.map((component: any, index: number) => {
    switch (component.type) {
      default: {
        return <Skeleton key={index} variant="rectangular" />;
      }
    }
  });
}
