
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  try {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.OPENCAGE_API_KEY}&q=${lat}+${lon}&lang=pt_br`)
    const data = await response.json()
  
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving location' })
  }
}


