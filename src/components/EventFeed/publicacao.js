import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from './style'; // Verifique o caminho

function Publicacao({ id, titulo, descricao, data, local, valor, imageUrl }) {
  const [quantidade, setQuantidade] = useState(1);
  const navigate = useNavigate();

  const handleQuantidadeChange = (e) => {
    setQuantidade(Number(e.target.value));
  };

  const handleComprarClick = () => {
    navigate(`/pagamento/${id}`, {
      state: {
        id: id || '',
        titulo: titulo || '',
        descricao: descricao || '',
        data: data || '',
        local: local || '',
        valor: valor || 0,
        quantidade: quantidade || 1,
        total: quantidade * valor || 0
      }
    });
  };

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
          <p>Data: <strong>{data}</strong></p>
          <p>Local: <strong>{local}</strong></p>
          <p className="preco">{`Valor: R$ ${valor.toFixed(2)}`}</p>
          <br></br>
          <br></br>
          <div className="quantidade">
            <label htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              min="1"
              value={quantidade}
              onChange={handleQuantidadeChange}
            />
            <p>Total: R$ {(quantidade * valor).toFixed(2)}</p>
          </div>
          <button onClick={handleComprarClick}>Comprar</button>
        </div>
      </div>
    </Container>
  );
}

export default Publicacao;
