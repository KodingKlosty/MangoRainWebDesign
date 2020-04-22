import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'
import mangoRainLogoCrop from '../../imgs/mangoRainLogoCrop.svg'
import '../../styles/header.scss'

class Header extends Component {
    render (){
        return(
            <div className='headerdiv'>
                <div>
                    <Navbar className="navImg">
                            <h1>Mango Rain</h1>
                            <img 
                                class="center"
                                src={mangoRainLogoCrop}
                                height="150px"
                                width="150px"
                                alt="Mango Rain Logo" 
                            />
                            <h1>Web Design</h1>
                    </Navbar>
                    <Nav className='navContainer'>
                        <NavItem>
                            <NavLink className="allLinks" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='allLinks' href="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='allLinks' href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='allLinks' href="/hire">Hire Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='allLinks' href="/portal">Client Portal</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div> // End Main div
        )  // End Return
    } // End Render
}

export default Header