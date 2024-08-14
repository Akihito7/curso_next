import "./globals.css";

import type { Metadata } from "next";
import { Menu } from "./components/menu";

export const metadata: Metadata = {
  title: "Home",
  description: "Curso Next js Origamid",
};

/* 
Pra definir o metadata da página você deve exportar uma const com exatamente o nome metadata
que deve conter um objeto com as propriedades dos metadata que você quer definir.
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}

/* 
Layout basicamente é algo que vai ser compartilhado entre diferentes páginas,
nesse caso usei o componente menu pra dar um exemplo e fixar a ideia.
*/


/* 
O next não usa nenhuma lib pra cuidar das rotas como no react js,
tudo o que deve ser feito é adicionar uma pasta na raiz da pasta app
e dentro da pasta você deve ter um arquivo com o nome page.tsx ou page.js

exemplo
src/app/about/page.tsx
*/
