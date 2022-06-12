import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Header />
        <Payment />
      </div>
    </Router>
  );
}

export default App;
