import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'

export  default class Main extends Component {
    state = {
        product: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response  = await api.get('/products');

        const { docs, ...productInfo } = response.data;

        this.setState({product: docs, productInfo});
    }

    prevPage = () => {

    }
    nextPage = () => {

    }
    render() {
        const {product} = this.state

        return (
            <div className="product-list">
                {product.map(prod => (
                    <article key={prod._id}>
                        <strong>{prod.title}</strong>
                        <p>{prod.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }

}
