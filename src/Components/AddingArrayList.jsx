import { useState } from "react";

let nextId = 0;

export default function AddingArrayList() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Items to an array:</h1>
      <div style={styles.inputGroup}>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter artist name"
        />
        <button
          style={styles.button}
          onClick={() => {
            if (name.trim() === "") return;
            setArtists([
              {
                id: nextId++,
                name: name,
              },
              ...artists,
            ]);
            setName("");
          }}
        >
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {artists.map((artist) => (
          <li key={artist.id} style={styles.listItem}>
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#121212",
    color: "#ffffff",
    padding: "clamp(15px, 5vw, 30px)",
    minHeight: "30vh",
    boxSizing: "border-box",
  },
  heading: {
    color: "#ffffff",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    marginBottom: "clamp(20px, 4vw, 30px)",
    textAlign: "center",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "clamp(8px, 2vw, 15px)",
    marginBottom: "clamp(20px, 4vw, 30px)",
    maxWidth: "600px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    border: "1px solid #333",
    padding: "clamp(10px, 2vw, 14px)",
    borderRadius: "8px",
    fontSize: "clamp(14px, 2vw, 16px)",
    outline: "none",
    flex: "1 1 200px",
    minWidth: "150px",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    padding: "clamp(10px, 2vw, 14px) clamp(15px, 3vw, 24px)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: "600",
    flex: "0 0 auto",
    whiteSpace: "nowrap",
  },
  list: {
    marginTop: "clamp(20px, 4vw, 30px)",
    padding: "0",
    listStyle: "none",
    maxWidth: "600px",
    margin: "0 auto",
  },
  listItem: {
    color: "#e0e0e0",
    marginBottom: "clamp(10px, 2vw, 15px)",
    backgroundColor: "#1e1e1e",
    padding: "clamp(12px, 2vw, 16px)",
    borderRadius: "8px",
    fontSize: "clamp(14px, 2vw, 16px)",
    borderLeft: "4px solid #1976d2",
  },
};

// Add media queries for different screen sizes
const mediaQueries = `
  @media (max-width: 480px) {
    .input-group {
      flex-direction: column;
    }
    input, button {
      width: 100%;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
      margin: 0 auto;
    }
  }
`;

// You can add these styles to your global CSS or use a CSS-in-JS solution
// For now, I'll add them as a style tag in the component
const StyleTag = () => <style>{mediaQueries}</style>;

// Note: To use media queries properly, you might want to use:
// 1. CSS modules
// 2. Styled-components
// 3. Inline styles with window.matchMedia()
// 4. Or add the media queries to your global CSS
