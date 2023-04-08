import { useEffect, useState } from 'react';
import Heading from './Components/Heading';
import List from './Components/List';

function App() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="pb-20 bg-zinc-900 min-h-screen px-4">
      <Heading
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
      />
      <List
        search={search}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
