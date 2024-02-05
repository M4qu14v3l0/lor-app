export const Fetch = async (url: string) => {
  const res = await fetch(url, {
    cache: 'force-cache',
    method: 'get',
    headers: {
      Authorization: 'Bearer So9uTg0IqPSaP4scOy8O',
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()

  return { data }
}
