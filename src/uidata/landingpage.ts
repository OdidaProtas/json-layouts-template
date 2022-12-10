export default {
  path: "",
  exact: true,
  layout: "page",
  name: "Build an app",
  components: [
    {
      type: "appbar",
    },
    {
      type: "text",
      data: {
        text: "Create an new app below.",
      },
    },
    {
      type: "button",
      data: {
        text: "Create a new app.",
        variant: "contained",
        fullWidth: true,
        sx: { my: 5 },
        clickAction:"navigate_next_page.builder"
      },
    },
  ],
  opts: {},
};
