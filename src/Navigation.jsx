import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <ul>
            <li><Link to="/price-checker"><span className="span">Price Checker</span></Link></li>
          <li><Link to="/"><span className="Home">Home</span></Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;