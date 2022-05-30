import React from 'react';
import LangContext from '../contexts/langContext';

class CategoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            category_name: '',
        };
    }

    // Clear values.
    clearValues = () => {
        this.setState({
            _id: '',
            category_name: ''
        });
    }

    // Update state.
    onChanged = e => {
        this.setState({
            category_name: e.target.value
        });
    };

    // Add a category.
    onAddCategoryAction = e => {
        e.preventDefault();
        if (typeof this.props.onAddFormAction == 'function' && this.isValid()) {
            this.props.onAddFormAction({
                category_name: this.state.category_name
            });
            this.clearValues();
        }
    };

    // Edit a category.
    onEditCategoryAction = e => {
        e.preventDefault();
        if (typeof this.props.onEditFormAction == 'function' && this.isValid()) {
            this.props.onEditFormAction(this.state);
            this.clearValues();
        }
    };

    // Load the values after selecting a category from the list.
    loadValues = category => {
        this.setState({
            _id: category._id,
            category_name: category.category_name
        });
    };

    // Display buttons according to the operation.
    showButtons = () => {
        if (this.state._id != '') {
            return (
                <>
                    <button type="submit" className="btn btn-primary" onClick={this.onEditCategoryAction}>{this.context.languages.btnEdit}</button>
                    <a className="btn btn-danger" onClick={this.clearValues}>{this.context.languages.btnCancel}</a>
                </>
            );
        }
        return (
            <button type="submit" className="btn btn-primary" onClick={this.onAddCategoryAction}>{this.context.languages.btnAdd}</button>
        );
    };

    // Check if the state is valid.
    isValid = () => {
        const isValid = Object.keys(this.state).every(key => {
            if (key != '_id') {
                return this.state[key] != '';
            }
            return true;
        });
        if (!isValid) {
            alert(this.context.languages.msgEmptyFields);
        }
        return isValid;
    };

    render() {
        return (
            <LangContext.Consumer>
                {({ languages }) => (
                    <div className='card mb-2 mt-2'>
                        <div className='card-body'>
                            <h5 className="card-title">{languages.titleCategory}</h5>
                            <hr className='divider' />
                            <form method='post' name='form-category'>
                                <div className='row mb-2'>
                                    <div className="col">
                                        <input type="text"
                                            className="form-control"
                                            id="category_name"
                                            name="category_name"
                                            placeholder={languages.categoryName}
                                            value={this.state.category_name}
                                            required={true}
                                            onChange={this.onChanged} />
                                    </div>
                                    <div className='col'>
                                        <div className="d-grid gap-2 d-md-flex">
                                            {this.showButtons()}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </LangContext.Consumer>
        );
    }
}

CategoryForm.contextType = LangContext;

export default CategoryForm;
