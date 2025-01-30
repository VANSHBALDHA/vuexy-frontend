// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ManualMethods from './ManualMethods'
import PaymentProviders from './PaymentProviders'
import SupportedMethods from './SupportedMethods'

const Payments = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PaymentProviders />
      </Grid>
      <Grid item xs={12}>
        <SupportedMethods />
      </Grid>
      <Grid item xs={12}>
        <ManualMethods />
      </Grid>
    </Grid>
  )
}

export default Payments
