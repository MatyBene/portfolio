import { test, expect } from '@playwright/test';

test.describe('Experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Experience' }).click();
  });

  test('se muestran las 2 experiencias', async ({ page }) => {
    const items = page.locator('.experience-item');
    await expect(items).toHaveCount(2);
  });

  test('la primera experiencia tiene los datos correctos', async ({ page }) => {
    const first = page.locator('.experience-item').first();
    await expect(first.locator('h3')).toHaveText('Full Stack Web Developer');
    await expect(first.locator('h4')).toHaveText('Centro Deportivo');
    await expect(first.locator('span')).toHaveText('June 2025 - Present');
  });

  test('la segunda experiencia tiene los datos correctos', async ({ page }) => {
    const second = page.locator('.experience-item').nth(1);
    await expect(second.locator('h3')).toHaveText('Full Stack Web Developer');
    await expect(second.locator('h4')).toHaveText('CleanWave');
    await expect(second.locator('span')).toHaveText('June 2023 - December 2023');
  });
});
