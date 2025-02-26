// Next Imports
import type { headers } from 'next/headers'

// Type Imports
import LangRedirect from '@components/LangRedirect'
import type { Locale } from '@configs/i18n'
import { i18n } from '@configs/i18n'
import type { ChildrenType } from '@core/types'

// Component Imports

// Config Imports

// ℹ️ We've to create this array because next.js makes request with `_next` prefix for static/asset files
const invalidLangs = ['_next']

const TranslationWrapper = (params: { headersList: ReturnType<typeof headers>; lang: Locale } & ChildrenType) => {
  const doesLangExist = i18n.locales.includes(params.lang)

  // ℹ️ This doesn't mean MISSING, it means INVALID
  const isInvalidLang = invalidLangs.includes(params.lang)

  return doesLangExist || isInvalidLang ? params.children : <LangRedirect />
}

export default TranslationWrapper
