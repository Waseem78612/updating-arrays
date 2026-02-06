import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function ReverseArray() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "clamp(20px, 4vw, 35px)",
      marginTop: "clamp(15px, 3vw, 25px)",
      marginBottom: "clamp(15px, 3vw, 25px)",
      borderRadius: "clamp(10px, 2vw, 15px)",
      border: "1px solid #333",
      boxSizing: "border-box",
      width: "min(95%, 700px)",
      marginLeft: "auto",
      marginRight: "auto",
    },
    heading: {
      color: "#ffffff",
      marginTop: 0,
      marginBottom: "clamp(20px, 4vw, 30px)",
      fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
      fontWeight: "600",
      textAlign: "center",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "clamp(25px, 5vw, 35px)",
      gap: "clamp(15px, 3vw, 25px)",
      flexWrap: "wrap",
    },
    button: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      padding: "clamp(12px, 2.5vw, 16px) clamp(25px, 4vw, 40px)",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
      cursor: "pointer",
      fontSize: "clamp(16px, 2.5vw, 20px)",
      fontWeight: "600",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(139, 92, 246, 0.3)",
      minWidth: "150px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "clamp(12px, 2.5vw, 18px)",
    },
    listItem: {
      backgroundColor: "#1e1e1e",
      color: "#e0e0e0",
      padding: "clamp(15px, 3vw, 20px)",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
      fontSize: "clamp(16px, 2.5vw, 20px)",
      transition: "all 0.5s ease",
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    itemNumber: {
      backgroundColor: "#8b5cf6",
      color: "white",
      width: "clamp(30px, 4vw, 40px)",
      height: "clamp(30px, 4vw, 40px)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "clamp(14px, 2vw, 16px)",
      fontWeight: "600",
      flexShrink: 0,
    },
    arrow: {
      textAlign: "center",
      margin: "clamp(15px, 3vw, 25px)",
      fontSize: "clamp(24px, 4vw, 32px)",
      color: "#8b5cf6",
      fontWeight: "bold",
    },
    instructions: {
      textAlign: "center",
      color: "#9ca3af",
      fontSize: "clamp(14px, 2vw, 16px)",
      marginBottom: "clamp(20px, 4vw, 30px)",
    },
    resetButton: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 3vw, 30px)",
      borderRadius: "clamp(6px, 1.5vw, 10px)",
      cursor: "pointer",
      fontSize: "clamp(14px, 2vw, 16px)",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
  };

  // Hover effects
  const buttonHover = {
    ...styles.button,
    backgroundColor: "#7c3aed",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 12px rgba(139, 92, 246, 0.4)",
  };

  const resetButtonHover = {
    ...styles.resetButton,
    backgroundColor: "#4b5563",
    transform: "scale(1.05)",
  };

  const handleReset = () => {
    setList(initialList);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Reverse An Array</h3>

      <div style={styles.instructions}>
        <p>Click the button to reverse the order of items in the array</p>
      </div>

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={handleClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHover.backgroundColor;
            e.currentTarget.style.transform = buttonHover.transform;
            e.currentTarget.style.boxShadow = buttonHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = styles.button.boxShadow;
          }}
        >
          Reverse Order
        </button>

        <button
          style={styles.resetButton}
          onClick={handleReset}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              resetButtonHover.backgroundColor;
            e.currentTarget.style.transform = resetButtonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.resetButton.backgroundColor;
            e.currentTarget.style.transform = "none";
          }}
        >
          Reset to Original
        </button>
      </div>

      <div style={styles.arrow}>
        {list[0]?.id !== initialList[0]?.id ? "⇅" : "↓"}
      </div>

      <ul style={styles.list}>
        {list.map((artwork, index) => (
          <li key={artwork.id} style={styles.listItem}>
            <div style={styles.itemNumber}>{index + 1}</div>
            <div style={{ flex: 1 }}>
              {artwork.title}
              <div
                style={{ fontSize: "14px", color: "#9ca3af", marginTop: "5px" }}
              >
                Original ID: {artwork.id}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div
        style={{
          textAlign: "center",
          marginTop: "clamp(20px, 4vw, 30px)",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        <div style={{ marginBottom: "5px" }}>
          Current order: {list.map((item) => item.id).join(" → ")}
        </div>
        <div>
          Original order: {initialList.map((item) => item.id).join(" → ")}
        </div>
      </div>
    </div>
  );
}
