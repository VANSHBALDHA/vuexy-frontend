// Type Imports

// Component Imports
import Providers from '@components/Providers'
import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'
import type { ChildrenType } from '@core/types'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'
import BlankLayout from '@layouts/BlankLayout'

type Props = ChildrenType & {
  params: { lang: Locale }
}

const Layout = ({ children, params }: Props) => {
  // Vars
  const direction = i18n.langDirection[params.lang]
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
