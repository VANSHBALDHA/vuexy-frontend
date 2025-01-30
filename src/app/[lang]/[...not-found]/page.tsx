// Type Imports
import Providers from '@components/Providers'
import type { Locale } from '@configs/i18n'

// Component Imports
import { i18n } from '@configs/i18n'
import { getSystemMode } from '@core/utils/serverHelpers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'

// Config Imports

// Util Imports

const NotFoundPage = ({ params }: { params: { lang: Locale } }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <NotFound />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
