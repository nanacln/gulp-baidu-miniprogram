const basePath = {
  src: './src',
  dest: './dist',
  html: {
      src: './src/pages/**/*.wxml',
      dest: './dist/pages/'
  },
  js: {
      src: './src/pages/**/*.js',
      dest: './dist/pages/'
  },
  // lib: {
  //     src: './src/js/lib/**/*',
  //     dest: './dist/js/lib'
  // },
  // sass: {
  //     src: './src/sass/**/*.scss',
  //     dest: './dist/css',
  //     revDest: './dist/rev/css'
  // },
  // images: {
  //     src: ['./src/images/**/*', '!./src/images/sprites/*', '!./src/images/svg/*'],
  //     dest: './dist/images'
  // },
}

module.exports = basePath;