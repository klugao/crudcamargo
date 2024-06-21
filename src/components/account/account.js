import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Conteudo, EditButton, Form, Input, Label, SaveButton, AdminButton } from './style';
import Header from '../header/header';
import { useAuth } from '../../contexts/AuthContext';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account() {
  const { currentUser } = useAuth();
  const [compras, setCompras] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: '', birthDate: '', address: '', cpf: '' });
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     if (currentUser) {
  //       const docRef = doc(db, 'users', currentUser.uid);
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         setUserInfo(docSnap.data());
  //       }
  //     }
  //   };

  //   const fetchCompras = async () => {
  //     if (currentUser) {
  //       const q = query(collection(db, 'compras'), where('userId', '==', currentUser.uid));
  //       const querySnapshot = await getDocs(q);
  //       const comprasList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //       setCompras(comprasList);
  //     }
  //   };

  //   fetchUserInfo();
  //   fetchCompras();
  // }, [currentUser]);

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
      const docRef = doc(db, 'users', currentUser.uid);
      await updateDoc(docRef, userInfo);
      setEditMode(false);
      alert('Informações atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar informações: ', error);
      alert('Erro ao atualizar informações. Tente novamente.');
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
              <Input type="text" name="name" value={userInfo.name} onChange={handleChange} required />
            </Label>
            <Label>
              Data de Nascimento:
              <Input type="date" name="birthDate" value={userInfo.birthDate} onChange={handleChange} required />
            </Label>
            <Label>
              Endereço:
              <Input type="text" name="address" value={userInfo.address} onChange={handleChange} required />
            </Label>
            <Label>
              CPF:
              <Input type="text" name="cpf" value={userInfo.cpf} onChange={handleChange} required />
            </Label>
            <SaveButton type="submit">Salvar</SaveButton>
          </Form>
        ) : (
          <>
            <p><strong>Nome:</strong> {userInfo.name}</p>
            <p><strong>Data de Nascimento:</strong> {userInfo.birthDate}</p>
            <p><strong>Endereço:</strong> {userInfo.address}</p>
            <p><strong>CPF:</strong> {userInfo.cpf}</p>
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
            {compras.map(compra => (
              <li key={compra.id}>
                <p>Quantidade: {compra.quantidade}</p>
                <p>Total: R$ {compra.total.toFixed(2)}</p>
                <p>Método de Pagamento: {compra.paymentMethod}</p>
                <p>Data da Compra: {new Date(compra.timestamp.seconds * 1000).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </Conteudo>
    </Container>
  );
}

export default Account;
