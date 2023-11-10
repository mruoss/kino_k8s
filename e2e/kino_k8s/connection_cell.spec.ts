import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/new')

  await page.getByText('Notebook dependencies and setup').click()
  await page
    .locator('#cell-editor-setup-primary')
    .getByRole('textbox')
    .fill(`Mix.install([{:kino_k8s, path: "${process.cwd()}"}])`)

  await page.getByRole('button', { name: 'Reconnect and setup' }).click()

  await expect(page.locator('#outputs-setup-2')).toHaveText(/:ok/, {
    timeout: 300000,
  })

  const smart = page
    .locator('section')
    .first()
    .getByRole('button', { name: '+ Smart' })
    .first()
  await smart.click()
  await page.getByRole('menuitem', { name: 'K8s - Cluster Connection' }).click()
})

test.describe('File', () => {
  test('loads from local file', async ({ page }) => {
    const cell = page.locator('[data-smart-cell-js-view-ref]').first()
    const iframe = page.frameLocator('iframe').first()
    await iframe.getByTestId('source').fill(process.env.KUBECONFIG!)
    await iframe.getByTestId('context').fill(process.env.KUBECONTEXT!)
    await cell.locator('button[data-el-queue-cell-evaluation-button]').click()

    const result = page.frameLocator('iframe').nth(1).locator('body')
    await expect(result).toHaveText(/%K8s.Conn/)
    await expect(result).toHaveText(/K8s.Conn.Auth.Certificate/)
  })
})
