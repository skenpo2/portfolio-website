import Social from './Social';

const Nav = () => {
  return (
    <nav>
      <div className="nav-bar">
        <span className="logo">
          <p className="logo-text">M</p>
        </span>

        <ul className="page-links">
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li className="">
            <a href="#about">About</a>
          </li>
          <li className="">
            <a href="#home">Projects</a>
          </li>
        </ul>
        <Social />
      </div>
    </nav>
  );
};

export default Nav;
