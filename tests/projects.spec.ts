import { test, expect } from '@playwright/test';

test.describe('Projects - navegación', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Click en Projects para ver los proyectos
    await page.getByRole('button', { name: 'Projects' }).click();
  });

  test('al hacer click en Projects se muestran los proyectos', async ({ page }) => {
    // Verificar que los proyectos aparecen
    await expect(page.getByRole('heading', { name: 'Centro Deportivo' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Clean Wave' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'One Piece: King of Java' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'LibraSys' })).toBeVisible();
  });

  test('cada proyecto tiene link al repositorio', async ({ page }) => {
    // Buscar todos los links "Repository" - deben ser 4
    const repoLinks = page.getByRole('link', { name: 'Repository' });
    await expect(repoLinks).toHaveCount(4);
  });
});