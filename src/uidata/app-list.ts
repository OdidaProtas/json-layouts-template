export default {
  layout: "page",
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
            type: "text",
            data: {
              text: "Available apps",
              variant: "h6",
            },
          },
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
    {
      type: "grid",
      data: {
        spacing: 3,
        components: [
          {
            type: "paper",
            data: {
              xs: 3,
              elevation: 1,
              components: [
                {
                  type: "avatar",
                  data: {
                    clickAction: "update_state_value-appId-123456",
                  },
                },
                {
                  type: "text",
                  data: {
                    text: "Dreamercodes",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  opts: {},
};
