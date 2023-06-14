import { useState, useRef } from 'react';
import '@/styles/Navbar.module.css';
import { useOnClickOutside } from './useOnClickOutside';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <>
     <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li>
            <button onClick={() => setDropdown((prev) => !prev)}>
              About <span>&#8595;</span>
            </button>
            {dropdown && (
              <ul>
                <li><NavLink to="/Aboutus" activeClassName="active">About us</NavLink></li>
                <li><NavLink to= "/Contact"activeClassName="active">Contact us</NavLink></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
