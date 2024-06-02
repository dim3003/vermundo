import React from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	  return (
		      <div className="header">
		        <div className="top-bar">
		          <div className="brand">VERMUNDO</div>
		          <input type="text" className="search-bar" placeholder="Recherche"/>
		        </div>
		        <div className="central-text">PARTIR À L'AVENTURE</div>
		  	<div className="central-link"><a>Vers le blog <FontAwesomeIcon icon={faArrowRight} /></a></div>
		      </div>
		    );
};

export default Header
