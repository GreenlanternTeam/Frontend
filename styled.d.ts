import 'styled-components'
import { theme } from 'utils/theme'

declare module 'styled-components' {
	export interface DefaultTheme extends theme {}
}
