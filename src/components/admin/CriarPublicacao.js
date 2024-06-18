import React, { useState } from 'react';
import { db, storage } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Form, Label, Input, TextArea, Button } from './style'; // Verifique o caminho

function CriarPublicacao() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleImageChange = (e) => {
    setImagem(e.target.files[0]); // Assume que apenas um arquivo é selecionado
  };

  const handleImageUpload = async (imageFile) => {
    const storageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
    const uploadResult = await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(uploadResult.ref);
    return imageUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (imagem) {
      imageUrl = await handleImageUpload(imagem);
    }
    try {
      await addDoc(collection(db, "Publicacoes"), {
        Titulo: titulo,
        Descricao: descricao,
        Local: local,
        Valor: parseFloat(valor),
        ImageUrl: imageUrl // Guarda URL da imagem
      });
      alert('Publicação criada com sucesso!');
      setTitulo('');
      setDescricao('');
      setLocal('');
      setValor('');
      setImagem(null);
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
      <Label>
        Imagem:
        <Input type="file" onChange={handleImageChange} required />
      </Label>
      <Button type="submit">Criar Publicação</Button>
    </Form>
  );
}

export default CriarPublicacao;
