import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaSyncAlt, FaCopy } from 'react-icons/fa'; // Import icons
import './App.css';

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App: React.FC = () => {
  const [uuid, setUuid] = useState<string>('');
  const [accentColor, setAccentColor] = useState<string>(getRandomColor());

  useEffect(() => {
    generateUUID();
  }, []);

  const generateUUID = () => {
    setUuid(uuidv4());
    setAccentColor(getRandomColor());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid);
    alert('UUID copied to clipboard!');
  };

  return (
    <div className="App">
      <div className="uuid-container" style={{ borderColor: accentColor }}>
        <p className="uuid" style={{ color: accentColor }}>
          {uuid}
        </p>
      </div>
      <div className="buttons">
        <button onClick={generateUUID} style={{ backgroundColor: accentColor }}>
          Refresh <div className="icon-container"><FaSyncAlt color={accentColor} /></div>
        </button>
        <button onClick={copyToClipboard} style={{ backgroundColor: accentColor }}>
          Copy <div className="icon-container"><FaCopy color={accentColor} /></div>
        </button>
      </div>
    </div>
  );
};

export default App;
