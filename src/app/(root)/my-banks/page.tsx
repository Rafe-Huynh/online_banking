import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import { getLoggedInUser } from '../../../../lib/actions/user.action'
import { getAccounts } from '../../../../lib/actions/bank.actions'
import BankCards from '@/components/BankCards'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({userId: loggedIn.$id})
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox 
        title='My Bank Accounts'
        subtext='Manage your Bank Accounts'
        />
        <div className='space-y-4'>
          <h2 className='header-2'>
              Your Cards
          </h2>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((a: Account) => (
              <BankCards key={accounts.id}
              account={a}
              userName={loggedIn?.firstName}/>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks