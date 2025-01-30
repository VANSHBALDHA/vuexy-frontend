// Next Imports
import { redirect } from 'next/navigation'

// Third-party Imports
import { getServerSession } from 'next-auth'

// Type Imports
import { getLocalizedUrl } from '@/utils/i18n'
import type { Locale } from '@configs/i18n'
import themeConfig from '@configs/themeConfig'
import type { ChildrenType } from '@core/types'

// Config Imports

// Util Imports

const GuestOnlyRoute = async ({ children, lang }: ChildrenType & { lang: Locale }) => {
  const session = await getServerSession()

  if (session) {
    redirect(getLocalizedUrl(themeConfig.homePageUrl, lang))
  }

  return <>{children}</>
}

export default GuestOnlyRoute
