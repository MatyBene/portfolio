import { test, expect } from '@playwright/test';

test.describe('Education', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Education' }).click();
  });

  test('se muestran 12 ítems de educación', async ({ page }) => {
    const items = page.locator('.experience-item');
    await expect(items).toHaveCount(12);
  });

  test('el primer ítem es Computer Engineer', async ({ page }) => {
    const first = page.locator('.experience-item').first();
    await expect(first.locator('h3')).toHaveText('Computer Engineer');
    await expect(first.locator('h4')).toContainText('Facultad de Ingeniería');
  });

  test('el segundo ítem es University Technician in Programming', async ({ page }) => {
    const second = page.locator('.experience-item').nth(1);
    await expect(second.locator('h3')).toHaveText('University Technician in Programming');
    await expect(second.locator('h4')).toContainText('UTN Universidad Tecnológica Nacional');
  });

  test('cada ítem tiene un link a Certificate', async ({ page }) => {
    const certLinks = page.locator('.experience-item a');
    await expect(certLinks).toHaveCount(12);
  });
});
