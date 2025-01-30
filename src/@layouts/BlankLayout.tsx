'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import useLayoutInit from '@core/hooks/useLayoutInit'
import { useSettings } from '@core/hooks/useSettings'
import type { ChildrenType, SystemMode } from '@core/types'

import { blankLayoutClasses } from './utils/layoutClasses'

// Hook Imports

// Util Imports

type Props = ChildrenType & {
  systemMode: SystemMode
}

const BlankLayout = (props: Props) => {
  // Props
  const { children, systemMode } = props

  // Hooks
  const { settings } = useSettings()

  useLayoutInit(systemMode)

  return (
    <div className={classnames(blankLayoutClasses.root, 'is-full bs-full')} data-skin={settings.skin}>
      {children}
    </div>
  )
}

export default BlankLayout
