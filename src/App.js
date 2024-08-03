import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal';


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
  "branch": ["chi nhánh"],
  "bracket": ["dấu ngoặc"],
  "merger": ["sự sát nhập"],
  "record": ["hồ sơ"],
  "fund": ["quỹ"],
  "confide (v)": ["tâm sự"],
  "confidential (adj)": ["bảo mật"],
  "rehearsals": ["buổi diễn tập"],
  "inspect": ["quan sát"],
  "are inspected": ["được kiểm tra"],
  "steadily": ["đều đặn", "liên tục"],
  "brief": ["ngắn", "gọn"],
  "loyal": ["trung thành"],
  "strict": ["nghiêm ngặt", "nghiêm khắc"],
  "harbor": ["hải cảng"],
  "vessle": ["tàu", "thuyền", "lọ", "bình"],
  "likely": ["có khả năng"],
  "consequently": ["do đó", "vì vậy", "hậu quả"],
  "beneath + (N)": ["ở dưới"],
  "flavor = taste": ["hương vị"],
  "renovate": ["đổi mới"],
  "renovated": ["được cải tạo"],
  "whenever + (SVO)": ["bất cứ khi nào"],
  "firm": ["hãng"],
  "firm's": ["của công ty"],
  "enforce": ["thi hành"],
  "hungrily": ["khao khát", "thèm muốn"],
  "brave": ["can đảm"],
  "bravely": ["dũng cảm"],
  "punetually": ["đúng giờ"],
  "promote (v) = promotion (n)": ["khuyến mãi", "khuyến khích", "thăng tiến", "quảng bá"],
  "chief": ["người đứng đầu", "giám đốc"],
  "approve ~ approval": ["chấp thuận"],
  "within = over": ["trong vòng"],
  "southernmost": ["cực nam"],
  "portion": ["phần"],
  "peninsula": ["bán đảo"],
  "flat": ["phẳng"],
  "consultation": ["tư vấn"],
  "flat consultation fee": ["phí tư vấn cố định"],
  "in advance": ["trước"],
  "charge": ["thù lao"],
  "charges": ["phí", "tính phí"],
  "charger": ["sạc"],
  "reliable": ["đáng tin cậy"],
  "typical": ["đặc trưng"],
  "typically": ["tiêu biểu"],
  "fairly": ["cân bằng", "kha khá"],
  "sharply": ["sắc", "nhọn"],
  "even": ["thậm chí"],
  "evenly": ["như nhau", "bằng phẳng"],
  "recycable": ["có thể tái chế"],
  "critically": ["quan trọng", "chỉ trích"],
  "freshly": ["tươi", "gần đây", "mới đây"],
  "exception": ["ngoại lệ"],
  "experience": ["kinh nghiệm", "trải nghiệm"],
  "mug": ["cái cốc"],
  "appreciation": ["sự cảm kích"],
  "take place": ["tiến hành", "xảy ra"],
  "against": ["chống lại"],
  "attendants": ["tiếp viên"],
  "upon boarding": ["khi lên máy bay"],
  "grand": ["vĩ đại"],
  "a grand opening celebration": ["buổi lễ khai trương"],
  "competition": ["cuộc thi"],
  "competitive": ["cạnh tranh"],
  "pharmaceutical": ["dược phẩm"],
  "outline": ["nét phác thảo"],
  "arrangement": ["sự sắp xếp"],
  "courthouse": ["tòa án"],
  "laboratory": ["phòng thí nghiệm"],
  "soon": ["sớm"],
  "supplies": ["vật tư", "quân nhu"],
  "coordinate": ["điều phối"],
  "coordinator": ["điều phối viên"],
  "production": ["sản xuất"],
  "casual": ["bình thường"],
  "exhausted": ["kiệt sức"],
  "waterproof": ["chống nước"],
  "buckle": ["khóa"],
  "belt": ["thắt lưng"],
  "seat belt": ["dây an toàn"],
  "innovative": ["đổi mới"],
  "strategy": ["chiến lược", "chiến thuật"],
  "anticipated": ["dự kiến", "được mong chờ"],
  "assumed": ["giả sử"],
  "predict": ["dự đoán"],
  "relieved": ["an tâm"],
  "special = especial = exceptional": ["đặc biệt"],
  "following": ["theo sau"],
  "retail": ["bán lẻ"],
  "in addition to": ["cùng với", "ngoài ra"],
  "in order that": ["để mà"],
  "regarding": ["về", "liên quan đến"],
  "direct to": ["chuyển tới", "hướng tới"],
  "concern": ["lo ngại", "bận tâm", "thắc mắc"],
  "attempt = effort": ["nổ lực", "cố gắng"],
  "weakened": ["làm yếu đi"],
  "prefer": ["muốn", "thích hơn"],
  "refer": ["tham khảo", "chỉ dẫn"],
  "refers": ["ám chỉ"],
  "criteria": ["tiêu chuẩn", "tiêu chí"],
  "costume": ["trang phục"],
  "fabric": ["vải vóc"],
  "rehearse": ["luyện tập"],
  "rehearsed": ["diễn tập"],
  "comprehensive": ["toàn diện"],
  "appeal + (to)": ["thu hút"],
  "ultility": ["đa dụng", "tính thiết thực"],
  "unless": ["trừ khi", "nếu không"],
  "whether": ["liệu"],
  "productive": ["năng suất", "hiệu quả"],
  "hesitant": ["do dự", "ngần ngại"],
  "hesitation": ["ngập ngừng"],
  "unpaid leave": ["nghỉ phép không lương"],
  "deposit": ["tiền gửi"],
  "as": ["khi", "bởi vì"],
  "either  (either...or...)": ["hoặc"],
  "acquire": ["giành được"],
  "common": ["chung", "phổ biến"],
  "regular": ["thường xuyên", "đều đặn"],
  "usual": ["thông thường", "thường lệ"],
  "plain": ["đơn giản", "rõ ràng"],
  "toward": ["hướng tới", "theo hướng"],
  "persue": ["theo đuổi"],
  "brochure": ["cuốn sách nhỏ", "tập quảng cáo"],
  "accurate": ["chính xác"],
  "inquire": ["hỏi"],
  "evaluate": ["đánh giá"],
  "colleague": ["đồng nghiệp"],
  "college": ["cao đẳng"],
  "consultant": ["tư vấn", "nhà tư vấn"],
  "yield": ["sinh ra", "mang lại", "năng suất"],
  "ultimate = finally": ["cuối cùng"],
  "expert = specialist": ["chuyên gia"],
  "perspective": ["góc nhìn", "quan điểm"],
  "belief": ["sự tin tưởng"],
  "proportion": ["tỷ lệ", "sự cân xứng"],
  "distract": ["đánh lạc hướng"],
  "distracting": ["làm mất tập trung"],
  "remodel": ["sửa sang lại"],
  "yearly": ["hàng năm"],
  "quarterly": ["hàng quý"],
  "monthly": ["hàng tháng"],
  "weekly": ["hàng tuần"],
  "daily": ["hàng ngày"],
  "hourly": ["hàng giờ"],
  "justifiable": ["hợp lý", "chính đáng"],
  "whereas": ["nhưng ngược lại", "trong khi"],
  "likewise": ["cũng", "như thế"],
  "pronoucement": ["công bố chính thức", "lời tuyên bố"],
  "guideline": ["hướng dẫn", "đường lối"],
  "Given (prep)": ["Dựa vào", "Với"],
  "former": ["trước đây", "thuở xưa"],
  "particularly": ["một cách đặc biệt"],
  "avoidably": ["có thể tránh được"],
  "broad": ["rộng lớn"],
  "concerning": ["về việc", "liên quan đến"],
  "transit": ["quá cảnh"],
  "list (n)": ["danh sách"],
  "list (v)": ["liệt kê"],
  "qualification": ["trình độ chuyên môn"],
  "engagement": ["sự cam kết", "sự đính hôn"],
  "assortment": ["sự phân loại"],
  "unlikely": ["không thể"],
  "challenge": ["thử thách", "khó khăn"],
  "construction": ["xây dựng", "sự thi công"],
  "forbid = prohibit = ban": ["cấm"],
  "acknowledge": ["thừa nhận"],
  "Thanks to + (N)": ["Nhờ có", "Nhờ vào"],
  "serious": ["nghiêm trọng"],
  "seriously": ["nghiêm túc"],
  "furious": ["giận dữ"],
  "apartment": ["căn hộ"],
  "department": ["phòng ban"],
  "The study": ["nghiên cứu"],
  "detach": ["tách ra"],
  "dwell": ["trú ngụ"],
  "dweller": ["cư dân"],
  "Apparently": ["Hình như"],
  "In contrast": ["Ngược lại"],
  "process": ["quy trình", "quá trình", "tiến trình"],
  "proceed": ["tiếp tục"],
  "proceeds": ["tiến hành"],
  "expense": ["chi phí"],
  "entire": ["toàn bộ"],
  "trade": ["buôn bán"],
  "trade show": ["triển lãm thương mại", "hội chợ"],
  "exhibit": ["triển lãm", "trưng bày"],
  "exhibition": ["buổi triển lãm"],
  "exhibitor": ["nhà tổ chức triển lãm"],
  "As of + (time)": ["tính đến ngày"],
  "Provided that = Providing that": ["Với điều kiện là"],
  "mention": ["đề cập đến"],
  "insightful": ["sâu sắc"],
  "summary": ["tóm tắt"],
  "composition": ["thành phần"],
  "obvious": ["rõ ràng"],
  "message": ["tin nhắn", "thông điệp"],
  "crucial": ["chủ yếu", "thiết yếu"],
  "foreseeable future": ["trong tương lai gần"],
  "concise": ["ngắn gọn"],
  "concisely": ["chính xác", "một cách ngắn gọn"],
  "undoubted (adj) ~ undoubtedly (adv)": ["chắc chắn"],
  "deliberation": ["sự thận trọng", "sự cân nhắc"],
  "deliberate": ["suy nghĩ thận trọng"],
  "deliberately": ["một cách cố ý"],
  "adopt": ["thực hiện", "nhận nuôi"],
  "adopting = apply": ["áp dụng"],
  "generous": ["rộng lượng", "hào phóng"],
  "collaborate = cooperative ": ["cộng tác", "hợp tác"],
  "severe": ["khắt khe", "gay gắt", "nghiêm trọng"],
  "situation": ["tình huống", "tình hình"],
  "preliminary (priliminary list)": ["sơ bộ"],
  "candidate": ["ứng viên"],
  "interviewer": ["người phỏng vấn", "nhà tuyển dụng"],
  "interviewee": ["người được phỏng vấn", "ứng viên"],
  "firuge out": ["nhận ra", "tìm ra"],
  "acquistion": ["sự mua lại"],
  "favor": ["thiện ý"],
  "favorable": ["có lợi"],
  "specific": ["cụ thể"],
  "obtain": ["đạt được"],
  "instruction": ["chỉ dẫn", "hướng dẫn"],
  "instructional": ["giảng dạy"],
  "expertise": ["chuyên môn"],
  "audience": ["khán giả"],
  "unlike": ["không giống như"],
  "priority": ["sự ưu tiên"],
  "prioritize": ["ưu tiên"],
  "partnership": ["quan hệ đối tác"],
  "broaden": ["mở rộng", "nới rộng"],
  "corresponds": ["tương ứng", "tương thích", "phù hợp"],
  "represent": ["đại diện", "thể hiện", "cho thấy"],
  "appreciate": ["đánh giá"],
  "appreciates": ["đánh giá cao"],
  "partial": ["một phần"],
  "partially": ["một phần"],
  "Except for": ["Trừ khi"],
  "As a result": ["Vì vậy", "Kết quả là"],
  "Rather than": ["Thay vì"],
  "significant": ["có ý nghĩa", "đáng kể"],
  "significantly": ["đáng kể"],
  "improvement": ["sự cải thiện", "sự cải tiến"],
  "due date": ["thời hạn", "ngày đáo hạn"],
  "take up + (time)": ["chiếm (thời gian)"],
  "as long as": ["miễn là"],
  "abundant": ["dồi dào", "phong phú"],
  "primary": ["chủ yếu", "sơ đẳng"],
  "fund-raiser": ["buổi gây quỹ"],
  "reschedule": ["dời lại", "sắp xếp lại"],
  "nearly": ["gần như"],
  "lightly": ["một chút"],
  "resident": ["người dân"],
  "seek": ["tìm kiếm"],
  "presenter": ["người trình bày"],
  "presence": ["sự có mặt"],
  "committee": ["ủy ban"],
  "enthusiasm": ["sự nhiệt tình"],
  "grant application": ["đơn xin tài trợ"],
  "practice": ["luyện tập", "thực hành"],
  "precise": ["chính xác"],
  "precision": ["độ chính xác"],
  "along": ["đi kèm", "đi theo", "dọc theo"],
  "base on/ upon": ["dựa vào", "tùy thuộc"],
  "meets": ["đáp ứng"],
  "headquarter": ["trụ sở chính"],
  "cover": ["che phủ", "bao phủ"],
  "dense forest": ["rừng rậm"],
  "surround": ["bao quanh", "xung quanh"],
  "prosperous": ["thịnh vượng", "phát đạt"],
  "voluntary": ["tình nguyện"],
  "sizeable": ["khá lớn"],
  "calculating": ["khôn ngoan", "tính toán"],
  "agreement": ["hợp đồng", "hiệp định"],
  "afterward": ["sau đó"],
  "career": ["sự nghiệp"],
  "adjust": ["điều chỉnh"],
  "competitor": ["đối thủ cạnh tranh"],
  "subject (v)": ["tùy thuộc", "tuân theo"],
  "subject (n)": ["môn học"],
  "fragment": ["mảnh", "đoạn"],
  "equalities": ["sự công bằng", "sự bình đẳng"],
  "regulation": ["quy định"],
  "categories": ["loại", "danh mục"],
  "legal": ["hợp lý"],
  "revisions": ["sửa đổi"],
  "corporate = enterprise": ["doanh nghiệp"],
  "questionnaire": ["bảng câu hỏi"],
  "objectives": ["mục tiêu"],
  "distinguish": ["phân biệt"],
  "council": ["hội đồng"],
  "assignment": ["bài tập", "nhiệm vụ"],
  "revenue": ["doanh thu"],
  "theoretical": ["lý thuyết"],
  "aspect": ["diện mạo"],
  "aspects": ["các khía cạnh"],
  "assembly-line": ["dây chuyền lắp ráp"],
  "completely": ["hoàn toàn"],
  "progressively": ["đáng kể", "dần dần"],
  "progress": ["tiến triển"],
  "factor": ["nhân tố"],
  "take advantage of = make use of": ["tận dụng"],
  "Owing to": ["Bởi vì"],
  "wool": ["len"],
  "county": ["quận"],
  "raspberry": ["dâu rừng", "phúc bồn tử"],
  "barber": ["thợ cắt tóc"],
  "hairdresser": ["thợ cắt tóc"],
  "coalition": ["liên minh"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
//   "wool": ["len"],
};

const App = () => {
  const totalKeys = Object.keys(initialDictionary).length;

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [randomWord, setRandomWord] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [inCorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const [totalAnswersCount, setTotalAnswersCount] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIncorrectWords(prevWords => ({
        ...prevWords,
        [randomWord]: dictionary[randomWord],
      }));
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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
          <p style={styles.accuracyRate}>
            Accuracy Rate: {accuracyRate.toFixed(2)}%
          </p>
        </div>
      )}
      <div style={styles.header}>
        <div style={styles.textWrapper}>
          <p style={styles.headerTotalText}>Total Words: {totalKeys}</p>
          <p style={styles.headerCorrectText}>Correct: {correctAnswersCount}</p>
          <p style={styles.headerIncorrectText}>
            Incorrect: {inCorrectAnswersCount}
          </p>
        </div>
        <div style={styles.buttonWrapper}>
          <button
            style={styles.buttonIncorrect}
            onClick={handleOpenModal}
          >
            View Incorrect
          </button>
        </div>
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        incorrectWords={incorrectWords}
      />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'JetBrains Mono, monospace',
    padding: '20px',
  },
  header: {
    display: 'flex',
    marginTop: '20px',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  headerTotalText: {
    marginLeft: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: "#f6a681",
  },
  headerCorrectText: {
    marginLeft: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: "#00ff28",
  },
  headerIncorrectText: {
    marginLeft: '5px',
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
  textWrapper: {
    flex: 4,
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  buttonWrapper: {
    flex: 1,
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    },
  buttonIncorrect: {
    padding: '10px 0',
    backgroundColor: '#f8efa0',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    height: '100%',
    width: '100%',
  },
};

export default App;
