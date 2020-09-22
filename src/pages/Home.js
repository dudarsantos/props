import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Selecione uma das opções abaixo:</h1>

            <button href="https://vendavinhos-backend.herokuapp.com/clients">
                Clientes com maior valor em compras
            </button>
            <button href="https://vendavinhos-backend.herokuapp.com/clientsOrderedByPurchase">
                Cliente com maior compra única em 2016
            </button>
            <button href="https://vendavinhos-backend.herokuapp.com/bestClient">
                Nossos 3 clientes mais fiéis
            </button>
            <button href="https://vendavinhos-backend.herokuapp.com/recommendWine/:client">
                Uma recomendação de vinho
            </button>
        </div>
    )
}

export default Home;
