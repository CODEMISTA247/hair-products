import React from 'react'
import {Link} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const Nav = (props) => {


    return(
        <div className='navbar navbar-expand-lg'> 
            <div className='container-fluid'>
                <h2>Muńua | Cosmetics</h2>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Dropdown>
                                    <Dropdown.Toggle variant='link' id='dropdown-basic' className='bg-dark text-light text-decoration-none m-3'>
                                        Shop Products
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item href='/hair-products'>
                                    Hair Products
                                    </Dropdown.Item>
                                    <Dropdown.Item href='/skin-products'>
                                    Skin Products
                                    </Dropdown.Item>
                                    <Dropdown.Item href='/makeup-products'>
                                    Makeup Products
                                    </Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>
                        </ul>
                    </div>

            </div>
        </div>
    )
}


export default Nav;