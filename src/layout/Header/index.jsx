import logoDesktop from '../../assets/images/logo-desktop.png';
import logoMobile from '../../assets/images/logo-mobile.png';

import { Fragment } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
//import Bell from "../../components/notifications/Bell";
//import Profile from "../../components/profile";

const Header = () => {
return (
<Fragment>
  <header className="app-header">
      <div className="main-header-container container-fluid">
        <div className="header-content-left">
          <div className="header-element">
            <div className="logo">
              <a className="header-logo" href="#">
                <img src={logoDesktop} alt="Logo Ceci Moments" className="desktop-logo" />
                <img src={logoMobile} alt="Logo Ceci Moments" className="mobile-logo" />
              </a>
            </div>
          </div>

          <div className="main-header-center d-none d-lg-block header-link">
            <InputGroup className="search-results">
              <Form.Control
                type="search"
                className="form-header"
                placeholder="Perquisar em eventos e álbuns"
              />
              <Button variant="light"><i className="fe fe-search" aria-hidden="true"></i></Button>
            </InputGroup>
          </div>
        </div>

        <div className="header-content-right">
          <div className="header-element create-event">            
                <span>
                  Criar Evento  
                </span>
          </div>
          
          
        </div>
      </div>
    </header>
</Fragment>
);
}

export default Header;