module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    'vue-cli-plugin-e2e-webdriverio': {
      registry: undefined,
      config: 'node_modules\\.bin\\wdio',
      specs: 'test/spec/**',
      baseUrl: 'node_modules\\.bin\\wdio',
      capabilities: [
        'desktop'
      ],
      headless: false,
      debug: false,
      mode: 'production'
    }
  }
}
