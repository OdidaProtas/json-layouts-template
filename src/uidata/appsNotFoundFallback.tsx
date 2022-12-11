export default {
  layout: "page",
  name: "Loading apps",
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
                    text: "Apps loading failed.",
                    variant: "h5",
                  },
                },
                {
                  type: "text",
                  data: {
                    text: "Sorry, but no apps have been added yet!",
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
