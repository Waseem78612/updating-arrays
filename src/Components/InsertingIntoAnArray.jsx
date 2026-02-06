import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function InsertingIntoAnArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "clamp(20px, 4vw, 35px)",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    heading: {
      color: "#ffffff",
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      marginTop: 0,
      marginBottom: "clamp(25px, 5vw, 35px)",
      textAlign: "center",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "row",
      gap: "clamp(12px, 3vw, 20px)",
      marginBottom: "clamp(25px, 5vw, 35px)",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    input: {
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
      border: "1px solid #333",
      padding: "clamp(12px, 2vw, 16px)",
      borderRadius: "8px",
      fontSize: "clamp(14px, 2vw, 16px)",
      flex: "1 1 250px",
      minWidth: "200px",
      outline: "none",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      padding: "clamp(12px, 2vw, 16px) clamp(20px, 3vw, 30px)",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "clamp(14px, 2vw, 16px)",
      fontWeight: "500",
      flexShrink: 0,
      transition: "all 0.3s ease",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    listItem: {
      backgroundColor: "#1e1e1e",
      color: "#e0e0e0",
      padding: "clamp(15px, 3vw, 20px)",
      marginBottom: "clamp(12px, 2.5vw, 18px)",
      borderRadius: "8px",
      fontSize: "clamp(15px, 2.5vw, 18px)",

      transition: "all 0.3s ease",
    },
    instructions: {
      textAlign: "center",
      color: "#9ca3af",
      fontSize: "clamp(14px, 2vw, 16px)",
      marginBottom: "clamp(20px, 4vw, 30px)",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    insertionIndicator: {
      backgroundColor: "#1e1e1e",
      padding: "10px",
      borderRadius: "8px",
      textAlign: "center",
      marginBottom: "20px",
      border: "2px solid #3b82f6",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  // Get border color based on position
  const getBorderColor = (index) => {
    if (index === 1) return "#10b981"; // Green for insertion point
    return "#3b82f6"; // Blue for others
  };

  // Hover effects
  const buttonHover = {
    ...styles.button,
    backgroundColor: "#2563eb",
    transform: "translateY(-2px)",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Inserting Item Into An Array</h1>

      <div style={styles.instructions}>
        <p>
          Type a name below and click "Insert" to add it at position 1 (after
          the first item)
        </p>
      </div>

      <div style={styles.insertionIndicator}>
        <div
          style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "5px" }}
        >
          Insertion Position
        </div>
        <div style={{ color: "#10b981", fontWeight: "600" }}>
          New items will be inserted at index 1 (between first and second item)
        </div>
      </div>

      <div style={styles.inputGroup}>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter artist name"
        />
        <button
          style={styles.button}
          onClick={handleClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHover.backgroundColor;
            e.currentTarget.style.transform = buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor;
            e.currentTarget.style.transform = "none";
          }}
        >
          Insert
        </button>
      </div>

      <ul style={styles.list}>
        {artists.map((artist, index) => (
          <li
            key={artist.id}
            style={{
              ...styles.listItem,
              borderLeftColor: getBorderColor(index),
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>
                  Index {index}:{" "}
                </span>
                {artist.name}
              </div>
              {index === 1 && (
                <div
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    color: "#10b981",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Insertion Point
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
