export default function Home() {
  const faqs = [
    {
      q: 'Which labor laws does ShiftGuard support?',
      a: 'ShiftGuard ships with configurable rule sets covering federal FLSA requirements plus common state-level rules for overtime, mandatory breaks, and minor-work restrictions. You can customize thresholds to match your jurisdiction.'
    },
    {
      q: 'How do I upload my schedule?',
      a: 'Import a CSV export from any scheduling tool (7shifts, HotSchedules, Excel) or paste shift data directly. ShiftGuard validates it instantly and flags every violation with a plain-English explanation.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no cancellation fees.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Labor Law Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Costly Overtime Violations<br />
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ShiftGuard validates your restaurant schedules against local labor laws in seconds — catching overtime, missed breaks, and minor-work violations before you post the schedule.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $17/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Real-time violation alerts','Overtime prevention','Break tracking','Compliance PDF reports','CSV import','Configurable rules'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Single Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need for full compliance</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited schedule uploads',
              'Federal + state labor law rules',
              'Overtime & break violation alerts',
              'Automated compliance PDF reports',
              'Up to 50 employees',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ShiftGuard. Built for restaurant managers.
      </footer>
    </main>
  )
}
