import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './index.css';

class EditarProduto extends Component{
    constructor(props){
        super(props);

        this.state = {
            produto: {
                codProduto: "",
                nomeProduto: "",
                precoProduto: "",
                descProduto: "",
                qtdProduto: "",
                categoria: ""
            },
            redirect: false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://localhost:8080/produtos/${id}`)
        .then(data => {
            data.json().then(data => {
                this.setState({produto: data});
            });
        })
    }

    render(){
        const { redirect } = this.state;

        if(redirect) {
            return <Redirect to="/produtos" />;
        } else {
            return (
                <form onSubmit = {this.handleSubmit}>
                    <fieldset>

                        <legend>Atualizar Produto</legend>
                        <div className="produto-update">
                            <label htmlFor="codProduto">Código do Produto</label>
                            <br />
                            <input 
                                type="text" 
                                id="codProduto" 
                                name="codProduto" 
                                placeholder="Digite o código do produto"
                                minLength="3" 
                                maxLength="100" 
                                required 
                                value={this.state.produto.codProduto}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="produto-update">
                            <label htmlFor="nomeProduto">Nome do Produto</label>
                            <br />
                            <input 
                                type="text" 
                                id="nomeProduto" 
                                name="nomeProduto" 
                                placeholder="Digite o nome do produto"
                                minLength="3" 
                                maxLength="100" 
                                required 
                                value={this.state.produto.nomeProduto}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="produto-update">
                            <label htmlFor="precoProduto">Preço do Produto</label>
                            <br />
                            <input 
                                type="number" 
                                id="precoProduto" 
                                name="precoProduto" 
                                placeholder="Digite o nome do produto"
                                min="1"
                                max="999999"
                                required 
                                value={this.state.produto.precoProduto}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="produto-update">
                            <label htmlFor="descProduto">Desconto do Produto</label>
                            <br />
                            <input 
                                type="text" 
                                id="descProduto" 
                                name="descProduto" 
                                placeholder="Digite o desconto do produto"
                                minLength="3" 
                                maxLength="100"
                                required 
                                value={this.state.produto.descProduto}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="produto-update">
                            <label htmlFor="qtdProduto">Quantidade do Produto</label>
                            <br />
                            <input 
                                type="number" 
                                id="qtdProduto" 
                                name="qtdProduto" 
                                placeholder="Digite a quantidade do produto"
                                min="1"
                                max="999999"
                                required 
                                value={this.state.produto.qtdProduto}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="produto-update">
                            <label htmlFor="categoria">Categoria do Produto</label>
                            <br />
                            <input 
                                type="text" 
                                id="categoria" 
                                name="categoria" 
                                placeholder="Digite a categoria do produto"
                                minLength="3" 
                                maxLength="100" 
                                required 
                                value={this.state.produto.categoria}
                                onChange={this.handleInputChange}
                            />    
                        </div>

                        <button type="submit">Atualizar</button>
                    </fieldset>
                </form>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            produto: {...prevState.produto, [name]: value}
        }));
    }

    handleSubmit = event => {
        const {id} = this.state.produto;

        fetch(`http://localhost:8080/produtos/${id}`, {
            method: 'put',
            body: JSON.stringify(this.state.produto),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => {
            if(data.ok){
                this.setState ({ redirect: true})
            }
        })

        event.preventDefault();
    };
}
export default EditarProduto;
