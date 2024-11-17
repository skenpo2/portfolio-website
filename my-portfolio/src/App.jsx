import { useState } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';

const App = () => {
  const [current, setCurrent] = useState(0);
  return (
    <main className="main">
      <Nav currentItem={current} setCurrentItem={setCurrent} />
      <Hero />
    </main>
  );
};

export default App;
