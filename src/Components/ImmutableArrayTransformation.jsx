import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 150 },
  { id: 1, type: "square", x: 150, y: 150 },
  { id: 2, type: "circle", x: 250, y: 150 },
];

export default function ImmutableArrayTransformation() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(nextShapes);
  }

  // Reset function
  function handleReset() {
    setShapes(initialShapes);
  }

  // Calculate responsive positions
  const getResponsivePositions = () => {
    // For mobile, space shapes differently
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      return shapes.map((shape, index) => ({
        ...shape,
        x: 50 + index * 100, // More spacing on mobile
      }));
    }

    return shapes;
  };

  const responsiveShapes = getResponsivePositions();

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      marginTop: "clamp(15px, 3vw, 25px)",
      marginBottom: "clamp(15px, 3vw, 25px)",
      padding: "clamp(15px, 4vw, 30px)",
      minHeight: "clamp(250px, 40vh, 350px)",
      position: "relative",
      textAlign: "center",
      borderRadius: "clamp(10px, 2vw, 15px)",
      border: "1px solid #333",
      overflow: "hidden",
      width: "min(95%, 900px)",
      marginLeft: "auto",
      marginRight: "auto",
    },
    heading: {
      marginTop: 0,
      marginBottom: "clamp(20px, 4vw, 30px)",
      fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)",
      fontWeight: "600",
    },
    buttonWrapper: {
      marginBottom: "clamp(20px, 5vw, 40px)",
      display: "flex",
      justifyContent: "center",
      gap: "clamp(15px, 3vw, 25px)",
      flexWrap: "wrap",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 30px)",
      borderRadius: "clamp(6px, 1.5vw, 10px)",
      cursor: "pointer",
      fontSize: "clamp(14px, 2.5vw, 18px)",
      fontWeight: "500",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    resetButton: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 30px)",
      borderRadius: "clamp(6px, 1.5vw, 10px)",
      cursor: "pointer",
      fontSize: "clamp(14px, 2.5vw, 18px)",
      fontWeight: "500",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    shape: {
      background: "#8b5cf6",
      position: "absolute",
      width: "clamp(25px, 5vw, 40px)",
      height: "clamp(25px, 5vw, 40px)",
      transition: "all 0.5s ease",
      boxShadow: "0 4px 8px rgba(139, 92, 246, 0.3)",
    },
    instructions: {
      fontSize: "clamp(12px, 2vw, 14px)",
      color: "#9ca3af",
      marginTop: "10px",
      fontStyle: "italic",
    },
    stats: {
      marginTop: "20px",
      color: "#9ca3af",
      fontSize: "14px",
    },
  };

  // Add hover effect for buttons
  const buttonHover = {
    ...styles.button,
    backgroundColor: "#2563eb",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  };

  const resetButtonHover = {
    ...styles.resetButton,
    backgroundColor: "#4b5563",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  };

  // Calculate how many circles have moved
  const movedCircles = shapes.filter(
    (shape) => shape.type === "circle" && shape.y > initialShapes[0].y,
  ).length;

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Transform an Array</h3>
      <div style={styles.buttonWrapper}>
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
          Move circles down!
        </button>

        <button
          style={styles.resetButton}
          onClick={handleReset}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              resetButtonHover.backgroundColor;
            e.currentTarget.style.transform = resetButtonHover.transform;
            e.currentTarget.style.boxShadow = resetButtonHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.resetButton.backgroundColor;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = styles.resetButton.boxShadow;
          }}
        >
          Reset Positions
        </button>
      </div>
      <p style={styles.instructions}>
        Click the button to move only circles down by 50px
      </p>

      <div style={styles.stats}>
        Circles moved: {movedCircles}/2 •{" "}
        {shapes.some((s) => s.y > initialShapes[0].y + 50)
          ? "Multiple moves"
          : "Initial position"}
      </div>

      {responsiveShapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            ...styles.shape,
            left: `clamp(30px, ${shape.x}px, calc(100% - 50px))`,
            top: shape.y,
            borderRadius:
              shape.type === "circle" ? "50%" : "clamp(4px, 1vw, 8px)",
          }}
          title={`${shape.type.charAt(0).toUpperCase() + shape.type.slice(1)} at (${shape.x}, ${shape.y})`}
        />
      ))}
    </div>
  );
}
