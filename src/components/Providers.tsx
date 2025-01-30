// Type Imports

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import AppReactToastify from '@/libs/styles/AppReactToastify'
import ReduxProvider from '@/redux-store/ReduxProvider'
import ThemeProvider from '@components/theme'
import { SettingsProvider } from '@core/contexts/settingsContext'

// Styled Component Imports
import type { ChildrenType, Direction } from '@core/types'

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'

type Props = ChildrenType & {
  direction: Direction
}

const Providers = (props: Props) => {
  // Props
  const { children, direction } = props

  // Vars
  const mode = getMode()
  const settingsCookie = getSettingsFromCookie()
  const systemMode = getSystemMode()

  return (
    <NextAuthProvider basePath={process.env.NEXTAUTH_BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
          <ThemeProvider direction={direction} systemMode={systemMode}>
            <ReduxProvider>{children}</ReduxProvider>
            <AppReactToastify direction={direction} hideProgressBar />
          </ThemeProvider>
        </SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
