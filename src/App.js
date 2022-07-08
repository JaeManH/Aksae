import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <a href='{App}'><img src={logo} className='Logo_Img'></img></a>
        <div>
          <a href='#'><div className='Header_items'>about us</div></a>
          <a href='#'><div className='Header_items'>서비스</div></a>
          <a href='#'><div className='Header_items'>설립개요</div></a>
          <a href='#'><div className='Header_items'>모티브</div></a>
          <a href='#'><div className='Header_items'>기대효과</div></a>
          <a href='#'><div className='Header_items'>미식등급</div></a>
        </div>
      </header>
      <div className='Content_container'>
        <h1>컨텐츠 들어가는곳</h1>
      </div>
      <footer>
       <h1>ⓒ 2022. Aksae all rights reserved.</h1>
      </footer>
    </div>
  );
}

export default App;
