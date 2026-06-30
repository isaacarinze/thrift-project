function TransactionSummary() {
  return (
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
  )
}

export default TransactionSummary