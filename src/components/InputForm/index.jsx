import { Container } from './styles';

function Input({ label, placeholder, ...rest }) {
  return (
    <Container>
      <label htmlFor="form">
        {label}
        <input id="form" type="text" {...rest} placeholder={placeholder} />
      </label>
    </Container>
  );
}

export default Input;
