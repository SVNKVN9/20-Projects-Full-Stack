import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    return Response.json({ message: `Hello, ${id}` })
}

export async function POST(req: Request) {
    const json = await req.json()

    return Response.json({ message: `Hello, ${json.message}` })
}