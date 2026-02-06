import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
    price: 5.99,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
    price: 3.49,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
    price: 2.99,
  },
];

export default function UpdateItemInShopingCard() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      }),
    );
  }

  function handleDecreaseClick(productId) {
    setProducts(
      products
        .map((product) => {
          if (product.id === productId) {
            const newCount = product.count - 1;
            if (newCount <= 0) {
              // Remove product if count becomes 0 or less
              return null;
            }
            return { ...product, count: newCount };
          } else {
            return product;
          }
        })
        .filter(Boolean),
    ); // Remove null items
  }

  function handleRemoveClick(productId) {
    setProducts(products.filter((product) => product.id !== productId));
  }

  function handleReset() {
    setProducts(initialProducts);
  }

  // Calculate total items and price
  const totalItems = products.reduce((sum, product) => sum + product.count, 0);
  const totalPrice = products.reduce(
    (sum, product) => sum + product.count * product.price,
    0,
  );

  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#ffffff",
      padding: "30px",
      minHeight: "100vh",
      maxWidth: "800px",
      margin: "0 auto",
    },
    title: {
      color: "#3b82f6",
      fontSize: "28px",
      margin: "0 0 30px 0",
      textAlign: "center",
    },
    cartList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    cartItem: {
      backgroundColor: "#1e1e1e",
      marginBottom: "15px",
      padding: "20px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderLeft: "4px solid #3b82f6",
      transition: "transform 0.2s",
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "5px",
      color: "#ffffff",
    },
    itemPrice: {
      color: "#9ca3af",
      fontSize: "14px",
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    quantity: {
      backgroundColor: "#3b82f6",
      color: "white",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "bold",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s",
    },
    minusButton: {
      backgroundColor: "#ef4444",
    },
    removeButton: {
      backgroundColor: "#6b7280",
      fontSize: "14px",
      padding: "8px 16px",
      width: "auto",
    },
    summary: {
      backgroundColor: "#1e1e1e",
      padding: "25px",
      borderRadius: "10px",
      marginTop: "30px",
      border: "1px solid #333",
    },
    summaryTitle: {
      margin: "0 0 20px 0",
      color: "#ffffff",
      fontSize: "20px",
      textAlign: "center",
    },
    summaryStats: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
    },
    statBox: {
      textAlign: "center",
      minWidth: "150px",
    },
    statLabel: {
      color: "#9ca3af",
      fontSize: "14px",
      marginBottom: "8px",
    },
    statValue: {
      color: "#ffffff",
      fontSize: "24px",
      fontWeight: "bold",
    },
    controls: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "30px",
    },
    actionButton: {
      backgroundColor: "#10b981",
      color: "white",
      border: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      transition: "background-color 0.2s",
    },
    resetButton: {
      backgroundColor: "#6b7280",
    },
    emptyCart: {
      textAlign: "center",
      padding: "40px",
      color: "#9ca3af",
      fontSize: "18px",
    },
    itemTotal: {
      color: "#10b981",
      fontSize: "16px",
      fontWeight: "600",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Shopping Cart - Update Items in Array</h1>
      <h3>Fix The Bug To Update The Shoping Cart</h3>
      {products.length === 0 ? (
        <div style={styles.emptyCart}>Your cart is empty! Add some items.</div>
      ) : (
        <ul style={styles.cartList}>
          {products.map((product) => (
            <li key={product.id} style={styles.cartItem}>
              <div style={styles.itemInfo}>
                <div style={styles.itemName}>{product.name}</div>
                <div style={styles.itemPrice}>
                  Price: ${product.price.toFixed(2)} each
                </div>
                <div style={styles.itemTotal}>
                  Total: ${(product.count * product.price).toFixed(2)}
                </div>
              </div>

              <div style={styles.quantityControls}>
                <div style={styles.quantity}>{product.count}</div>
                <div style={styles.buttonGroup}>
                  <button
                    style={{ ...styles.button, ...styles.minusButton }}
                    onClick={() => handleDecreaseClick(product.id)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#dc2626")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#ef4444")
                    }
                  >
                    −
                  </button>
                  <button
                    style={styles.button}
                    onClick={() => handleIncreaseClick(product.id)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#2563eb")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#3b82f6")
                    }
                  >
                    +
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.removeButton }}
                    onClick={() => handleRemoveClick(product.id)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#4b5563")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6b7280")
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {products.length > 0 && (
        <div style={styles.summary}>
          <h3 style={styles.summaryTitle}>Cart Summary</h3>
          <div style={styles.summaryStats}>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>Total Items</div>
              <div style={styles.statValue}>{totalItems}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>Unique Products</div>
              <div style={styles.statValue}>{products.length}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>Total Price</div>
              <div style={styles.statValue}>${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}

      <div style={styles.controls}>
        <button
          style={{ ...styles.actionButton, ...styles.resetButton }}
          onClick={handleReset}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#4b5563")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#6b7280")
          }
        >
          Reset Cart
        </button>
        <button
          style={styles.actionButton}
          onClick={() => alert("Checkout functionality would go here!")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#10b981")
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
