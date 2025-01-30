'use client'

// MUI Imports
import classnames from 'classnames'

import { useTheme } from '@mui/material/styles'

// Third-party Imports

type Props = {
  ltrIconClass: string
  rtlIconClass: string
  className?: string
}

const DirectionalIcon = (props: Props) => {
  // Props
  const { ltrIconClass, rtlIconClass, className } = props

  // Hooks
  const theme = useTheme()

  return (
    <i
      className={classnames(
        {
          [ltrIconClass]: theme.direction === 'ltr',
          [rtlIconClass]: theme.direction === 'rtl'
        },
        className
      )}
    />
  )
}

export default DirectionalIcon
