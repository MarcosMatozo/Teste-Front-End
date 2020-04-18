// const path = require('path');

module.exports = {
  configureWebpack: {

  },
  css: {
    loaderOptions: {
      sass: {
        //Global sass variables
        data: '@import "@/sass/_vars.sass"'
       //  data: `
       //   @import "@/sass/main.sass";
       // `
      }
    }
  }

}
