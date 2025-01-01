export const command = `
  export PATH="/opt/homebrew/bin:$PATH" && fastfetch --logo DarkOS --pipe off | aha
`;

export const refreshFrequency = 10000; // Refresh every 10 seconds

export const className = `
  position: absolute;
  top: 50px;
  left: 10px;
  z-index: 10;
  display: flex;
  align-items: flex-start; /* Aligns items to the top */
  gap: 20px; /* Adds spacing between the ASCII art and text */
`;

export const render = ({ output }) => {
  if (!output) return <div>Loading...</div>;

  // Split the output into the logo and the text sections
  const splitOutput = output.split("──────────"); // Adjust delimiter if necessary
  const logoPart = splitOutput[0] || ""; // ASCII logo
  const textPart = splitOutput[1] || ""; // System info text

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        fontFamily: "monospace",
        fontSize: "13px",
        whiteSpace: "pre-wrap",
        backgroundColor: "rgba(0, 0, 0, 0)", // Fully transparent background
        color: "#FFFFFF",
        padding: "5px",
      }}
    >
      {/* ASCII Logo */}
      <div
        style={{
          fontWeight: "bold", // Keep the font non-bold
          color: "#FFFFFF", // Keep the logo's color intact
        }}
        dangerouslySetInnerHTML={{ __html: logoPart }}
      />
      {/* System Info Text */}
      <div
        style={{
          fontWeight: "", // Explicitly make the text non-bold
          color: "#FFFFFF",
        }}
        dangerouslySetInnerHTML={{ __html: textPart }}
      />
    </div>
  );
};
