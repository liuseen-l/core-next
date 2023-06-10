import { BindingTypes } from '@vue/compiler-core'
import { compileSFCScript as compile, assertCode, mockId } from './utils'

describe('SFC compile <script setup>', () => {
  test('should compile JS syntax', () => {
    const { content } = compile(`
      <script setup lang='js'>
      const a = 1
      const b = 2
      </script>
    `)
    expect(content).toMatch(`return { a, b }`)
    assertCode(content)
  })
})
