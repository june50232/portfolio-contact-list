import styles from './Nav.module.scss';

const Nav = ({ children, className, ...rest }) => {
  let mainClassName = styles.header;

  if (className) {
    mainClassName = `${mainClassName} ${className}`;
  }

  return (
    <header className={mainClassName} {...rest}>
      <a href="" className="logo">Contact List</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
      <ul className="menu">
        <li><a href="#work">+ Add Contact</a></li>
      </ul>
    </header>
  );
};

export default Nav;
