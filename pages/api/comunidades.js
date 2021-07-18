import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests (request, response ) {

  if (request.method === 'POST') {
    const TOKEN = 'de1eefefedb0912e2f83ec237b5958';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({

      itemType: "975995",
      ...request.body,
      
    })

    response.json({
      dados: 'Algum dado',
      registroCriado: registroCriado,
    })

    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no Get, mas no POST tem'
  })
}