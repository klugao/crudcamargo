import React from 'react';
// Publicacao.js

function Publicacao({ titulo, descricao, local, valor }) {
  return (
    <div style={{ margin: '10px', padding: '20px', border: '1px solid #ccc' }}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>{`Local: ${local}`}</p>
      <p>{`Valor: R$ ${valor.toFixed(2)}`}</p>
    </div>
  );
}

export default Publicacao;
