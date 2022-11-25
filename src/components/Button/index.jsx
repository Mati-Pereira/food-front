import { Container } from './styles';

function Button({ text, icon, icon: Icon }) {
  return (
    <Container>
      {icon && <Icon name={icon} />}
      <span>{text}</span>
    </Container>
  );
}

export default Button;
