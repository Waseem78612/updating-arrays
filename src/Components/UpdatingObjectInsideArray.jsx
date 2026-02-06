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

  // Fixed: Using immutable update pattern
  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) =>
        artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork,
      ),
    );
  }

  // Fixed: Using immutable update pattern
  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) =>
        artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork,
      ),
    );
  }

  // Reset both lists to initial state
  function handleReset() {
    setMyList(initialList);
    setYourList(initialList);
  }

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "clamp(20px, 4vw, 35px)",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    header: {
      textAlign: "center",
      marginBottom: "clamp(30px, 5vw, 45px)",
    },
    mainHeading: {
      fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
      marginTop: 0,
      marginBottom: "15px",
      color: "#ffffff",
    },
    subHeading: {
      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
      color: "#9ca3af",
      fontWeight: "400",
    },
    listsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "clamp(25px, 4vw, 40px)",
      marginBottom: "clamp(30px, 5vw, 45px)",
    },
    listSection: {
      backgroundColor: "#1e1e1e",
      padding: "clamp(20px, 3vw, 30px)",
      borderRadius: "clamp(10px, 2vw, 15px)",
      border: "1px solid #333",
    },
    listTitle: {
      fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
      marginTop: 0,
      marginBottom: "clamp(20px, 3vw, 25px)",
      paddingBottom: "15px",
      borderBottom: "2px solid",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    myListTitle: {
      borderBottomColor: "#3b82f6",
    },
    yourListTitle: {
      borderBottomColor: "#10b981",
    },
    icon: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: "bold",
    },
    myIcon: {
      backgroundColor: "#3b82f6",
      color: "white",
    },
    yourIcon: {
      backgroundColor: "#10b981",
      color: "white",
    },
    controls: {
      display: "flex",
      justifyContent: "center",
      gap: "clamp(15px, 3vw, 25px)",
      flexWrap: "wrap",
      marginTop: "clamp(30px, 5vw, 45px)",
    },
    resetButton: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      padding: "clamp(12px, 2.5vw, 16px) clamp(25px, 4vw, 35px)",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
      cursor: "pointer",
      fontSize: "clamp(14px, 2vw, 16px)",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "clamp(25px, 4vw, 40px)",
      marginTop: "clamp(25px, 4vw, 35px)",
      flexWrap: "wrap",
    },
    statBox: {
      backgroundColor: "#1e1e1e",
      padding: "clamp(15px, 3vw, 20px)",
      borderRadius: "10px",
      minWidth: "150px",
      textAlign: "center",
      border: "1px solid #333",
    },
    statLabel: {
      fontSize: "14px",
      color: "#9ca3af",
      marginBottom: "8px",
    },
    statValue: {
      fontSize: "clamp(24px, 4vw, 32px)",
      fontWeight: "bold",
    },
    myStat: {
      color: "#3b82f6",
    },
    yourStat: {
      color: "#10b981",
    },
    instructions: {
      textAlign: "center",
      color: "#9ca3af",
      fontSize: "clamp(14px, 2vw, 16px)",
      marginTop: "clamp(20px, 4vw, 30px)",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "1.6",
    },
  };

  // Calculate statistics
  const mySeenCount = myList.filter((item) => item.seen).length;
  const yourSeenCount = yourList.filter((item) => item.seen).length;

  // Hover effects
  const resetButtonHover = {
    ...styles.resetButton,
    backgroundColor: "#4b5563",
    transform: "translateY(-2px)",
  };

  return (
    <div style={styles.container}>
      <h3>Updating An Object Inside An Array</h3>
      <div style={styles.header}>
        <h1 style={styles.mainHeading}>Art Bucket List</h1>
        <p style={styles.subHeading}>
          Independent state management for multiple lists
        </p>
      </div>

      <div style={styles.listsContainer}>
        <div style={styles.listSection}>
          <h2 style={{ ...styles.listTitle, ...styles.myListTitle }}>
            <span style={{ ...styles.icon, ...styles.myIcon }}>M</span>
            My list of art to see
          </h2>
          <ItemList
            artworks={myList}
            onToggle={handleToggleMyList}
            listColor="#3b82f6"
          />
        </div>

        <div style={styles.listSection}>
          <h2 style={{ ...styles.listTitle, ...styles.yourListTitle }}>
            <span style={{ ...styles.icon, ...styles.yourIcon }}>Y</span>
            Your list of art to see
          </h2>
          <ItemList
            artworks={yourList}
            onToggle={handleToggleYourList}
            listColor="#10b981"
          />
        </div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statBox}>
          <div style={styles.statLabel}>My List - Seen</div>
          <div style={{ ...styles.statValue, ...styles.myStat }}>
            {mySeenCount}/{myList.length}
          </div>
        </div>

        <div style={styles.statBox}>
          <div style={styles.statLabel}>Your List - Seen</div>
          <div style={{ ...styles.statValue, ...styles.yourStat }}>
            {yourSeenCount}/{yourList.length}
          </div>
        </div>

        <div style={styles.statBox}>
          <div style={styles.statLabel}>Both Lists Match</div>
          <div style={styles.statValue}>
            {
              myList.filter((item, index) => item.seen === yourList[index].seen)
                .length
            }
            /{myList.length}
          </div>
        </div>
      </div>

      <div style={styles.controls}>
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
          Reset Both Lists
        </button>
      </div>

      <div style={styles.instructions}>
        <p>✓ Checkboxes are independent between lists</p>
        <p>✓ Each list maintains its own state</p>
        <p>✓ Built with proper immutable updates</p>
      </div>
    </div>
  );
}

function ItemList({ artworks, onToggle, listColor }) {
  const styles = {
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "clamp(12px, 2vw, 16px)",
    },
    listItem: {
      backgroundColor: "#2d2d2d",
      padding: "clamp(15px, 2.5vw, 18px)",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      gap: "clamp(12px, 2vw, 16px)",
      transition: "all 0.3s ease",
    },
    checkbox: {
      width: "clamp(20px, 3vw, 24px)",
      height: "clamp(20px, 3vw, 24px)",
      cursor: "pointer",
      accentColor: listColor,
    },
    label: {
      fontSize: "clamp(16px, 2.5vw, 18px)",
      color: "#e0e0e0",
      cursor: "pointer",
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    seenIndicator: {
      fontSize: "12px",
      padding: "4px 10px",
      borderRadius: "12px",
      fontWeight: "500",
      backgroundColor: listColor + "20", // 20% opacity
      color: listColor,
    },
    idBadge: {
      fontSize: "12px",
      padding: "4px 8px",
      borderRadius: "6px",
      backgroundColor: "#333",
      color: "#9ca3af",
    },
  };

  const listItemHover = {
    ...styles.listItem,
    transform: "translateX(5px)",
    backgroundColor: "#363636",
  };

  return (
    <ul style={styles.list}>
      {artworks.map((artwork) => (
        <li
          key={artwork.id}
          style={styles.listItem}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = listItemHover.transform;
            e.currentTarget.style.backgroundColor =
              listItemHover.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.backgroundColor =
              styles.listItem.backgroundColor;
          }}
        >
          <input
            style={styles.checkbox}
            type="checkbox"
            checked={artwork.seen}
            onChange={(e) => {
              onToggle(artwork.id, e.target.checked);
            }}
          />
          <label style={styles.label}>
            {artwork.title}
            <span style={styles.idBadge}>ID: {artwork.id}</span>
            <span style={styles.seenIndicator}>
              {artwork.seen ? "Seen ✓" : "Not Seen"}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
