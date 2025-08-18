import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devapp.eaglegpt.ai/');
  await page.locator('svg').nth(1).click();
  await page.getByRole('menuitem', { name: 'My Profile' }).click();
  await expect(page.locator('h3')).toContainText('My Profile');
  await expect(page.getByRole('img', { name: 'Profile', exact: true })).toBeVisible();
  await expect(page.getByLabel('General info')).toContainText('asad.noor@yopmail.com');
  await expect(page.getByLabel('General info')).toContainText('Mobile No');
  await expect(page.getByLabel('General info')).toContainText('Joined on');
  await expect(page.getByLabel('General info')).toContainText('Last Logged in');
  await expect(page.getByLabel('General info')).toContainText('Organization');
  await expect(page.getByLabel('General info')).toContainText('Account security');
  await expect(page.getByLabel('General info')).toContainText('Two-factor authentication');
  await expect(page.getByLabel('General info')).toContainText('Enhance your security with an app or email-based authenticator.');
  await expect(page.getByText('Click here to enable MFAClick')).toBeVisible();
  await expect(page.getByLabel('General info')).toContainText('Change password');
  await expect(page.getByLabel('General info')).toContainText('Update your password to keep your account safe.');
  await expect(page.getByRole('button', { name: 'Update Password' })).toBeVisible();
  await expect(page.getByLabel('General info')).toContainText('Delete account');
  await expect(page.getByLabel('General info')).toContainText('Delete your account.');
  await expect(page.getByRole('button', { name: 'Delete account' })).toBeVisible();
});