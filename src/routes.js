import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainProduto from './pages/usuario/main';
import DetalhesProduto from './pages/usuario/detalhes';
import CriarProduto from './pages/usuario/criar';
import EditarProduto from './pages/usuario/editar';
import DeletarProduto from './pages/usuario/deletar';



const Routes = () => (
    <BrowserRouter>
        <Switch>

            <Route exact path="/" component={MainProduto}/>
            <Route path= "/produtos/:id" component={DetalhesProduto}/>
            <Route path="/cadastroProduto" component={CriarProduto} />
            <Route path="/editarProduto/:id" component={EditarProduto} />
            <Route path="/deletarProduto/:id" component={DeletarProduto} />

        </Switch>
    </BrowserRouter>
)

export default Routes;
