import { styled } from 'styled-components';
import GlobalStyles from './styles/globalStyles';

const Button = styled.button`
  color: aliceblue;
  background-color: blueviolet;
  border: none;
  padding: 0.8rem 1.2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Button>Check-in</Button>
      </div>
    </>
  );
}

export default App;
