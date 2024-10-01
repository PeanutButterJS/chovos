import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { styled } from "../../styled-system/jsx";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chovos",
};

const Header = styled.header`
  padding: 0;
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
  color: black;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 30px;
    font-size: 1.3rem;
  }
`;

const Main = styled.main`
  padding-top: 60px;
  min-height: calc(100vh);
`;

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="he" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
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
};

export default RootLayout;
