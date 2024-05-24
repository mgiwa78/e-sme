import React from "react";

export default function Loading() {
  const spinnerStyle = {
    display: "inline-block",
    width: "30px",
    height: "30px",
    border: "3px solid rgba(0, 0, 0, 0.1)",
    borderTop: "3px solid #000",
    borderRadius: "50%",

    animation: "spin 1s linear infinite",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 80,
    height: "100%",
  };

  const textStyle = {
    marginLeft: "10px",
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#4b5563",
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
}

// Adding keyframes for the spin animation
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
styleSheet?.insertRule(keyframes, styleSheet.cssRules.length);
