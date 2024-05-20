import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '../../../lib/actions/user.action'
import { getAccount, getAccounts } from '../../../lib/actions/bank.actions'
import RecentTransactions from '@/components/RecentTransactions'
const Home = async ({searchParams: {id, page}}:SearchParamProps) => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({userId: loggedIn.$id})
  const currentPage = Number(page as string) || 1;
  if(!accounts) return;
  const accountsData = accounts?.data
  const appwriteItemId = (id as string ) || accounts?.data[0]?.appwriteItemId
  const account = await getAccount({appwriteItemId})
  return (
    
    <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
            type = 'greeting'
            title ='Welcome'
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Manage your account and transactions"
            />
          
          <TotalBalanceBox 
          accounts = {accountsData}
          totalBanks = {accounts?.totalBanks}
          totalCurrentBalance = {accounts?.totalCurrentBalance}
          />
          </header>
          <div>
          <RecentTransactions accounts={accountsData} transactions={account?.transactions} appwriteItemId={appwriteItemId} page={currentPage} />
          </div>
        </div>
        <RightSideBar user = {loggedIn} transactions={accounts?.transactions} banks={accountsData?.slice(0,2)}/>
    </section>
  )
}

export default Home