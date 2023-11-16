const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['frontend.test.guestbook.hotel.onstationops.com']
  },
})




