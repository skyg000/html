
import './App.scss';
import Css from './page/Css';
import Image from './page/Image';
import Home from './page/Home';
function App() {
  return (
    <div className="wrap">
      <header>
        <nav style={{border:'1px solid white'}}>
          <a href="#">css활용</a>
          <a href="#">img 활용</a>
          <a href="#">router(패이지이동)</a>
        </nav>
      </header>

      <main>
        <Home />
      </main>
    </div>
  );
} 
export default App;
