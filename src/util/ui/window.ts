export const Window = {
    exists() {
      return typeof window !== "undefined" && typeof window === "object";
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    smoothScrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  };
  