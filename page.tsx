export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0d0d0d',
      color: '#f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        marginBottom: '32px',
        color: '#ffffff',
      }}>
        Clyde&#8209;1
      </h1>

      <div style={{ maxWidth: '680px', textAlign: 'center', lineHeight: '1.8' }}>
        <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '20px' }}>
          Clyde&#8209;1 is a new motion&#8209;enhanced living&#8209;room game console built around a two&#8209;chip
          architecture: the Sonnet&#8209;1 motion module and the Nike&#8209;15 main processor. The system
          is designed for fast gameplay, clean controls, and a simple developer&#8209;friendly environment.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '40px' }}>
          We&apos;re focused on survival games, shooters, racing, sports, and motion&#8209;supported titles.
          Developers interested in bringing their games to Clyde&#8209;1 can reach out for early access
          and technical details.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://via.placeholder.com/600x300?text=Clyde-1+Internal+Layout"
          alt="Clyde-1 Internal Layout"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '8px',
            border: '1px solid #333',
            marginBottom: '40px',
          }}
        />

        <p style={{ fontSize: '1rem', color: '#888888' }}>
          Contact:{' '}
          <a
            href="mailto:clyde1dev@outlook.com"
            style={{ color: '#a0c4ff', textDecoration: 'none' }}
          >
            clyde1dev@outlook.com
          </a>
        </p>
      </div>
    </main>
  )
}
