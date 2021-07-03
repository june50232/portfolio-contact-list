import Link from 'next/link';
import { MainPath } from '../../common/LinkPath';
import styles from './Nav.module.scss';

const Nav = ({ children, className, ...rest }) => {
  let mainClassName = styles.header;

  if (className) {
    mainClassName = `${mainClassName} ${className}`;
  }

  return (
    <header className={mainClassName} {...rest}>
      <Link href={MainPath.home} className="logo">CL</Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
      <ul className="menu">
        <li><Link href={MainPath.add}>+ Add Contact</Link></li>
      </ul>
    </header>
  );
};

export default Nav;
