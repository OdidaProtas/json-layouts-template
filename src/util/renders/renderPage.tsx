import DefaultLayout from "../../layouts/DefaultLayout";
import renderComponents from "./renderComponents";

export default function renderPage(
  page = { type: "", name: "Page", components: [] }
) {
  const { type, components } = page;

  switch (type) {
    default: {
      return <DefaultLayout>{renderComponents(components)}</DefaultLayout>;
    }
  }
}
