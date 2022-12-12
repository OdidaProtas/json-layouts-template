export default {
  layout: "page",
  name: "App not created",
  components: [
    {
      type: "box",
      data: {
        flex: true,
        centerHorizontal: true,
        centerVertical: true,
        minHeight: "100vh",
        components: [
          {
            type: "box",
            data: {
              textAlign: "center",
              components: [
                {
                  type: "text",
                  data: {
                    text: "Hello World",
                    variant: "h1",
                  },
                },
                {
                  type: "text",
                  data: {
                    text: "Sorry, but no pages have been added yet!",
                  },
                },
                {
                  type: "button",
                  data: {
                    text: "Add pages to this app",
                    href: "https://json-layouts-api-template.vercel.app/api/auth/signin",
                    target: "blank",
                    sx: "mt:4",
                  },
                }
              ],
            },
          },
        ],
      },
    },
  ],
  opts: {},
};
