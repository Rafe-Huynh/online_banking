import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home = () => {
  const loggedIn = {firstName: "User"}
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
          </header>
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {10000.00}
          />
        </div>
    </section>
  )
}

export default Home