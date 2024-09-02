import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Meu Aplicativo</title>
      </head>
      <body style={{ margin: '0 auto', padding: '0'}}>
        <div style={{ margin: '0 auto', maxWidth: '100%'}}>
          <header>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
