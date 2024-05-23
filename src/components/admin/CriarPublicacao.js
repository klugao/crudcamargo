import React, { useState } from 'react';
import { db } from '../../index'; // Certifique-se de que o caminho para firebase-config está correto
import { collection, addDoc } from 'firebase/firestore';
import { Form, Label, Input, TextArea, Button } from './style'; // Ajuste o caminho conforme necessário

function CriarPublicacao() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Publicacoes"), {
        Titulo: titulo,
        Descricao: descricao,
        Local: local,
        Valor: parseFloat(valor)
      });
      alert('Publicação criada com sucesso!');
      // Limpa o formulário
      setTitulo('');
      setDescricao('');
      setLocal('');
      setValor('');
    } catch (error) {
      console.error("Erro ao adicionar publicação: ", error);
      alert('Erro ao criar publicação!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Criar Publicação</h2>
      <Label>
        Título:
        <Input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      </Label>
      <Label>
        Descrição:
        <TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </Label>
      <Label>
        Local:
        <Input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required />
      </Label>
      <Label>
        Valor (R$):
        <Input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
      </Label>
      <Button type="submit">Criar Publicação</Button>
    </Form>
  );
}

export default CriarPublicacao;
