'use client';

import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Layout from './layout';
import { musics } from './dados/music';

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <Layout>
      <div className="container">
        {/* Barra lateral */}
        <div className="sidebar">
          <h2>Lista de Músicas</h2>
          <ul>
            {musics.map((music, index) => (
              <li key={index} className={playing && index === 0 ? 'playing' : ''}> 
                <h3>{music.name}</h3>
                <p><strong>Autor:</strong> {music.author}</p>
                <p><strong>Descrição:</strong> {music.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Controle de Play/Pause */}
        <div className="content">
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px', color: '#f5f5f5' }}>
            {playing ? (
              <>
                <FaPause style={{ marginRight: '8px', color: '#f5f5f5' }} /> 
                <span style={{ color: '#f5f5f5' }}>Executando</span> 
              </>
            ) : (
              <>
                <FaPlay style={{ marginRight: '8px', color: '#f5f5f5' }} />
                <span style={{ color: '#f5f5f5' }}>Pausado</span> 
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
              backgroundColor: playing ? '#ff4d4d' : '#4CAF50', 
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'background-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = playing ? '#e60000' : '#45a049')} 
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = playing ? '#ff4d4d' : '#4CAF50')} 
          >
            {playing ? 'PAUSE' : 'PLAY'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          background-color: #333; /* Fundo escuro */
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .sidebar {
          width: 25%;
          background-color: #444;
          padding: 20px;
          color: #fff;
        }
        .sidebar h2 {
          margin-bottom: 20px;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar li {
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #555;
          border-radius: 8px;
          transition: background-color 0.3s;
        }
        .sidebar li.playing {
          background-color: #1e88e5; /* Destaque para a música tocando */
        }
        .content {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
}
