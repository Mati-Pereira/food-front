/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import { Container, Content, Form } from './styles';

function Signin() {
  return (
    <Container>
      <Logo />
      <Content>
        <h1>Crie sua conta</h1>
        <Form>
          <Input
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
          <Button text="Entrar" />
        </Form>
        <a href="#">Já tenho uma conta</a>
      </Content>
    </Container>
  );
}

export default Signin;
