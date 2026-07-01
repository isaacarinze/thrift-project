function TransactionSummary() {
  return (
    <section className="space-y-3">

      {/* Total Credits */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">trending_up</span>
          </div>
          <div>
            <p className="font-label-caps text-on-surface-variant">Total Credits</p>
            <p className="font-h2 text-on-surface">₦840,000</p>
          </div>
        </div>
      </div>

      {/* Debits + Net Flow */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
          <p className="font-label-caps text-on-surface-variant mb-1">Debits</p>
          <p className="text-lg font-bold text-error">₦320,000</p>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
          <p className="font-label-caps text-on-surface-variant mb-1">Net Flow</p>
          <p className="text-lg font-bold text-secondary">+₦520k</p>
        </div>
      </div>

    </section>
  )
}

export default TransactionSummary