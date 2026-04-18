import Link from 'next/link'

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  return (
    <div className="container-custom py-32 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        {/* ADDED text-brand-text to ensure the "Project:" prefix is visible in dark mode */}
        <h1 className="heading-hero text-center mb-12 text-brand-text">
          Project:{' '}
          <span className="text-gradient">
            {slug.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </span>
        </h1>
        
        <div className="bg-brand-bg-secondary border border-brand-border rounded-2xl p-12 text-center shadow-card">
          <div className="text-6xl mb-6">🚧</div>
          <h2 className="font-display font-bold text-3xl text-brand-text mb-4">Coming Soon!</h2>
          <p className="text-body-lg mb-10 max-w-xl mx-auto">
            We are currently crafting the detailed technical case study for this project. 
            Check back soon to see the full architecture and results!
          </p>
          <Link 
            href="/portfolio"
            className="btn-primary inline-flex"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}