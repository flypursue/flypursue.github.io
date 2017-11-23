import React from 'react';
import logo from '../assets/images/logo.png';

class Header extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="logo">
                        <a>
                            <img src={logo} />
                        </a>
                    </div>
                    <div className="phones">
                        <p>联系方式：</p>
                        <p>13239170381</p>
                        <p>13279188234</p>
                        <p>0917-3238468</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
