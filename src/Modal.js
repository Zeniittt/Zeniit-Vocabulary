export const Modal = ({ isOpen, onClose, incorrectWords }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button style={styles.modalCloseButton} onClick={onClose}>
          X
        </button>
        <h2 style={styles.title}>Incorrect Words</h2>
        <ul>
          {Object.entries(incorrectWords).map(([word, meanings]) => (
            <li key={word}>
              <strong>{word}:</strong> {meanings.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  // Các style khác...
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "50px",
    textAlign: "center",
    color: "#76d4e0",
  },
  modalContent: {
    marginTop: "10px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    position: "relative",
    maxWidth: "80%",
    maxHeight: "80%",
    overflowY: "auto",
    lineHeight: '2.5'
  },
  modalCloseButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "36px",
    padding: "3px 12px",
    cursor: "pointer",
    color: "#fff",
    borderRadius: "5px",
    backgroundColor: "#e95656",
  },
};
