// MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type TableDataType = {
  type: string
  app: boolean
  email: boolean
  browser: boolean
}

// Vars
const tableData: TableDataType[] = [
  {
    app: false,
    email: true,
    browser: false,
    type: 'New for you'
  },
  {
    app: true,
    email: false,
    browser: true,
    type: 'Account activity'
  },
  {
    app: true,
    email: true,
    browser: true,
    type: 'A new browser used to sign in'
  },
  {
    app: false,
    email: false,
    browser: true,
    type: 'A new device is linked'
  }
]

const Notification = () => {
  return (
    <Card>
      <CardHeader title='Notifications' subheader='You will receive notification for the below selected items' />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Email</th>
              <th>Browser</th>
              <th>App</th>
            </tr>
          </thead>
          <tbody className='border-be'>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>
                  <Typography color='text.primary'>{data.type}</Typography>
                </td>
                <td>
                  <Checkbox defaultChecked={data.email} />
                </td>
                <td>
                  <Checkbox defaultChecked={data.browser} />
                </td>
                <td>
                  <Checkbox defaultChecked={data.app} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CardActions className='flex items-center'>
        <Button variant='contained' type='submit'>
          Save Changes
        </Button>
        <Button variant='tonal' color='secondary' type='reset'>
          Discard
        </Button>
      </CardActions>
    </Card>
  )
}

export default Notification
