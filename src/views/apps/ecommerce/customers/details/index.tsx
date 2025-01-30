// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports

// Component Imports
import type { Customer } from '@/types/apps/ecommerceTypes'

import CustomerLeftOverview from './customer-left-overview'
import CustomerRight from './customer-right'
import CustomerDetailsHeader from './CustomerDetailsHeader'

// const OverViewTab = dynamic(() => import('@views/apps/ecommerce/customers/details/customer-right/overview'))
const SecurityTab = dynamic(() => import('@views/apps/ecommerce/customers/details/customer-right/security'))
const NotificationsTab = dynamic(() => import('@views/apps/ecommerce/customers/details/customer-right/notification'))

const AddressBillingTab = dynamic(
  () => import('@views/apps/ecommerce/customers/details/customer-right/address-billing')
)

// Vars
const tabContentList = (): { [key: string]: ReactElement } => ({
  security: <SecurityTab />,
  addressBilling: <AddressBillingTab />,
  notifications: <NotificationsTab />
})

const CustomerDetails = ({ customerData, customerId }: { customerData?: Customer; customerId: string }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomerDetailsHeader customerId={customerId} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomerLeftOverview customerData={customerData} />
      </Grid>
      <Grid item xs={12} md={8}>
        <CustomerRight tabContentList={tabContentList()} />
      </Grid>
    </Grid>
  )
}

export default CustomerDetails
