import '@testing-library/jest-dom'
import type { Config } from 'jest'
import 'jest-styled-components'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default config
