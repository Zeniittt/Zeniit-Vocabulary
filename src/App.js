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
  "furthermore": ["hơn nữa", "vả lại"],
  "as if": ["như thể là"],
  "such as": ["chẳng hạn như"],
  "issue": ["ấn phẩm", "vấn đề"],
  "claim": ["yêu cầu", "tuyên bố", "khẳng định"],
  "lead to = result to = cause": ["dẫn đến", "gây nên"],
  "remark": ["nhận xét", "làm chú ý"],
  "remarkale": ["đáng chú ý", "đáng kể"],
  "demand": ["yêu cầu", "nhu cầu"],
  "honestly": ["thực tình"],
  "doubtfully": ["nghi ngờ", "mập mờ"],
  "directly": ["trực tiếp"],
  "coat (n)": ["áo choàng", "áo khoác"],
  "coating (v)": ["phủ"],
  "flour": ["bột mì"],
  "spices": ["gia vị"],
  "fryer": ["nồi chiên"],
  "consider": ["cân nhắc", "xem xét"],
  "grant": ["cấp phát", "ban cho"],
  "involve": ["liên quan"],
  "involve in": ["tham gia vào", "liên quan tới"],
  "executives": ["giám đốc điều hành"],
  "renew": ["gia hạn", "làm mới"],
  "identify": ["nhận ra", "nhận dạng"],
  "resemble": ["tương tự", "giống với"],
  "wetsuit": ["bộ đồ lặn"],
  "rubber": ["cao su"],
  "diver": ["thợ lặn"],
  "proposed = proposal": ["đề xuất"],
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
  const [inCorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const [totalAnswersCount, setTotalAnswersCount] = useState(0);

  const accuracyRate = totalAnswersCount === 0 ? 0 : (correctAnswersCount / totalAnswersCount) * 100;

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
    const correctValues = dictionary[randomWord].join(' | ');
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
      setIncorrectAnswersCount(prevCount => prevCount + 1);
    }

    setTotalAnswersCount(prevCount => prevCount + 1);

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
            placeholder="Enter the meaning of the word..."
            onKeyPress={handleKeyPress} // Xử lý sự kiện nhấn phím
          />
          <button style={styles.button} onClick={checkAnswer}>
            Submit
          </button>
        </>
      ) : (
        <div>
          <p style={styles.label}>Out of words in dictionary!</p>
          <p style={styles.accuracyRate}>Accuracy Rate: {accuracyRate.toFixed(2)}%</p>
        </div>
      )}
      <div style={styles.header}>
        <p style={styles.headerTotalText}>Total Words: {totalKeys}</p>
        <p style={styles.headerCorrectText}>Correct: {correctAnswersCount}</p>
        <p style={styles.headerIncorrectText}>Incorrect: {inCorrectAnswersCount}</p>
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
  headerIncorrectText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: "#ff1800",
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
  accuracyRate: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: "#00ff28",
  },
};

export default App;
