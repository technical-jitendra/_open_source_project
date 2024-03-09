import React from 'react';
import Team from './Team';

const App = () => {
  const teamData = [
    { name: 'jitendra kumar', photoUrl: '' },
    { name: 'Jane Smith', photoUrl: 'jane.jpg' },
    { name: 'Jane Smith', photoUrl: 'jane.jpg' },

    // Add more team members here
  ];

  return (
    <div className="app">
      <h1>Our Team</h1>
      <Team teamData={teamData} />
    </div>
  );
};

export default App;

