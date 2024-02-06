
export const getGollumQuote = async (url: string) => {

  try{ 
    const response = await fetch( url, {
      cache: 'force-cache',
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json();

    return data.docs;
  
  } catch(error) {
    console.error(`Error getting gollum quote: ${url}`, error );
    throw error;
  }
}

