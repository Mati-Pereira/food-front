import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import { Container, Content, Form } from './styles';

function Signin() {
  return (
    <Container>
      <Logo />
      <Content>
        <h1>Faça login</h1>
        <Form>
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
          <Input
            label="Senha"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="password"
          />
          <Button text="Entrar" />
        </Form>
      </Content>
    </Container>
  );
}

export default Signin;
