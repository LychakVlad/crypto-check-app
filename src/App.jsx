import { useEffect, useState } from 'react';
import Heading from './Components/Heading';
import List from './Components/List';

function App() {
  return (
    <div className="pb-20 bg-zinc-900">
      <Heading />
      <List />
    </div>
  );
}

export default App;
