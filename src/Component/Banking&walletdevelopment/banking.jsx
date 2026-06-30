import BalanceCard from './BalanceCard'
import TransactionSummary from './TransactionSummary'

function Banking() {
  return (
    <main className="flex-1 pt-20 pb-24 px-4 space-y-6">
      <BalanceCard />
      <TransactionSummary /> 
    </main>
  )
}

export default Banking