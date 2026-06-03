export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Labor Law Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Costly Labor Law Violations<br />
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          ShiftGuard validates your restaurant schedules against local labor laws in real time — catching overtime violations, missed breaks, and compliance gaps before your staff clocks in.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Free Trial — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⚠️</div>
            <h3 className="font-semibold text-white mb-2">Violation Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified before a shift starts if it breaks overtime or break rules.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="font-semibold text-white mb-2">Compliance Reports</h3>
            <p className="text-sm text-[#8b949e]">Auto-generate weekly reports ready for audits and HR reviews.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⚙️</div>
            <h3 className="font-semibold text-white mb-2">Configurable Rules</h3>
            <p className="text-sm text-[#8b949e]">Set rules per state or locality — minimum wage, max hours, mandatory breaks.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited employees & schedules",
              "Real-time compliance validation",
              "Automated weekly reports",
              "Configurable labor law rules",
              "Email violation alerts",
              "14-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which labor laws does ShiftGuard support?</h3>
            <p className="text-sm text-[#8b949e]">ShiftGuard supports configurable rule sets for all 50 US states, covering overtime thresholds, mandatory break intervals, minor work restrictions, and minimum wage tiers. You can also add custom rules for your locality.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the compliance check work?</h3>
            <p className="text-sm text-[#8b949e]">When you publish or update a schedule, ShiftGuard's compliance engine instantly validates every shift against your configured rules. Violations are flagged with clear explanations so you can fix them before employees arrive.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel anytime from your account dashboard with no penalties. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ShiftGuard. Built for restaurant managers who value compliance.
      </footer>
    </main>
  )
}
