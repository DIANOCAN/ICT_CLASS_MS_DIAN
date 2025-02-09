import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useJwt } from 'react-jwt';
import Cookies from 'js-cookie';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const { decodedToken, isExpired } = useJwt(token);
  
  useEffect(() => {
    setLoading(true);
    if (!token || isExpired) {
      alert('Session expired, please re-login');
      navigate('/login');
    }
    setLoading(false);
  }, [token, isExpired, navigate]);

  return (
    loading ? <p>Loading...</p> :
    <div id="header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span className="user-name">
            {decodedToken && decodedToken.payloadToken ? decodedToken.payloadToken.name : 'User'}
          </span>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="User" className="user-photo" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;