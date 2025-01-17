// @flow
import withStyles from './withStyles'

export {ThemeProvider, withTheme, createTheming, useTheme} from 'theming'
export {default as createUseStyles} from './createUseStyles'
export {default as JssProvider} from './JssProvider'
export {default as jss} from './jss'
export {SheetsRegistry, createGenerateId} from 'jss'
export {default as JssContext} from './JssContext'
export {withStyles}

// Kept for backwards compatibility.
export default withStyles
