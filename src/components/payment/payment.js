import React, { useState } from "react";
import Header from '../../components/header/header';
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Conteudo, Button, PaymentForm, RadioGroup, RadioLabel, Input, QRCodeContainer, CardDetailsForm } from './style';
import QRCode from 'qrcode.react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Payment() {
  const location = useLocation();
  const { id, titulo, descricao, data, local, valor, quantidade, total } = location.state;
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', cardHolder: '', expiryDate: '', cvv: '' });
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === 'pix') {
      setQrCodeValue(`PIX-${Math.random().toString(36).substring(2, 15)}`);
      setShowQRCode(true);
    } else {
      setShowQRCode(false);
    }
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentUser) {
        const userId = currentUser.uid;
        const compra = {
          id: id || '',
          titulo: titulo || '',
          descricao: descricao || '',
          data: data || '',
          local: local || '',
          valor: valor || 0,
          quantidade: quantidade || 1,
          total: total || 0,
          paymentMethod: paymentMethod || '',
          timestamp: new Date().toISOString()
        };

        console.log("Compra:", compra); // Adicionar log para verificar os valores

        const docRef = doc(db, 'users', userId);
        await updateDoc(docRef, {
          Compras: arrayUnion(compra)
        });

        alert(`Pagamento realizado com ${paymentMethod}`);
        navigate('/'); // Navegar para a página de conta do usuário
      } else {
        alert('Usuário não autenticado');
      }
    } catch (error) {
      console.error('Erro ao registrar compra: ', error.message);
      alert(`Erro ao registrar compra. Tente novamente. Erro: ${error.message}`);
    }
  };

  return (
    <Container>
      <Header />
      <Conteudo>
        <h1>Pagamento</h1>
        <p>Quantidade de ingressos: {quantidade}</p>
        <p className="total">Total: R$ {total.toFixed(2)}</p>
        <PaymentForm onSubmit={handleSubmit}>
          <RadioGroup>
            <RadioLabel>
              <Input
                type="radio"
                value="pagamento na hora"
                checked={paymentMethod === 'pagamento na hora'}
                onChange={handlePaymentMethodChange}
              />
              Pagamento na hora
            </RadioLabel>
            <RadioLabel>
              <Input
                type="radio"
                value="pix"
                checked={paymentMethod === 'pix'}
                onChange={handlePaymentMethodChange}
              />
              PIX
            </RadioLabel>
            <RadioLabel>
              <Input
                type="radio"
                value="cartão"
                checked={paymentMethod === 'cartão'}
                onChange={handlePaymentMethodChange}
              />
              Cartão de Crédito
            </RadioLabel>
          </RadioGroup>
          {showQRCode && (
            <QRCodeContainer>
              <QRCode value={qrCodeValue} />
              <p>Use o código QR acima para pagar com PIX.</p>
            </QRCodeContainer>
          )}
          {paymentMethod === 'cartão' && (
            <CardDetailsForm>
              <label>
                Número do Cartão:
                <Input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  required
                />
              </label>
              <label>
                Nome no Cartão:
                <Input
                  type="text"
                  name="cardHolder"
                  value={cardDetails.cardHolder}
                  onChange={handleCardDetailsChange}
                  required
                />
              </label>
              <label>
                Data de Validade:
                <Input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardDetailsChange}
                  required
                />
              </label>
              <label>
                CVV:
                <Input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  required
                />
              </label>
            </CardDetailsForm>
          )}
          <Button type="submit">Pagar</Button>
        </PaymentForm>
      </Conteudo>
    </Container>
  );
}

export default Payment;
