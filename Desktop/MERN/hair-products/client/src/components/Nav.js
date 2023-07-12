import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BiCart } from 'react-icons/bi'
import './Nav.css';

const Nav = () => {

    const {
        isEmpty,
        totalItems
    } = useCart();

return (
<div className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <Link to={'/'} className="home-button">
        Muńua | Cosmetics
    </Link>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="category-dropdown">
            Filter Items
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/filterByCategory/hair">
                Hair Products
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/filterByCategory/facial">
                Facial Products
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/filterByCategory/makeup">
                Makeup Products
            </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </ul>
        <Link 
        to="/cart"
        className={`d-flex align-items-center`}
        >
            <BiCart size='2rem' />
            {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
            <span style={{ marginLeft: !isEmpty ? '-13px' : 0}}>&nbsp;Cart</span>
        </Link>
    </div>
    </div>
</div>
);
};

export default Nav;
