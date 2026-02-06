import { useState } from "react";

let initialCounters = [0, 0, 0];

export default function ReplaceItemInArray() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "clamp(20px, 4vw, 35px)",
      marginTop: "clamp(15px, 3vw, 25px)",
      marginBottom: "clamp(15px, 3vw, 25px)",
      minHeight: "clamp(250px, 40vh, 350px)",
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
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "clamp(16px, 2.5vw, 20px)",
      transition: "all 0.3s ease",
      flexWrap: "wrap",
      gap: "clamp(15px, 3vw, 25px)",
    },
    counterInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "5px",
      flex: "1",
      minWidth: "200px",
    },
    counterLabel: {
      fontSize: "clamp(14px, 2vw, 16px)",
      color: "#9ca3af",
    },
    counterValue: {
      fontSize: "clamp(24px, 4vw, 32px)",
      fontWeight: "700",
      color: "#ffffff",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 3vw, 30px)",
      borderRadius: "clamp(6px, 1.5vw, 10px)",
      cursor: "pointer",
      fontSize: "clamp(16px, 2.5vw, 20px)",
      fontWeight: "600",
      transition: "all 0.3s ease",
      minWidth: "fit-content",
      boxShadow: "0 4px 6px rgba(59, 130, 246, 0.3)",
      flexShrink: 0,
    },
    resetButton: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2vw, 12px) clamp(20px, 3vw, 25px)",
      borderRadius: "clamp(6px, 1.5vw, 10px)",
      cursor: "pointer",
      fontSize: "clamp(14px, 2vw, 16px)",
      marginTop: "clamp(20px, 4vw, 30px)",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  // Hover effects
  const listItemHover = {
    ...styles.listItem,
    transform: "translateY(-3px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  const buttonHover = {
    ...styles.button,
    backgroundColor: "#2563eb",
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(59, 130, 246, 0.4)",
  };

  const resetButtonHover = {
    ...styles.resetButton,
    backgroundColor: "#4b5563",
    transform: "scale(1.05)",
  };

  const handleReset = () => {
    setCounters([0, 0, 0]);
  };

  const total = counters.reduce((sum, counter) => sum + counter, 0);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Replacing items in an array</h3>

      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <div style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9ca3af" }}>
          Total count:{" "}
          <span
            style={{
              fontSize: "clamp(20px, 3vw, 24px)",
              color: "#10b981",
              fontWeight: "600",
            }}
          >
            {total}
          </span>
        </div>
      </div>

      <ul style={styles.list}>
        {counters.map((counter, i) => (
          <li
            key={i}
            style={styles.listItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = listItemHover.transform;
              e.currentTarget.style.boxShadow = listItemHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={styles.counterInfo}>
              <div style={styles.counterLabel}>Counter {i + 1}</div>
              <div style={styles.counterValue}>{counter}</div>
            </div>
            <button
              style={styles.button}
              onClick={() => {
                handleIncrementClick(i);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  buttonHover.backgroundColor;
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
              +1 Increment
            </button>
          </li>
        ))}
      </ul>

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
        Reset All Counters
      </button>
    </div>
  );
}
