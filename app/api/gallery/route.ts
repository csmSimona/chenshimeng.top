import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery')
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'])

export async function GET() {
  try {
    const entries = await readdir(GALLERY_DIR, { withFileTypes: true })
    const urls = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((name) => `/gallery/${name}`)

    return NextResponse.json({ urls })
  } catch {
    return NextResponse.json({ urls: [] }, { status: 200 })
  }
}
