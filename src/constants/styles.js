export const styles = {
  colors: {
    primaryText: "#253D4E",
    secondaryText: "#7E7E7E",
    borderColor: "#ececec",
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: "#02B290",
    padding: "0.5rem 1rem",
    fontSize: "1.2rem",
    borderRadius: "2px",
    textAlign: "center",
    color: "#ffffff",
    cursor: "pointer",
    transition: "0.4s",
    "&:hover":{ transform: "translateY(2px)" }
  },
  buttonSecondary: {
    border: "1px solid #ececec",
    padding: "0.5rem 1rem",
    fontSize: "1.2rem",
    borderRadius: "2px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.4s",
    "&:hover":{ transform: "translateY(2px)" }
  },
};
