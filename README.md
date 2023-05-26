
编译script
parse阶段:
compiler-sfc内部的parse调用compiler.parse,这个compiler.parse来自于@vue/compiler-dom，
@vue/compiler-dom内部的parse调用baseParse，baseParse来自于@vue/compiler-core的parse.ts文件,
compile阶段:
使用ccompileScript去编译ast

编译templete
parse阶段:
compiler-sfc内部的parse调用compiler.parse,这个compiler.parse来自于@vue/compiler-dom，
@vue/compiler-dom内部的parse调用baseParse，baseParse来自于@vue/compiler-core的parse.ts文件,
compile阶段:
compileTemplate内部调用compiler.compile，这个compiler.compile来自于@vue/compiler-dom，
@vue/compiler-dom内部的compile调用baseCompile，baseCompile来自于@vue/compiler-core的compile.ts文件,
baseCompile，baseCompile内部调用transform解析ast生成渲染函数
