import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) =>
        artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork,
      ),
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) =>
        artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork,
      ),
    );
  }

  function handleReset() {
    setMyList(initialList);
    setYourList(initialList);
  }

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "20px",
      minHeight: "100vh",
      maxWidth: "1000px",
      margin: "20px auto",
    },
    title: {
      color: "#3b82f6",
      fontSize: "24px",
      textAlign: "center",
      margin: "0 0 30px 0",
      paddingBottom: "10px",
      borderBottom: "2px solid #333",
    },
    listsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "30px",
    },
    listCard: {
      flex: "1",
      minWidth: "300px",
      backgroundColor: "#1e1e1e",
      borderRadius: "10px",
      padding: "20px",
      border: "1px solid #333",
    },
    cardTitle: {
      color: "#ffffff",
      fontSize: "18px",
      margin: "0 0 15px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    blueDot: {
      width: "12px",
      height: "12px",
      backgroundColor: "#3b82f6",
      borderRadius: "50%",
    },
    greenDot: {
      width: "12px",
      height: "12px",
      backgroundColor: "#10b981",
      borderRadius: "50%",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      backgroundColor: "#2d2d2d",
      padding: "12px 15px",
      marginBottom: "10px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      transition: "background-color 0.2s",
    },
    checkbox: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
    },
    label: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    },
    artworkTitle: {
      color: "#ffffff",
      fontSize: "16px",
    },
    seenBadge: {
      fontSize: "12px",
      padding: "4px 8px",
      borderRadius: "4px",
      fontWeight: "500",
    },
    seenTrue: {
      backgroundColor: "#10b98120",
      color: "#10b981",
    },
    seenFalse: {
      backgroundColor: "#ef444420",
      color: "#ef4444",
    },
    controls: {
      textAlign: "center",
      margin: "30px 0",
    },
    resetButton: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      transition: "background-color 0.2s",
    },
    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      margin: "20px 0",
      flexWrap: "wrap",
    },
    statItem: {
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#1e1e1e",
      borderRadius: "8px",
      minWidth: "120px",
    },
    statLabel: {
      color: "#9ca3af",
      fontSize: "14px",
      marginBottom: "5px",
    },
    statValue: {
      color: "#ffffff",
      fontSize: "20px",
      fontWeight: "bold",
    },
    explanation: {
      backgroundColor: "#1e1e1e",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "30px",
    },
    explanationTitle: {
      color: "#3b82f6",
      margin: "0 0 10px 0",
      fontSize: "18px",
    },
    explanationText: {
      color: "#9ca3af",
      margin: "5px 0",
      fontSize: "14px",
      lineHeight: "1.5",
    },
  };

  const mySeenCount = myList.filter((item) => item.seen).length;
  const yourSeenCount = yourList.filter((item) => item.seen).length;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Updating An Object Inside An Array</h1>
      <h3>Use of use-immer</h3>
      <div style={styles.listsContainer}>
        <div style={styles.listCard}>
          <h2 style={styles.cardTitle}>
            <span style={styles.blueDot}></span>
            My Art Bucket List
          </h2>
          <ul style={styles.list}>
            {myList.map((artwork) => (
              <li key={artwork.id} style={styles.listItem}>
                <input
                  type="checkbox"
                  checked={artwork.seen}
                  onChange={(e) =>
                    handleToggleMyList(artwork.id, e.target.checked)
                  }
                  style={styles.checkbox}
                />
                <label style={styles.label}>
                  <span style={styles.artworkTitle}>{artwork.title}</span>
                  <span
                    style={{
                      ...styles.seenBadge,
                      ...(artwork.seen ? styles.seenTrue : styles.seenFalse),
                    }}
                  >
                    {artwork.seen ? "Seen" : "Unseen"}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.listCard}>
          <h2 style={styles.cardTitle}>
            <span style={styles.greenDot}></span>
            Your Art Bucket List
          </h2>
          <ul style={styles.list}>
            {yourList.map((artwork) => (
              <li key={artwork.id} style={styles.listItem}>
                <input
                  type="checkbox"
                  checked={artwork.seen}
                  onChange={(e) =>
                    handleToggleYourList(artwork.id, e.target.checked)
                  }
                  style={styles.checkbox}
                />
                <label style={styles.label}>
                  <span style={styles.artworkTitle}>{artwork.title}</span>
                  <span
                    style={{
                      ...styles.seenBadge,
                      ...(artwork.seen ? styles.seenTrue : styles.seenFalse),
                    }}
                  >
                    {artwork.seen ? "Seen" : "Unseen"}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <div style={styles.statLabel}>My Seen Items</div>
          <div style={styles.statValue}>
            {mySeenCount}/{myList.length}
          </div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statLabel}>Your Seen Items</div>
          <div style={styles.statValue}>
            {yourSeenCount}/{yourList.length}
          </div>
        </div>
      </div>

      <div style={styles.controls}>
        <button
          style={styles.resetButton}
          onClick={handleReset}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#4b5563")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#6b7280")
          }
        >
          Reset Both Lists
        </button>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.explanationTitle}>How This Works:</h3>
        <p style={styles.explanationText}>
          • This demonstrates updating objects inside arrays without mutation
        </p>
        <p style={styles.explanationText}>
          • When you check/uncheck items, we create new arrays with updated
          objects
        </p>
        <p style={styles.explanationText}>
          • Each list maintains independent state starting from the same initial
          data
        </p>
        <p style={styles.explanationText}>
          • The `map()` method is used to create new arrays with the updated
          "seen" property
        </p>
      </div>
    </div>
  );
}
