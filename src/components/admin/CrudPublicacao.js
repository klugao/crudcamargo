import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Form, Label, Input, TextArea, Button, List, ListItem, CreateButton } from './style'; // Verifique o caminho
import Publicacao from '../EventFeed/publicacao'; // Ajuste o caminho conforme necessário
import Header from '../../components/header/header'

function Publicacoes() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState(null);
  const [publicacoes, setPublicacoes] = useState([]);
  const [editando, setEditando] = useState(false);
  const [idAtual, setIdAtual] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

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
    try {
      if (imagem) {
        imageUrl = await handleImageUpload(imagem);
      }
      const publicacaoData = {
        Titulo: titulo,
        Descricao: descricao,
        Data: data,
        Local: local,
        Valor: parseFloat(valor),
        ImageUrl: imageUrl
      };

      if (editando) {
        const docRef = doc(db, "Publicacoes", idAtual);
        await updateDoc(docRef, publicacaoData);
        alert('Publicação atualizada com sucesso!');
        setEditando(false);
        setIdAtual(null);
      } else {
        await addDoc(collection(db, "Publicacoes"), publicacaoData);
        alert('Publicação criada com sucesso!');
      }
      fetchPublicacoes();
      resetForm();
      setFormVisible(false);
    } catch (error) {
      console.error("Erro ao salvar publicação: ", error);
      alert('Erro ao salvar publicação: ' + error.message);
    }
  };

  const fetchPublicacoes = async () => {
    const publicacoesCollection = collection(db, "Publicacoes");
    const publicacoesSnapshot = await getDocs(publicacoesCollection);
    const publicacoesList = publicacoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPublicacoes(publicacoesList);
  };

  const handleEdit = (pub) => {
    setEditando(true);
    setIdAtual(pub.id);
    setTitulo(pub.Titulo);
    setDescricao(pub.Descricao);
    setLocal(pub.Local);
    setData(pub.Data);
    setValor(pub.Valor);
    setImagem(null); // Não queremos manter a imagem antiga no estado
    setFormVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Publicacoes", id));
      alert('Publicação deletada com sucesso!');
      fetchPublicacoes();
    } catch (error) {
      console.error("Erro ao deletar publicação: ", error);
      alert('Erro ao deletar publicação!');
    }
  };

  const resetForm = () => {
    setTitulo('');
    setDescricao('');
    setLocal('');
    setData('');
    setValor('');
    setImagem(null);
  };

  const handleCreateClick = () => {
    resetForm();
    setEditando(false);
    setFormVisible(true);
  };

  useEffect(() => {
    fetchPublicacoes();
  }, []);

  return (
    <div>

      <Header></Header>
      <CreateButton onClick={handleCreateClick}>Criar Publicação</CreateButton>
      
      {formVisible && (
        <Form onSubmit={handleSubmit}>
          <h2>{editando ? 'Atualizar Publicação' : 'Criar Publicação'}</h2>
          <Label>
            Título:
            <Input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </Label>
          <Label>
            Descrição:
            <TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
          </Label>
          <Label>
            Data:
            <Input type="text" placeholder="dd/MM/yyyy" value={data} onChange={(e) => setData(e.target.value)} required />
          </Label>
          <Label>
            Local:
            <Input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required />
          </Label>
          <Label>
            Valor (R$):
            <Input type="number" placeholder="9.999,99" value={valor} onChange={(e) => setValor(e.target.value)} required />
          </Label>
          <Label>
            Imagem:
            <Input type="file" onChange={handleImageChange} />
          </Label>
          <Button type="submit">{editando ? 'Atualizar Publicação' : 'Criar Publicação'}</Button>
        </Form>
      )}

      <List>
        <h2>Publicações</h2>
        {publicacoes.map((pub) => (
          <ListItem key={pub.id}>
            <Publicacao 
              id={pub.id}
              titulo={pub.Titulo}
              descricao={pub.Descricao}
              data={pub.Data}
              local={pub.Local}
              valor={pub.Valor}
              imageUrl={pub.ImageUrl}
            />
            <div>
              <Button onClick={() => handleEdit(pub)}>Editar</Button>
              <Button onClick={() => handleDelete(pub.id)}>Excluir</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Publicacoes;
