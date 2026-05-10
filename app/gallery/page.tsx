'use client'
import * as THREE from 'three'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { Home as HomeIcon, Book, Code, Image as ImageIcon, Earth } from 'lucide-react'
import { proxy, useSnapshot } from 'valtio'
import { easing } from 'maath'
import { Button } from '@/components/ui/button'

const minimapMaterial = new THREE.MeshBasicMaterial({ color: 'white' })
const minimapGeometry = new THREE.BoxGeometry(0.01, 1, 0.01)
const BOOK_COVER_ASPECT = 5 / 7
const navigationButtonClass =
  'blog-button flex items-center gap-1 rounded-full !px-2.5 !py-2 text-xs text-white hover:text-primary sm:gap-2 sm:!px-4 sm:text-sm'

type GalleryImageMesh = THREE.Mesh & {
  material: THREE.MeshBasicMaterial & {
    grayscale: number
    scale: THREE.Vector2
  }
}

const galleryState = proxy<{
  clicked: number | null
  urls: string[]
}>({
  clicked: null,
  urls: [],
})

function Minimap() {
  const ref = useRef<THREE.Group>(null)
  const scroll = useScroll()
  const { urls } = useSnapshot(galleryState)
  const { height } = useThree((s) => s.viewport)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      easing.damp(child.scale, 'y', 0.15 + y / 6, 0.15, delta)
    })
  })

  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <mesh
          key={i}
          geometry={minimapGeometry}
          material={minimapMaterial}
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  )
}

function Item({
  index,
  position,
  scale,
  ...props
}: {
  index: number
  position: [number, number, number]
  scale: [number, number]
  url: string
}) {
  const ref = useRef<GalleryImageMesh>(null)
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(galleryState)
  const [hovered, hover] = useState(false)
  const click = () => (galleryState.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hovered])

  useFrame((_, delta) => {
    if (!ref.current) return
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    const expandedHeight = 5
    const expandedWidth = expandedHeight * BOOK_COVER_ASPECT
    const sideOffset = Math.max(0, (expandedWidth - scale[0]) / 2)

    easing.damp3(
      ref.current.scale,
      clicked === index ? [expandedWidth, expandedHeight, 1] : [scale[0], 4 + y, 1],
      0.15,
      delta,
    )

    ref.current.material.scale.x = ref.current.scale.x
    ref.current.material.scale.y = ref.current.scale.y

    if (clicked !== null && index < clicked) easing.damp(ref.current.position, 'x', position[0] - sideOffset, 0.15, delta)
    if (clicked !== null && index > clicked) easing.damp(ref.current.position, 'x', position[0] + sideOffset, 0.15, delta)
    if (clicked === null || clicked === index) easing.damp(ref.current.position, 'x', position[0], 0.15, delta)

    easing.damp(ref.current.material, 'grayscale', hovered || clicked === index ? 0 : Math.max(0, 1 - y), 0.15, delta)
    easing.dampC(ref.current.material.color, hovered || clicked === index ? 'white' : '#aaa', hovered ? 0.3 : 0.15, delta)
  })

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- This is a drei canvas image, not an HTML img.
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  )
}

function Items({ w = 0.7, gap = 0.15 }: { w?: number; gap?: number }) {
  const { urls } = useSnapshot(galleryState)
  const { width } = useThree((s) => s.viewport)
  const xW = w + gap
  const pages = Math.max(1, (width - xW + urls.length * xW) / width)

  return (
    <ScrollControls horizontal damping={0.1} pages={pages}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => (
          <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4]} url={url} />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

export default function GalleryPage() {
  useEffect(() => {
    let cancelled = false

    const loadGallery = async () => {
      try {
        const response = await fetch('/api/gallery')
        if (!response.ok) return
        const data = (await response.json()) as { urls?: string[] }
        if (cancelled || !Array.isArray(data.urls)) return
        galleryState.urls = data.urls
        galleryState.clicked = null
      } catch {
        // Ignore loading errors and keep an empty gallery state.
      }
    }

    loadGallery()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="h-screen w-full bg-[#151515]">
      <div className="pointer-events-none absolute left-1/2 top-4 z-20 flex w-full -translate-x-1/2 justify-center px-2 sm:top-6">
        <nav className="pointer-events-auto cover-navigation cover-navigation--primary max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="navigation flex w-max flex-row flex-nowrap items-center justify-center gap-1 rounded-2xl !p-1.5 backdrop-blur sm:gap-2 sm:!p-2">
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/">
                  <HomeIcon className="h-4 w-4" />
                  首页
                </Link>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <a href="http://doc.chenshimeng.top" target="_blank" rel="noreferrer">
                  <Book className="h-4 w-4" />
                  文档
                </a>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/projects">
                  <Code className="h-4 w-4" />
                  项目
                </Link>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/gallery">
                  <ImageIcon className="h-4 w-4" />
                  图库
                </Link>
              </Button>
            </li>
            <li className="navigation__item shrink-0">
              <Button variant="ghost" className={navigationButtonClass} asChild>
                <Link href="/about">
                  <Earth className="h-4 w-4" />
                  关于
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (galleryState.clicked = null)}>
        <Items />
      </Canvas>
    </div>
  )
}
