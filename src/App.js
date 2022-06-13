import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Payment from './components/Payment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Header />
        <Payment />
      </div>
      <ToastContainer position="top-left" autoClose={3000} limit={2} />
    </Router>
  );
}

export default App;
