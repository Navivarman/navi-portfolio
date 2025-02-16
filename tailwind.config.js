module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
    theme: {
      extend: {
        animation: {
          typing: "typing 2s steps(20, end) forwards", // Ensure animation completes
          blink: "blink 0.8s step-end infinite",
        },
        keyframes: {
          typing: {
            "0%": { width: "0ch" },
            "100%": { width: "15ch" }, // Adjust width dynamically
          },
          blink: {
            "50%": { borderColor: "transparent" },
            "100%": { borderColor: "#64FFDA" },
          },
        },
      },
    },
    plugins: [],
  };
  