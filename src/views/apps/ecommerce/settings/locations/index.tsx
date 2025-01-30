// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import Address from './Address'
import LocationName from './LocationName'

const Locations = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <LocationName />
      </Grid>
      <Grid item xs={12}>
        <Address />
      </Grid>
    </Grid>
  )
}

export default Locations
