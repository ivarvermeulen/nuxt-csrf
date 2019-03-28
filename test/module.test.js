jest.setTimeout(20000)
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('../example/nuxt.config')
config.mode = 'universal'

let port = null
let nuxt = null

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('basic', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('renders a placeholder for the token', async () => {
    const html = await get('/')
    expect(html).toContain('token')
  })
})
