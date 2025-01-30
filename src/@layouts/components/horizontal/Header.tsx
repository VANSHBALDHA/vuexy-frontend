'use client'

// MUI Imports
import type { CSSObject } from '@emotion/styled'
import classnames from 'classnames'

import { useTheme } from '@mui/material/styles'

// Third-party Imports

// Type Imports
import themeConfig from '@configs/themeConfig'
import { useSettings } from '@core/hooks/useSettings'
import type { ChildrenType } from '@core/types'

// Config Imports

// Hook Imports

// Util Imports
import StyledHeader from '@layouts/styles/horizontal/StyledHeader'
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

// Styled Component Imports

type Props = ChildrenType & {
  overrideStyles?: CSSObject
}

const Header = (props: Props) => {
  // Props
  const { children, overrideStyles } = props

  // Hooks
  const { settings } = useSettings()
  const theme = useTheme()

  // Vars
  const { navbarContentWidth } = settings

  const headerFixed = themeConfig.navbar.type === 'fixed'
  const headerStatic = themeConfig.navbar.type === 'static'
  const headerBlur = themeConfig.navbar.blur === true
  const headerContentCompact = navbarContentWidth === 'compact'
  const headerContentWide = navbarContentWidth === 'wide'

  return (
    <StyledHeader
      theme={theme}
      overrideStyles={overrideStyles}
      className={classnames(horizontalLayoutClasses.header, {
        [horizontalLayoutClasses.headerFixed]: headerFixed,
        [horizontalLayoutClasses.headerStatic]: headerStatic,
        [horizontalLayoutClasses.headerBlur]: headerBlur,
        [horizontalLayoutClasses.headerContentCompact]: headerContentCompact,
        [horizontalLayoutClasses.headerContentWide]: headerContentWide
      })}
    >
      {children}
    </StyledHeader>
  )
}

export default Header
