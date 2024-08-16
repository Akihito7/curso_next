type ActionProps = {
  simbolo: string;
  atualizada: string;
}

export default async function Action() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 10
    }
  });
  const action: ActionProps = await response.json();
  return (
    <div>
      <h1>{action.simbolo}</h1>
      <p>{action.atualizada}</p>
    </div>
  )
}