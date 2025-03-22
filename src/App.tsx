// 메인 페이지

import './index.css';
import { Buffer } from "buffer";

window.Buffer = Buffer;

const Header = () => {
  return (
    <div className="text-center my-6">
      <h1>Welcome to GiHyeon's Blog</h1>
      <p>이 블로그는 주로 블록체인에 대한 얘기를 나누는 곳입니다.</p>
      <h4>블록체인 관련 끄적끄적...</h4>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2Vmb%2FbtsKdvtVDf9%2Fw8VRfOIxueDLec4MC5Eve0%2Fimg.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/55/32/b9/5532b9c7-3793-c006-87dd-5fd2634e28d2/Launch_Screen.jpg/460x0w.webp",
    "https://media1.tenor.com/m/hArfSAyNzjUAAAAd/solana-moon.gif",
  ];

  return (
    <div className="image-gallery flex flex-wrap justify-center gap-4 my-6">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          style={{
            width: "400px",
            height: "500px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-center text-gray-500 py-6 border-t mt-8 hover:text-primary transition-colors duration-300">
      &copy; 2025 GiHyeon's Blog | All rights reserved
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <Header />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default App;
