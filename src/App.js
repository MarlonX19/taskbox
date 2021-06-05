import logo from './logo.svg';
import './App.css';
import './App.css';
import { Button } from './stories/Button';

function App() {

  const onClick = () => {
    alert('On click')
  }

  const onMouseLeave = () => {
    alert('onMouseLeave!')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#fff' }}>
      <Button
        primary={true}
        label='Procurar voo'
        size='large'
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
}

export default App;
