// MUI Imports
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import PaymentMethod from '@components/dialogs/payment-method'
import Link from '@components/Link'

const SupportedMethods = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'tonal',
    children: 'Add Payment Methods'
  }

  return (
    <Card>
      <CardHeader
        title='Supported payment methods'
        subheader={`Payment methods that are available with one of Vuexy's approved payment providers.`}
      />
      <CardContent className='flex flex-col items-start gap-5'>
        <Typography className='font-medium' color='text.primary'>
          Default
        </Typography>
        <div className='bg-actionHover rounded is-full p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center rounded bg-white shadow-sm min-is-[58px] min-bs-[37px]'>
              <img src='/images/apps/ecommerce/paypal.png' height={25} />
            </div>
            <Typography component={Link} color='primary' className='font-medium'>
              Activate PayPal
            </Typography>
          </div>
          <Divider className='mlb-6' />
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <div>
                <Typography variant='body2' className='mbe-2'>
                  Provider
                </Typography>
                <Typography className='font-medium' color='text.primary'>
                  Paypal
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <Typography variant='body2' className='mbe-2'>
                  Status
                </Typography>
                <Chip variant='tonal' size='small' label='Inactive' color='warning' />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <Typography variant='body2' className='mbe-2'>
                  Transaction Fee
                </Typography>
                <Typography className='font-medium' color='text.primary'>
                  2.99%
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={PaymentMethod} />
      </CardContent>
    </Card>
  )
}

export default SupportedMethods
