// import { BindingTypes } from '@vue/compiler-core'
// import { compileSFCScript as compile, assertCode } from '../utils'
import { baseParse } from '@vue/compiler-core'

describe('defineProps', () => {
  test('basic usage', () => {
    const ast = baseParse(`


        const props = defineProps({
          foo: String
        })
        const bar = 1

        function test(){
          console.log(props.foo+1)
        }
        

  `)
    expect(ast).toMatchInlineSnapshot(`
      {
        "cached": 0,
        "children": [
          {
            "content": " const props = defineProps({ foo: String }) const bar = 1 function test(){ console.log(props.foo+1) } ",
            "loc": {
              "end": {
                "column": 3,
                "line": 14,
                "offset": 177,
              },
              "source": "


              const props = defineProps({
                foo: String
              })
              const bar = 1

              function test(){
                console.log(props.foo+1)
              }
              

        ",
              "start": {
                "column": 1,
                "line": 1,
                "offset": 0,
              },
            },
            "type": 2,
          },
        ],
        "codegenNode": undefined,
        "components": [],
        "directives": [],
        "helpers": Set {},
        "hoists": [],
        "imports": [],
        "loc": {
          "end": {
            "column": 3,
            "line": 14,
            "offset": 177,
          },
          "source": "


              const props = defineProps({
                foo: String
              })
              const bar = 1

              function test(){
                console.log(props.foo+1)
              }
              

        ",
          "start": {
            "column": 1,
            "line": 1,
            "offset": 0,
          },
        },
        "temps": 0,
        "type": 0,
      }
    `)
  })
})
