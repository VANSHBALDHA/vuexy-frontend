// MUI Imports
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

// Component Imports
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import PaymentProvidersDialog from '@components/dialogs/payment-providers'

const PaymentProviders = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'tonal',
    children: 'Choose A Provider'
  }

  return (
    <Card>
      <CardHeader title='Payment providers' />
      <CardContent>
        <Typography className='mbe-5'>
          Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will
          apply to new orders once you select a plan.
        </Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={PaymentProvidersDialog} />
      </CardContent>
    </Card>
  )
}

export default PaymentProviders
