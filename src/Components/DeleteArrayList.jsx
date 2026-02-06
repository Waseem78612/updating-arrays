import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function DeleteArrayList() {
  const [artists, setArtists] = useState(initialArtists);

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "clamp(20px, 4vw, 30px)",
      minHeight: "min(400px, 80vh)", // Responsive min-height
      marginTop: "clamp(15px, 3vw, 25px)",
      marginBottom: "clamp(15px, 3vw, 25px)",
      boxSizing: "border-box",
      borderRadius: "clamp(10px, 2vw, 15px)",
      border: "1px solid #333",
      width: "min(95%, 800px)", // Responsive width
      marginLeft: "auto",
      marginRight: "auto",
    },
    heading: {
      color: "#ffffff",
      marginBottom: "clamp(20px, 4vw, 30px)",
      fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
      textAlign: "center",
      fontWeight: "600",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      backgroundColor: "#1e1e1e",
      color: "#e0e0e0",
      padding: "clamp(12px, 2.5vw, 16px)",
      marginBottom: "clamp(10px, 2vw, 15px)",
      borderRadius: "clamp(8px, 1.5vw, 10px)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "clamp(15px, 2.5vw, 18px)",
      transition: "all 0.3s ease",
      gap: "clamp(10px, 2vw, 20px)",
    },
    button: {
      backgroundColor: "#dc2626",
      color: "white",
      border: "none",
      padding: "clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)",
      borderRadius: "clamp(6px, 1.5vw, 8px)",
      cursor: "pointer",
      fontSize: "clamp(14px, 2vw, 16px)",
      fontWeight: "500",
      flexShrink: 0,
      minWidth: "fit-content",
    },
    artistName: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      flex: "1",
    },
  };

  // Add hover effect for list items
  const listItemHover = {
    ...styles.listItem,
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(220, 38, 38, 0.2)",
  };

  // Add hover effect for button
  const buttonHover = {
    ...styles.button,
    backgroundColor: "#b91c1c",
    transform: "scale(1.05)",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Removing items from an array:</h1>
      <ul style={styles.list}>
        {artists.map((artist) => (
          <li
            key={artist.id}
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
            <span style={styles.artistName}>{artist.name}</span>
            <button
              style={styles.button}
              onClick={() => {
                setArtists(artists.filter((item) => item.id !== artist.id));
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  buttonHover.backgroundColor;
                e.currentTarget.style.transform = buttonHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor;
                e.currentTarget.style.transform = "none";
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
