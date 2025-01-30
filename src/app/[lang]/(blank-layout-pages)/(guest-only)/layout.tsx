// Type Imports
import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'
import type { Locale } from '@configs/i18n'
import type { ChildrenType } from '@core/types'

// HOC Imports

const Layout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  return <GuestOnlyRoute lang={params.lang}>{children}</GuestOnlyRoute>
}

export default Layout
