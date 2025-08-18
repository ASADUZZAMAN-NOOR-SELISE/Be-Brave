import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.locator('svg').nth(1).click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await expect(page.getByLabel('About').locator('h2')).toContainText('About');
  await expect(page.getByRole('img', { name: 'BeBrave Logo' })).toBeVisible();
  await expect(page.locator('h3')).toContainText('EagleGPT');
  await expect(page.getByRole('paragraph')).toContainText('Version 1.4.0');
  await expect(page.locator('div').filter({ hasText: /^Close$/ }).getByRole('button')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Close$/ }).getByRole('button').click();
});