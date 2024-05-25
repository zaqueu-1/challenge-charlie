import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  try {
    const response = await fetch(`https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US`)
    const data = await response.json()
  
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Error getting background' })
  }
}


