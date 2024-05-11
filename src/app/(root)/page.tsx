import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
const Home = () => {
  const loggedIn = {firstName: "User" , lastName: 'User2', email: 'myemail@gmail.com'}
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
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {10000.00}
          />
          </header>
          Recent transaction
         
        </div>
        <RightSideBar user = {loggedIn} transactions={[]} banks={[{currentBalance: 123.23}, {currentBalance: 424.12}]}/>
    </section>
  )
}

export default Home