// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
        test: "red",
        test2: "yellow",
      },
      fontFamily: {
        // Thêm hoặc ghi đè các font chữ tùy chỉnh ở đây
        body: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
};
