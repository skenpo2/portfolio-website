import Navlink from './Navlink';
import Social from './Social';
import { navLinks } from '../data';

const Nav = ({ currentItem, setCurrentItem }) => {
  return (
    <nav>
      <div className="nav-bar">
        <span className="logo">
          <p className="logo-text">M</p>
        </span>

        <ul className="page-links">
          {navLinks.map((link, index) => {
            return (
              <li
                className={index == currentItem ? 'active' : 'link'}
                key={link.id}
              >
                <Navlink
                  {...link}
                  index={index}
                  setCurrentItem={setCurrentItem}
                />
              </li>
            );
          })}
        </ul>
        <Social />
      </div>
    </nav>
  );
};

export default Nav;
