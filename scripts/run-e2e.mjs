import { spawn } from 'node:child_process'
import { once } from 'node:events'
import http from 'node:http'

const baseUrl = 'http://127.0.0.1:4173'

const waitForServer = async (url, timeoutMs = 120_000) => {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeoutMs) {
    const isReady = await new Promise((resolve) => {
      const request = http.get(url, (response) => {
        response.resume()
        resolve(response.statusCode && response.statusCode < 500)
      })

      request.on('error', () => resolve(false))
      request.setTimeout(1_000, () => {
        request.destroy()
        resolve(false)
      })
    })

    if (isReady) return

    await new Promise((resolve) => setTimeout(resolve, 250))
  }

  throw new Error(`Timed out waiting for ${url}`)
}

const server = spawn(
  process.execPath,
  [
    './node_modules/vite/bin/vite.js',
    'preview',
    '--outDir',
    'build/client',
    '--host',
    '127.0.0.1',
    '--port',
    '4173',
  ],
  { stdio: 'inherit' },
)

let exitCode = 1

try {
  await waitForServer(baseUrl)

  const playwright = spawn(process.execPath, ['./node_modules/@playwright/test/cli.js', 'test'], {
    stdio: 'inherit',
  })

  const [code] = await once(playwright, 'exit')
  exitCode = code ?? 1
} finally {
  if (!server.killed) {
    server.kill()
  }
}

process.exit(exitCode)
