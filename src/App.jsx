import GlobalStyles from './styles/globalStyles';
import Input from './ui/Input';
import Button from './ui/Button';
import Heading from './ui/Heading';
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as="h1">Heading 1</Heading>
        <Heading as="h2">Heading 2</Heading>

        <Heading as="h3">Heading 3</Heading>

        <Button
          variation="primary"
          size="small"
        >
          Check-in
        </Button>
        <Input
          placeholder="number of guests"
          type="number"
        />
      </div>
    </>
  );
}

export default App;
