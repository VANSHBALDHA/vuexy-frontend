// Type Imports
import Providers from '@components/Providers'
import type { Locale } from '@configs/i18n'

// Component Imports
import { i18n } from '@configs/i18n'
import { getSystemMode } from '@core/utils/serverHelpers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'

// Generate static params for all supported languages and catch-all not-found routes
export function generateStaticParams() {
  // Get all supported languages from i18n config
  return Object.keys(i18n.langDirection).map((lang) => ({
    lang,
    'not-found': ['not-found']
  }))
}

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