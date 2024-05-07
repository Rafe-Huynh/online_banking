import React from 'react'
import RoundChart from './RoundChart'
import AnimatedCounter from './AnimatedCounter'
const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <RoundChart accounts = {accounts} />
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
            Bank Accounts: {totalBanks}
            <div className='flex flex-col gap-2'>
            <div className='total-balance-amount flex-center gap-2'>
                
                Total Current Balance: <AnimatedCounter amount={totalCurrentBalance}/>
            </div>
            </div>
            </h2>
        </div>
    </section>
  )
}

export default TotalBalanceBox