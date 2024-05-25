export async function getLocation(lat: number, lon: number) {
    try {
        const res = await fetch(`/api/geolocation?lat=${lat}&lon=${lon}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
  }