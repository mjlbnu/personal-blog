import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import './index.css';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <About />
        {children}
        <Footer config={config} />
      </div>
    );
  }
}
