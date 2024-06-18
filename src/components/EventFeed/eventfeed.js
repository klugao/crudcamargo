import React, { useState, useEffect } from 'react';
import { db } from '../../index';
import { collection, getDocs } from 'firebase/firestore';
import Publicacao from './publicacao';


function EventFeed() {
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    const fetchPublicacoes = async () => {
      const publicacoesCol = collection(db, "Publicacoes");
      const publicacoesSnapshot = await getDocs(publicacoesCol);
      const publicacoesList = publicacoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPublicacoes(publicacoesList);
    };

    fetchPublicacoes();
  }, []);

  return (
    <div>
      {publicacoes.map(pub => (
        <Publicacao key={pub.id} titulo={pub.Titulo} descricao={pub.Descricao} local={pub.Local} valor={pub.Valor} />
      ))}
    </div>
  );
}

export default EventFeed;
