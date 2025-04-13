import Link from 'next/link';
import { CSSProperties } from 'react';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.titleCode}>4<a style={styles.zeroStyle}>0</a>4</div>
      <div style={styles.message}>Tidak Ditemukan, sama seperti perasaan dia ke aku :(</div>
      <Link href="/">
        <button style={styles.button}>Kembali ke Halaman</button>
      </Link>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const,
  },
  titleCode: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: 'black',
  },
  zeroStyle: {
    color: '#6366f1',
  },
  message: {
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
  button: {
    marginTop: '2rem',
    padding: '0.8rem 2rem',
    backgroundColor: '#6366f1',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};
