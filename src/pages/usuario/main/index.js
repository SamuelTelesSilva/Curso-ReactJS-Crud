import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            produto: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8080/produtos`) //fetch vai fazer um Get no back e vai trazer os dados 
        .then(produto => 
            produto.json().then(produto => this.setState({produto}))
            )
    }

    render(){
        const {produto} = this.state;

        return produto.map((produto, index) => (
            <div className="produto-list">
                <div key={index}>
                    <article>
                        <h5>Nome do Produto: {produto.nomeProduto}</h5>
                        <p><Link to={`/produtos/${produto.id}`}>Detalhes do produto</Link></p>
                    </article>
                </div>
            </div>
        ));
    }

}