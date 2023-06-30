import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{height: '100vh', textAlign: 'center'}}>
      <h1>Presentation page</h1>
      <Link href={'/menus'} style={{border: '1px solid black'}}>create QR menu</Link>
    </div>
  )
}
