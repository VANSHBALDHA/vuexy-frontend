'use client'

// Third-party Imports
import type { CSSObject } from '@emotion/styled'
import classnames from 'classnames'

// Type Imports

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import type { ChildrenType } from '@core/types'

// Util Imports

// Styled Component Imports
import StyledFooter from '@layouts/styles/horizontal/StyledFooter'
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

type Props = ChildrenType & {
  overrideStyles?: CSSObject
}

const Footer = (props: Props) => {
  // Props
  const { children, overrideStyles } = props

  // Hooks
  const { settings } = useSettings()

  // Vars
  const { footerContentWidth } = settings

  const footerStatic = themeConfig.footer.type === 'static'
  const footerFixed = themeConfig.footer.type === 'fixed'
  const footerContentCompact = footerContentWidth === 'compact'
  const footerContentWide = footerContentWidth === 'wide'

  return (
    <StyledFooter
      overrideStyles={overrideStyles}
      className={classnames(horizontalLayoutClasses.footer, {
        [horizontalLayoutClasses.footerStatic]: footerStatic,
        [horizontalLayoutClasses.footerFixed]: footerFixed,
        [horizontalLayoutClasses.footerContentCompact]: footerContentCompact,
        [horizontalLayoutClasses.footerContentWide]: footerContentWide
      })}
    >
      <div className={horizontalLayoutClasses.footerContentWrapper}>{children}</div>
    </StyledFooter>
  )
}

export default Footer
