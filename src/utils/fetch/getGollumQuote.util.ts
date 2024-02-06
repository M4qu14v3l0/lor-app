
export const getGollumQuote = async (id: string) => {

  try{ 
    const response = await fetch( `https://the-one-api.dev/v2/quote/${id}`, {
      cache: 'force-cache',
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json();
    return data.docs[0];
  
  } catch(error) {
    console.error(`Error getting gollum quote: https://the-one-api.dev/v2/quote/${id}`, error );
    throw error;
  }
}

