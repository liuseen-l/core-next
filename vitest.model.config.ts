import { UserConfig, configDefaults, defineConfig } from 'vitest/config'
import config from './vitest.config'

const modeResolver = {
  r: () => 'packages/runtime-core/__tests__/apiSetupHelpers.spec.ts',
  c: () => 'packages/compiler-sfc/__tests__/compileScript.spec.ts'
}

export default defineConfig(({ mode }) => {
  const resolvePath = modeResolver[mode]()
  return {
    ...config,
    test: {
      ...config.test,
      exclude: [...configDefaults.exclude, '**/e2e/**'],
      include: [resolvePath]
    }
  }
})
