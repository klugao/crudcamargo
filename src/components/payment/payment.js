import React, { useState } from "react";
import Header from '../../components/header/header'
import { useLocation } from "react-router-dom";
import { Container, Conteudo, Button, PaymentForm, RadioGroup, RadioLabel, Input, QRCodeContainer, CardDetailsForm } from './style'; // Certifique-se de que o caminho está correto
import QRCode from 'qrcode.react';

function Payment() {
  const location = useLocation();
  const { quantidade, total } = location.state;
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', cardHolder: '', expiryDate: '', cvv: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de processamento de pagamento aqui
    alert(`Pagamento realizado com ${paymentMethod}`);
  };

  return (
    <Container>
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
