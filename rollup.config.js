export default {
    entry: 'dist/index.js',
    output: {
        file: 'dist/bundles/select.umd.js',
        format: 'umd',
        sourceMap: false,
      },
    moduleName: 'ng.select',
    globals: {
      '@angular/core': 'ng.core'
    }
  }