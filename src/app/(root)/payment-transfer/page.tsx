import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import React from 'react'
import { getLoggedInUser } from '../../../../lib/actions/user.action'
import { getAccounts } from '../../../../lib/actions/bank.actions'

const Tranfer = async () => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({userId: loggedIn.$id})
  return (
    <section className='payment-transfer'>
        <HeaderBox title='Payment Transfer' subtext='Provide details and notes' />
        <section className='size-full pt-5'>
            <PaymentTransferForm accounts={accounts?.data}/>
        </section>
    </section>
  )
}

export default Tranfer