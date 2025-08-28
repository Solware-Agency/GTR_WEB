export default function Home() {
  return (
    <main style={{
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      lineHeight: '1.5',
      fontWeight: '400',
      color: 'rgba(255, 255, 255, 0.87)',
      backgroundColor: '#242424',
      margin: '0',
      display: 'flex',
      placeItems: 'center',
      minWidth: '320px',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3.2em',
          lineHeight: '1.1'
        }}>
          Hello Next.js!
        </h1>
        <p style={{
          color: '#888'
        }}>
          GTR Web Application built with Next.js
        </p>
      </div>
    </main>
  )
}