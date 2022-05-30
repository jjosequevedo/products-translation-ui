import React from 'react';
import LangContext from '../contexts/langContext';

/**
 * This is the product list component.
 */
class ProductList extends React.Component {

    // Action to edit a product.
    onEdit = (e, product) => {
        e.preventDefault();
        if (typeof this.props.onEdit == 'function') {
            this.props.onEdit(product);
        }
    };

    // Action to delete a product.
    onDelete = (e, product) => {
        e.preventDefault();
        if (typeof this.props.onEdit == 'function') {
            this.props.onDelete(product);
        }
    };

    render = () => {
        return (
            <LangContext.Consumer>
                {({ languages }) => (
                    <>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="product-list-tab" databstoggle="tab" databstarget="#product-list-tab" type="button" role="tab" aria-controls="product-list-tab" aria-selected="true">{languages.productList}</button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="product-list-tab">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">{languages.productName}</th>
                                            <th scope="col">{languages.quantity}</th>
                                            <th scope="col">{languages.price}</th>
                                            <th scope="col">{languages.category}</th>
                                            <th scope="col">{languages.Action}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* List products */}
                                        {
                                            this.props.products.map((p, i) => {
                                                return (
                                                    <tr key={p._id}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>{p.product_name}</td>
                                                        <td>{p.quantity}</td>
                                                        <td>{p.price}</td>
                                                        <td>{p.categories.length > 0 ? p.categories[0].category_name : ''}</td>
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

export default ProductList;
