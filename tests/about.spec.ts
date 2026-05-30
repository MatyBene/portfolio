import { test, expect } from '@playwright/test';

test.describe('About me', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'About me' }).click();
  });

  test('se muestra la seccion About con scrollable', async ({ page }) => {
    await expect(page.locator('.scrollable').first()).toBeVisible();
  });
});
