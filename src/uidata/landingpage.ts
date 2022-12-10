// export default {
//   path: "",
//   exact: true,
//   layout: "page",
//   name: "Build an app",
//   components: [
//     {
//       type: "appbar",
//     },
//     {
//       type: "text",
//       data: {
//         text: "Create an new app below.",
//       },
//     },
//     {
//       type: "button",
//       data: {
//         text: "Create a new app.",
//         variant: "contained",
//         fullWidth: true,
//         sx: { my: 5 },
//         clickAction:"navigate_next_page.builder"
//       },
//     },
//   ],
//   opts: {},
// };

export default {
  path: "",
  layout: "page",
  name: "Build an app",
  exact: true,
  components: [
    {
      type: "text",
      data: {
        text: "Create an new app.",
        variant: "h4",
      },
    },
    {
      type: "form",
      data: {
        initialState: {},
        components: [
          {
            type: "textfield",
            data: {
              label: "App ID",
              helperText: "",
            },
          },
          {
            type: "textfield",
            data: {
              label: "App nsme",
              helperText: "",
            },
          },
          {
            type: "imagefield",
            data: {
              desc: "Upload app logo image",
              helperText: "",
            },
          },
          {
            type: "select",
            data: {
              label: "Application type",
              options: [{ value: "Other", label: "Other" }],
            },
          },
          {
            type: "switch",
            data: {
              label: "Accept terms and conditions",
            },
          },
          {
            type: "button",
            data: {
              text: "Add pages to your application",
              variant: "contained",
              fullWidth: true,
              sx: { my: 5 },
              clickAction: "navigate_next_page.component_form",
            },
          },
        ],
      },
    },
  ],
  opts: {},
};
