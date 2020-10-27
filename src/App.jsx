import React from 'react'
import "./App.css"

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalIf'

export default (props) => (
    <div className="App">

        <Card titulo="#06 Condicional Com If">
            <CondicionalComIf numero = {11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 Condicional">
            <Condicional numero={9}></Condicional>
        </Card>

        <Card titulo="#04 Repetição">
            <Repeticao/>
        </Card>

        <Card titulo="#03 Componete com filho">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carla</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 Componente com Parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtitulo" />
        </Card>

        <Card titulo="# 01 Primeiro componente">
            <Primeiro />
        </Card>

        <Card titulo="Exercício">
            Conteudo
        </Card>

    </div>
)
