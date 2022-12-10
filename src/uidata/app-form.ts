export default {
  path: "/builder",
  layout: "grid",
  name: "Build an app",
  exact: true,
  components: [
    {
      type: "text",
      data: {
        text: "Sorry, but we could not load any pages for this application/page",
      },
    },
    {
      type: "form",
      data: {
        text: "Sorry, but we could not load any pages for this application/page",
      },
      components: [
        {
          type: "textfield",
          data: {
            label: "App ID",
            helperText: "",
          },
        },
      ],
    },
  ],
  opts: {},
};
