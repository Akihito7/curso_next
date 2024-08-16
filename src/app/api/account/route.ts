export async function POST(request : Request) { 
  const { token } = await request.json();
if (!token) return Response.json({
    status: "Error",
    statusCode: '400',
    message: "Token inválido"
  });

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const account = await response.json();

  return Response.json({
    account,
  }) 
}