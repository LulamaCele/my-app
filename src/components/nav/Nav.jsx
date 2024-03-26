import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import bars from '../../images/bars-solid.svg'

export function Nav() {
    return (
        <div className='header'>
            <nav>
                <input type="checkbox" id="check"/>
                    <label for="check" class="checkbtn">
                        <img src={bars} alt="menu-bar"/>
                    </label>
                    <Link to={`/`}>
                    <label class="logo">Perfect Weddings</label>
                    </Link>
                    <ul>
                        <Link to={`/services`}>
                        <li><a class="nav-link" href="" >Services</a></li>
                        </Link>
                        <Link to={`/testimonials`}>
                        <li><a class="nav-link" href="">Testimonials</a></li>
                        </Link>
                        <Link to={`/gallery`}>
                        <li><a class="nav-link" href="">Gallery</a></li>
                        </Link>
                        <Link to={`/contact`}>
                        <li><a class="nav-link" href="">Contact</a></li>
                        </Link>
                    </ul>
            </nav>
        </div>
    )
}

