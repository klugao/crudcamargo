import React from "react";
import { Container } from './style';

function Publicacao({ titulo, descricao, local, valor, imageUrl }) {
  return (
    <Container>

      <div className="box-img">
        <img src={imageUrl} alt="Publicação" />
      </div>

      <div className="box-info">
        <div className="titulo">
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>

        <div className="infos">
          <p>Local: <strong>{`${local}`}</strong></p>
          <p className="preco">{`Valor: R$ ${valor.toFixed(2)}`}</p>
          <button>Ver mais</button>
        </div>
      </div>
      
    </Container>
  );
}

export default Publicacao;
