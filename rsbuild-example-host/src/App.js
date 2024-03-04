import './App.css';
import {MantineProvider} from '@mantine/core';
import {Claimable} from "./Claimable";
import React from 'react';

const App = () => {
  return (
    <MantineProvider>
    <div className="content">
      <h1>Cat Cards</h1>
      <div>
        <h2>Claimable cards</h2>
          <Claimable />
      </div>
    </div>
    </MantineProvider>
  );
};

export default App;
