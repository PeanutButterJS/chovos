/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { styled } from '../../styled-system/jsx';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chovos'
};

/* const header = css({
  position: 'fixed',
  top: 0,
  zIndex: 3,
  display: 'flex',
  height: '80px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  padding: '10px 20px',
  fontSize: '3rem',
  fontWeight: 700,
  color: 'token(colors.text.primary)',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '@media (max-width: 768px)': {
    height: 30,
    fontSize: '1.3rem'
  }
}); */

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px;
  font-size: 3rem;
  font-weight: 700;
  color: token(colors.text.primary);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 50px;
    font-size: 1.5rem;
  }
`;

const Main = styled.main`
  position: relative;
  top: 80px;
  transition: all 0.3s ease-in-out;
  min-height: calc(100vh - 80px);
  padding: 15px;
  @media (max-width: 768px) {
    top: 50px;
    min-height: calc(100vh - 50px);
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body className={`body ${rubik.className}`}>
        <Header className="header">
          <Link href="/">Chovos</Link>
        </Header>
        <Main className="main">{children}</Main>
      </body>
    </html>
  );
}
