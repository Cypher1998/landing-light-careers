import './header.scss';
import avatar from '../../assets/person2.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">trips</Link>
        </li>
        <li>
          <Link to="/">recently viewed</Link>
        </li>
        <li>
          <Link to="/">bookings</Link>
        </li>
        <li className="image">
          <img src={avatar} alt="person" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
