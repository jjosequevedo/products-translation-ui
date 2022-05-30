import React from 'react';
import LangContext from '../contexts/langContext';

/**
 * This is the category list component.
 */
class CategoryList extends React.Component {

    // Action to edit a category.
    onEdit = (e, category) => {
        e.preventDefault();
        if (typeof this.props.onEdit == 'function') {
            this.props.onEdit(category);
        }
    };

    // Action to delete a category.
    onDelete = (e, category) => {
        e.preventDefault();
        if (typeof this.props.onEdit == 'function') {
            this.props.onDelete(category);
        }
    };

    render = () => {
        return (
            <LangContext.Consumer>
                {({ languages }) => (
                    <>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="category-list-tab" databstoggle="tab" databstarget="#category-list-tab" type="button" role="tab" aria-controls="category-list-tab" aria-selected="true">{languages.categoryList}</button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="category-list-tab">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">{languages.categoryName}</th>
                                            <th scope="col">{languages.Action}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* List categorys */}
                                        {
                                            this.props.categories.map((p, i) => {
                                                return (
                                                    <tr key={p._id}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>{p.category_name}</td>
                                                        <td>
                                                            <div className="d-grid gap-2 d-md-flex">
                                                                <button className='btn btn-light' onClick={e => this.onEdit(e, p)}>{languages.btnEdit}</button>
                                                                <button className='btn btn-danger' onClick={e => this.onDelete(e, p)}>{languages.btnDelete}</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </LangContext.Consumer>
        );
    };
}

export default CategoryList;
