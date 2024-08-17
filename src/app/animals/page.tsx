import Image from "next/image";
import styles from "./animals.module.css"

type AnimalsProps = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

export default async function Animals() {
  const response = await fetch("https://api.origamid.online/animais", {
    cache: 'no-store'
  });
  const animals: AnimalsProps[] = await response.json();
  return (
    <div>
      <h1>Animals</h1>
      <ul className={styles.animals}>
        {
          animals.map((a, i) => (
            <li key={i}>
              {a.nome}
              <Image
                src={a.imagem}
                alt={a.descricao}
                width={2400}
                height={1600}
                sizes="(max-width : 600px) 100vw, 50vw"
                quality={75}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}