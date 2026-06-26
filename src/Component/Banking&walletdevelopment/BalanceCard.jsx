import { useState } from 'react'

function BalanceCard() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="relative overflow-hidden bg-primary-container rounded-xl p-6">
      
      {/* Decorative circles */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary opacity-20 rounded-full"></div>
      <div className="absolute -right-4 bottom-4 w-16 h-16 bg-primary-fixed-dim opacity-10 rounded-full"></div>

      {/* Content layer */}
      <div className="relative z-10 space-y-2">

        {/* Label + eye toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-on-primary/80 uppercase">
            Available Balance
          </span>
          {/* NEW */}
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-on-primary/80 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {isVisible ? 'visibility' : 'visibility_off'}
            </span>
          </button>
        </div>

        {/* Balance amount */}
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-on-primary opacity-80">₦</span>
          <span className="text-4xl font-bold tracking-tight text-on-primary">
            {isVisible ? '1,450,200.00' : '••••••••'}
          </span>
        </div>

        {/* Account tag */}
        <div className="pt-4 flex items-center gap-2">
          <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-on-primary">
            Savings Account
          </span>
          <span className="text-xs text-on-primary/60">• 4829</span>
        </div>

      </div>
    </section>
  )
}

export default BalanceCard