'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import { useSettings } from '@core/hooks/useSettings'
import type { ChildrenType } from '@core/types'

// Hook Imports

// Util Imports
import StyledMain from '@layouts/styles/shared/StyledMain'
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

// Styled Component Imports

const LayoutContent = ({ children }: ChildrenType) => {
  // Hooks
  const { settings } = useSettings()

  // Vars
  const contentCompact = settings.contentWidth === 'compact'
  const contentWide = settings.contentWidth === 'wide'

  return (
    <StyledMain
      isContentCompact={contentCompact}
      className={classnames(verticalLayoutClasses.content, 'flex-auto', {
        [`${verticalLayoutClasses.contentCompact} is-full`]: contentCompact,
        [verticalLayoutClasses.contentWide]: contentWide
      })}
    >
      {children}
    </StyledMain>
  )
}

export default LayoutContent
