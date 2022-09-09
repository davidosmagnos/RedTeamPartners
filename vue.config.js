// const { defineConfig } = require('@vue/cli-service')
const path = require("path")
module.exports = {
  // transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:'http://localhost:5000',
      }
    }
  }
}
