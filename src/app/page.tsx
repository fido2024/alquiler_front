// app/page.tsx
'use client'; // Necesario para usar 'Link' y 'useRouter'

import Link from 'next/link';

// Estilos simples para los botones (puedes cambiarlos)
const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '20px 40px',
  margin: '20px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '#1366FD', // Usando tu color 'confirmed'
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  textDecoration: 'none', // Para que el Link no se vea subrayado
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Ocupa toda la altura
  textAlign: 'center',
  fontFamily: 'sans-serif',
};

export default function HomePage() {
  return (
    <main style={containerStyle}>
      {/* Puedes cambiar este saludo */}
      <h1>Bienvenido, QA</h1>
      <p>Selecciona la vista que quieres probar:</p>
      <div>
        <Link 
          href="/epic_VisualizadorDeTrabajosAgendadosVistaCliente" 
          style={buttonStyle}
        >
          Ir a Vista Cliente
        </Link>
        
        <Link 
          href="/epic_VisualizadorDeTrabajosAgendadosVistaProveedor" 
          style={buttonStyle}
        >
          Ir a Vista Proveedor
        </Link>
      </div>
    </main>
  );
}