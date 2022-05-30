import React from 'react';
import LangContext from '../contexts/langContext';

class Sidebar extends React.Component {
    render() {
        return (
            <LangContext.Consumer>
                {({ languages }) => (
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    {languages.menuProducts}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/categories">
                                    {languages.menuCategories}
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </LangContext.Consumer>
        );
    }
}

export default Sidebar;
