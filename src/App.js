import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialDictionary = {
  "annual": ["hằng năm"],
  "attendance": ["sự tham gia"],
  "mandatory": ["bắt buộc"],
  "tightly": ["chặt", "chặt chẽ"],
  "occasionally": ["thỉnh thoảng"],
  "vaguely": ["mơ hồ", "hơi đúng"],
  "realistically": ["thực tế"],
  "feature (n)": ["đặc điểm", "đặc trưng"],
  "feature (v)": ["có"],
  "therefore": ["do đó", "vì vậy"],
  "seminar = workshop": ["hội thảo"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
  // "wool": ["len"],
};

const App = () => {
  const totalKeys = Object.keys(initialDictionary).length;

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [randomWord, setRandomWord] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  useEffect(() => {
    generateRandomWord();
  }, [dictionary]);

  const generateRandomWord = () => {
    const keys = Object.keys(dictionary);
    if (keys.length > 0) {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setRandomWord(randomKey);
    } else {
      setRandomWord(null);
    }
  };

  const checkAnswer = () => {
    const correctValues = dictionary[randomWord].join(', ');
    const correctAnswers = dictionary[randomWord].map(answer => answer.toLowerCase());
    if (correctAnswers.includes(inputValue.toLowerCase())) {
      toast.success(<div style={{ lineHeight: '1.5' }}>
        Correct! <br />
        {correctValues}
      </div>, {
        autoClose: 2000,
      });
      setCorrectAnswersCount(prevCount => prevCount + 1);
    } else {
      toast.error(<div style={{ lineHeight: '1.5' }}>
        STUPID!!! <br />
        {correctValues}
      </div>, {
        autoClose: 2000,
      });
    }

    const updatedDictionary = { ...dictionary };
    delete updatedDictionary[randomWord];
    setDictionary(updatedDictionary);

    setInputValue('');
    generateRandomWord();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của Enter nếu cần
      checkAnswer();
    }
  };

  return (
    <div style={styles.container}>
      {randomWord ? (
        <>
          <p style={styles.label}>{randomWord}</p>
          <input
            style={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập nghĩa của từ"

            onKeyPress={handleKeyPress} // Xử lý sự kiện nhấn phím
          />
          <button style={styles.button} onClick={checkAnswer}>
            Submit
          </button>
        </>
      ) : (
        <p style={styles.label}>Out of words in dictionary!</p>
      )}
      <div style={styles.header}>
        <p style={styles.headerTotalText}>Total Words: {totalKeys}</p>
        <p style={styles.headerCorrectText}>Correct Answers: {correctAnswersCount}</p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  headerTotalText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: "#f6a681",
  },
  headerCorrectText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: "#00ff28",
  },
  label: {
    fontSize: '42px',
    marginTop: '70px',
    textAlign: 'center',
    color: "#ff7f42",
    backgroundColor: "#ccc",
    width: '100%',
  },
  input: {
    height: '50px',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: '1px',
    paddingHorizontal: '10px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: '20px',
    padding: '10px 0',
    backgroundColor: '#18e090',
    paddingVertical: '15px',
    borderRadius: '5px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
  },
};

export default App;
