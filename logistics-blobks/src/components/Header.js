import React from "react";


class Header extends React.Component {
    render() {
        return (
            <div>
                <header class="main-header clearfix" role="header">
                    <div class="logo">
                        <a href="#">
                     <em>Logistics</em> Blocks
                        </a>
                        {/* <img left="20" position="absolute" height="100" width="400" src="assets/images/logo-sign.png" alt="" /> */}
                     
                    </div>
                    <a href="#menu" class="menu-link"><i class="fa fa-bars"></i></a>
                    <nav id="menu" class="main-nav" role="navigation">
                        <ul class="main-menu">
                            <li><a href="#section1">Home</a></li>
                            <li class="has-submenu"><a href="#section2">About Us</a>
                                <ul class="sub-menu">
                                    <li><a href="#section2">Who we are?</a></li>
                                    <li><a href="#section3">What we do?</a></li>
                                    <li><a href="#section3">How it works?</a></li>
                                    <li><a href="https://templatemo.com/about" rel="sponsored" class="external">External URL</a></li>
                                </ul>
                            </li>
                            <li><a href="#section4">Services</a></li>
                            {/* <!-- <li><a href="#section5">Video</a></li>  */}
                            <li><a href="#section6">Contact</a></li>
                            <li><a href="" class="external">Careers</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;