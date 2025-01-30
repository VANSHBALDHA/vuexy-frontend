// MUI Imports
import Button from '@mui/material/Button'

// Type Imports
import AuthGuard from '@/hocs/AuthGuard'
import { getDictionary } from '@/utils/getDictionary'
import HorizontalFooter from '@components/layout/horizontal/Footer'
import Header from '@components/layout/horizontal/Header'
import VerticalFooter from '@components/layout/vertical/Footer'
import Navbar from '@components/layout/vertical/Navbar'
import Navigation from '@components/layout/vertical/Navigation'
import Providers from '@components/Providers'
import type { Locale } from '@configs/i18n'
import { i18n } from '@configs/i18n'
import Customizer from '@core/components/customizer'
import ScrollToTop from '@core/components/scroll-to-top'
import type { ChildrenType } from '@core/types'

// Layout Imports
import { getMode, getSystemMode } from '@core/utils/serverHelpers'
import HorizontalLayout from '@layouts/HorizontalLayout'
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports

// Config Imports

// Util Imports

const Layout = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]
  const dictionary = await getDictionary(params.lang)
  const mode = getMode()
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <AuthGuard locale={params.lang}>
        <LayoutWrapper
          systemMode={systemMode}
          verticalLayout={
            <VerticalLayout
              navigation={<Navigation dictionary={dictionary} mode={mode} systemMode={systemMode} />}
              navbar={<Navbar />}
              footer={<VerticalFooter />}
            >
              {children}
            </VerticalLayout>
          }
          horizontalLayout={
            <HorizontalLayout header={<Header dictionary={dictionary} />} footer={<HorizontalFooter />}>
              {children}
            </HorizontalLayout>
          }
        />
        <ScrollToTop className='mui-fixed'>
          <Button
            variant='contained'
            className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
          >
            <i className='tabler-arrow-up' />
          </Button>
        </ScrollToTop>
        <Customizer dir={direction} />
      </AuthGuard>
    </Providers>
  )
}

export default Layout
