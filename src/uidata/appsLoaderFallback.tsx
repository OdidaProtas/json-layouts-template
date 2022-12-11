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
                { type: "circular_progress" },
                {
                  type: "text",
                  data: {
                    text: "Loading apps...",
                    variant: "h5",
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
