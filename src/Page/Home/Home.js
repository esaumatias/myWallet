import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <Link to='despesa'>Despesa</Link>
      <Link to='dashboard'>Dashboard</Link>
    </section>
  )
}

export default Home;
