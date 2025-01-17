export { testRun }

import { fetchHtml, run, test, expect } from '@brillout/test-e2e'

function testRun(cmd: 'npm run dev' | 'npm run prod') {
  run(cmd)

  test('page is rendered to HTML', async () => {
    const html = await fetchHtml('/')
    expect(html).toContain('<div>Name character: Rick Sanchez</div>')
  })
}
