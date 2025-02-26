'use client'

// React Imports
import { createContext, forwardRef, useMemo } from 'react'
import type { ForwardRefRenderFunction, MenuHTMLAttributes, ReactElement } from 'react'

// Third-party Imports
import { FloatingTree } from '@floating-ui/react'
import classnames from 'classnames'

// Type Imports
import { horizontalSubMenuToggleDuration } from '../../defaultConfigs'
import styles from '../../styles/horizontal/horizontalUl.module.css'
import StyledHorizontalMenu from '../../styles/horizontal/StyledHorizontalMenu'
import type {
  ChildrenType,
  MenuItemStyles,
  RenderExpandIconParams,
  RenderExpandedMenuItemIcon,
  RootStylesType
} from '../../types'
import { menuClasses } from '../../utils/menuClasses'
import type { MenuProps as VerticalMenuProps } from '../vertical-menu/Menu'

// Util Imports

// Styled Component Imports

// Style Imports

// Default Config Imports

export type HorizontalMenuContextProps = {
  triggerPopout?: 'hover' | 'click'
  browserScroll?: boolean
  menuItemStyles?: MenuItemStyles
  renderExpandIcon?: (params: RenderExpandIconParams) => ReactElement
  renderExpandedMenuItemIcon?: RenderExpandedMenuItemIcon
  transitionDuration?: number
  popoutMenuOffset?: {
    mainAxis?: number | ((params: { level?: number }) => number)
    alignmentAxis?: number | ((params: { level?: number }) => number)
  }
  textTruncate?: boolean
  verticalMenuProps?: Pick<
    VerticalMenuProps,
    | 'transitionDuration'
    | 'menuSectionStyles'
    | 'menuItemStyles'
    | 'subMenuOpenBehavior'
    | 'renderExpandIcon'
    | 'renderExpandedMenuItemIcon'
    | 'textTruncate'
    | 'rootStyles'
  >
}

export type MenuProps = HorizontalMenuContextProps &
  RootStylesType &
  Partial<ChildrenType> &
  MenuHTMLAttributes<HTMLMenuElement>

export const HorizontalMenuContext = createContext({} as HorizontalMenuContextProps)

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (props, ref) => {
  // Props
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    triggerPopout = 'hover',
    browserScroll = false,
    transitionDuration = horizontalSubMenuToggleDuration,
    renderExpandIcon,
    renderExpandedMenuItemIcon,
    popoutMenuOffset = { mainAxis: 0 },
    textTruncate = true,
    verticalMenuProps,
    ...rest
  } = props

  const providerValue = useMemo(
    () => ({
      triggerPopout,
      browserScroll,
      menuItemStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      transitionDuration,
      popoutMenuOffset,
      textTruncate,
      verticalMenuProps
    }),
    [
      triggerPopout,
      browserScroll,
      menuItemStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      transitionDuration,
      popoutMenuOffset,
      textTruncate,
      verticalMenuProps
    ]
  )

  return (
    <HorizontalMenuContext.Provider value={providerValue}>
      <FloatingTree>
        <StyledHorizontalMenu
          ref={ref}
          className={classnames(menuClasses.root, className)}
          rootStyles={rootStyles}
          {...rest}
        >
          <ul className={styles.root}>{children}</ul>
        </StyledHorizontalMenu>
      </FloatingTree>
    </HorizontalMenuContext.Provider>
  )
}

export default forwardRef(Menu)
