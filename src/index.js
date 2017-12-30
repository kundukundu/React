import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="Rita" />
    <h2>Vamos comer!!!!{'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));