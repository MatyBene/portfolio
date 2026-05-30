import { test, expect } from '@playwright/test';

test.describe('Navegación principal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('la página carga correctamente', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Matias Benedetti');
  });

  test('todos los botones de navegación existen', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Experience' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Education' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'About me' })).toBeVisible();
  });

  test('los links sociales existen', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CV' })).toBeVisible();
  });

  test('las tecnologias se muestran', async ({ page }) => {
    const techSection = page.locator('.skills-icons');
    await expect(techSection.getByText('Java', { exact: true })).toBeVisible();
    await expect(techSection.getByText('React', { exact: true })).toBeVisible();
    await expect(techSection.getByText('TypeScript', { exact: true })).toBeVisible();
    await expect(techSection.getByText('JavaScript', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Git', { exact: true })).toBeVisible();
    await expect(techSection.getByText('GitHub', { exact: true })).toBeVisible();
    await expect(techSection.getByText('SpringBoot', { exact: true })).toBeVisible();
    await expect(techSection.getByText('HTML5', { exact: true })).toBeVisible();
    await expect(techSection.getByText('CSS3', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Node.js', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Express', { exact: true })).toBeVisible();
    await expect(techSection.getByText('MySQL', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Junit5', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Jest', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Docker', { exact: true })).toBeVisible();
    await expect(techSection.getByText('NPM', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Angular', { exact: true })).toBeVisible();
    await expect(techSection.getByText('Ionic', { exact: true })).toBeVisible();
  });
});