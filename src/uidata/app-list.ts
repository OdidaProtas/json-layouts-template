export default {
  layout: "page",
  path: "/",
  name: "App List",
  components: [
    {
      type: "appbar",
      data: {
        variant: "h5",
        text: "Dreamercodes Apps",
      },
    },
    {
      type: "box",
      data: {
        flex: true,
        spaceEvenly: "true",
        components: [
          {
            type: "button",
            data: {
              text: "Create an app",
              href: "https://json-layouts-api-template.vercel.app/",
              target: "blank",
              variant: "outlined",
            },
          },
        ],
      },
    },
    {
      type: "divider",
    },
  ],
  opts: {},
};
