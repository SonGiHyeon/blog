import './App.css';
import { Buffer } from "buffer";

window.Buffer = Buffer;

const Header = () => {
  return (
    <div className="text-center my-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to GiHyeon's Blog</h1>
      <p className="text-lg text-gray-600 mb-4">이 블로그는 주로 블록체인에 대한 얘기를 나누는 곳입니다.</p>
      <h4 className="text-md mt-4 mb-4 text-gray-700">블록체인 관련 끄적끄적...</h4>
      <h2 className="mt-6">기술 스택</h2>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="mb-6"> {/* Add margin-bottom to create space */}
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        width="50"
        className="mr-4" // margin-right for spacing between images
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        width="50"
        className="mr-4"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        width="50"
        className="mr-4"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        width="50"
        className="mr-4"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
        alt="Solidity"
        width="50"
      />
    </div>
  )
}

const ImageGallery = () => {
  const images = [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2Vmb%2FbtsKdvtVDf9%2Fw8VRfOIxueDLec4MC5Eve0%2Fimg.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/55/32/b9/5532b9c7-3793-c006-87dd-5fd2634e28d2/Launch_Screen.jpg/460x0w.webp",
    "https://media1.tenor.com/m/hArfSAyNzjUAAAAd/solana-moon.gif",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/55/32/b9/5532b9c7-3793-c006-87dd-5fd2634e28d2/Launch_Screen.jpg/460x0w.webp",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2Vmb%2FbtsKdvtVDf9%2Fw8VRfOIxueDLec4MC5Eve0%2Fimg.jpg",
  ];

  return (
    <div className="image-gallery flex flex-col justify-end gap-6 my-6 element2"> {/* Increase gap between images */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            marginBottom: "20px" // Added margin bottom to give space between images
          }}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="element">
      &copy; 2025 GiHyeon's Blog | All rights reserved
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 min-h-screen flex flex-col">
      <Header />
      <Skill />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default App;
