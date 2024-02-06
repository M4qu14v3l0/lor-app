export const getDataCharacterByRace = async (param: string) => {

  try{
    
    const response = await fetch(`https://the-one-api.dev/v2/character?race=${param}&page=1`, {
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
    console.error(`Error getting filtered characters from: https://the-one-api.dev/v2/character?race=${param}`, error );
    throw error;
  }

}
