// Next Imports
import type { Metadata } from 'next'

// Component Imports
import { getServerMode } from '@core/utils/serverHelpers'
import Register from '@views/Register'

// Server Action Imports

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to your account'
}

const RegisterPage = () => {
  // Vars
  const mode = getServerMode()

  return <Register mode={mode} />
}

export default RegisterPage
