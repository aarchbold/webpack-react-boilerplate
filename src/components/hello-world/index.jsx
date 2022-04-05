import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';
import homeLogo from '../../images/logos/ethos-logo.png';

const HelloWorld = ({ title }) => (
  <div>
    <div className={style['hello-world']}>{title}</div>
    <img src={homeLogo} alt="home logo" width="200" />
    <img src="https://helios.party/static/images/bg-hero.jpg" alt="home logo" width="340" />
    
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
