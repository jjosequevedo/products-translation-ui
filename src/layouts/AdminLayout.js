import React from 'react';
import Sidebar from '../components/sidebar';
import LangContext from '../contexts/langContext';

class AdminLayout extends React.Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <nav className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
                        <LangContext.Consumer>
                            {({ setLanguage }) => (
                                <div className='col'>
                                    <select className="form-select" onChange={e => setLanguage(e.target.value)}>
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                    </select>
                                </div>
                            )}
                        </LangContext.Consumer>
                        <Sidebar />
                    </nav>
                    <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className="card mt-2">
                                        <LangContext.Consumer>
                                            {({ languages }) => (
                                                <div className="card-header">
                                                    {languages.details}
                                                </div>
                                            )}
                                        </LangContext.Consumer>
                                        <div className="card-body">
                                            {this.props.children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default AdminLayout;
