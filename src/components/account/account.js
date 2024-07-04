import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Conteudo, EditButton, Form, Input, Label, SaveButton, AdminButton } from './style';
import Header from '../header/header';
import { useAuth } from '../../contexts/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account() {
  const { currentUser } = useAuth();
  const [compras, setCompras] = useState([]);
  const [userInfo, setUserInfo] = useState({ Nome: '', Nascimento: '', Endereco: '', Cpf: '', Compras: [], userId: '' });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
          setCompras(docSnap.data().Compras || []);
        }
      }
    };

    fetchUserInfo();
  }, [currentUser]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const userId = currentUser.uid;
      const updatedUserInfo = {
        ...userInfo,
        Cpf: Number(userInfo.Cpf),
        userId: userId,
      };
      console.log("Current User ID:", userId);
      console.log("User Info to Save:", updatedUserInfo);
      const docRef = doc(db, 'users', userId);
      await setDoc(docRef, updatedUserInfo);
      setEditMode(false);
      alert('Informações atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar informações: ', error.message);
      alert(`Erro ao atualizar informações. Tente novamente. Erro: ${error.message}`);
    }
  };

  return (
    <Container>
      <Header />
      <Conteudo>
        <h1>Minha Conta</h1>
        {editMode ? (
          <Form onSubmit={handleSave}>
            <Label>
              Nome:
              <Input type="text" name="Nome" value={userInfo.Nome} onChange={handleChange} required />
            </Label>
            <Label>
              Data de Nascimento:
              <Input type="date" name="Nascimento" value={userInfo.Nascimento} onChange={handleChange} required />
            </Label>
            <Label>
              Endereço:
              <Input type="text" name="Endereco" value={userInfo.Endereco} onChange={handleChange} required />
            </Label>
            <Label>
              CPF:
              <Input type="text" name="Cpf" value={userInfo.Cpf} onChange={handleChange} required />
            </Label>
            <SaveButton type="submit">Salvar</SaveButton>
          </Form>
        ) : (
          <>
            <p><strong>Nome:</strong> {userInfo.Nome}</p>
            <p><strong>Data de Nascimento:</strong> {userInfo.Nascimento}</p>
            <p><strong>Endereço:</strong> {userInfo.Endereco}</p>
            <p><strong>CPF:</strong> {userInfo.Cpf}</p>
            <EditButton onClick={handleEdit}>Editar Informações</EditButton>
          </>
        )}
        <Link to="/admin">
          <AdminButton>Painel Admin</AdminButton>
        </Link>
        <h2>Ingressos Comprados</h2>
        {compras.length === 0 ? (
          <p>Você não possui ingressos comprados.</p>
        ) : (
          <ul>
            {compras.map((compra, index) => (
              <li key={index}>
                <p>Título: {compra.titulo}</p>
                <p>Quantidade: {compra.quantidade}</p>
                <p>Total: R$ {compra.total.toFixed(2)}</p>
                <p>Data: {new Date(compra.data).toLocaleDateString()}</p>
                <p>Local: {compra.local}</p>
              </li>
            ))}
          </ul>
        )}
      </Conteudo>
    </Container>
  );
}

export default Account;
