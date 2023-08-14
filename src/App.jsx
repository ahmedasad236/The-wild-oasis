import { styled } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import Input from './ui/Input';
import Button from './ui/Button';
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Button>Check-in</Button>
        <Input
          placeholder="number of guests"
          type="number"
        />
      </div>
    </>
  );
}

export default App;
