import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Produto extends Component{
    state = {
        produto: {}
    };

    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://localhost:8080/produtos/${id}`)
        .then(produto =>
            produto.json().then(produto => this.setState({produto}))
            )
    }
    
    render(){
        const {produto} = this.state;
        
        return (
            <div className="produto-info">
                <h1>{produto.nomeProduto}</h1> 
                <h1>{produto.codProduto}</h1>
                <h1>{produto.precoProduto}</h1>
                <h1>{produto.categoria}</h1>
                <h1>{produto.descProduto}</h1>
                <h1>{produto.qtdProduto}</h1>
                <br />

                <Link to={`/`}>Voltar</Link><br />
                <Link to={`/editarProduto/${produto.id}`}>Editar</Link><br />
                <Link to={`/deletarProduto/${produto.id}`}>Deletar</Link><br />
            </div>
        );
    }

} 

