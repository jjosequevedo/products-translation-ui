import React from 'react';
import '../../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdminLayout from '../layouts/AdminLayout';
import LangContext from '../contexts/langContext';
import Language from '../lang/language';

class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      setLanguage: this.setLanguage,
      languages: Language.en,
    };
  }

  setLanguage = lang => {
    this.setState({
      languages: Language[lang]
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <LangContext.Provider value={this.state}>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </LangContext.Provider>
    );
  }

}

export default MyApp;
