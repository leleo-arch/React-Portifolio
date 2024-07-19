import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.section`
  padding: 50px 0;
  background: #ffffff;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 30px;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #282c34;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #3a3f47;
  }
`;

function ContactForm() { return (
  <FormWrapper id="contact">
    <FormTitle>Contato</FormTitle>
    <Form>
      <Input type="text" placeholder="Nome" required />
      <Input type="email" placeholder="Email" required />
      <Textarea placeholder="Mensagem" rows="5" required />
      <Button type="submit">Enviar</Button>
    </Form>
  </FormWrapper>

)};

export default ContactForm;

