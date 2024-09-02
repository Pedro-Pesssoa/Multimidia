'use client';

import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Layout from './layout';

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <Layout>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>
          {playing ? (
            <>
              <FaPause style={{ marginRight: '8px' }} />
              <span>Executando</span>
            </>
          ) : (
            <>
              <FaPlay style={{ marginRight: '8px' }} />
              <span>Pausado</span>
            </>
          )}
        </div>
        <button
          onClick={() => setPlaying(!playing)}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#1e88e5', 
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'background-color 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1565c0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e88e5')}
        >
          PLAY
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh; 
          text-align: center;
          background-color: #90caf9; 
          margin: 0;
          padding: 0;
          width: 100%;
        }
      `}</style>
    </Layout>
  );
}
