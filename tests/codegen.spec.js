import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devapp.eaglegpt.ai/login');

  await page.locator('svg').click();
  await expect(page.locator('path').nth(2)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Passwort' })).toBeVisible();


//   await .click();
//   await expect().toBeVisible();
//   await .click();
  await expect(page.locator('#root')).toContainText('Available Apps');
  
  await .click();
  await .click();
  await expect(page.getByRole('img', { name: 'Profile', exact: true })).toBeVisible();

  await expect(page.locator('h3')).toContainText('My Profile');
  await expect(page.locator('[id="radix-:r2t:-trigger-generalInfo"]')).toContainText('General info');
  await expect(page.getByLabel('General info')).toContainText('asad.noor@yopmail.com');
  await expect(page.getByLabel('General info')).toContainText('DevTest');
  await expect(page.getByLabel('General info')).toContainText('Default Organization');
  await expect(page.getByLabel('General info')).toContainText('Account security');
  await expect(page.getByLabel('General info')).toContainText('Two-factor authentication');
  await expect(page.getByLabel('General info')).toContainText('Change password');
  await expect(page.getByLabel('General info')).toContainText('Delete account');

  await .click();
  await expect(page.getByLabel('Edit profile details').locator('h2')).toContainText('Edit profile details');
  await expect(page.getByLabel('Edit profile details')).toContainText('Keep your details accurate and up to date.');
  await expect(page.getByLabel('Edit profile details').locator('h1')).toContainText('DevTest');
  await expect(page.getByRole('img', { name: 'Profile' })).toBeVisible();
  await expect(page.locator('form')).toContainText('*.png, *.jpeg files up to 2MB.');
  await expect(page.getByRole('textbox', { name: 'Enter your full name' })).toHaveValue('DevTest');
  
  await .click();
  await page.getByRole('textbox', { name: 'Enter your full name' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter your full name' }).fill('New Test Name');

  await expect(page.getByRole('textbox', { name: 'Enter your full name' })).toHaveValue('New Test Name');
  await expect(page.locator('input[name="email"]')).toHaveValue('asad.noor@yopmail.com');
  await expect(page.getByRole('textbox', { name: 'Enter your mobile number' })).toHaveValue('+358 12 345678');
  await expect(page.locator('form')).toContainText('Email');
  await expect(page.locator('form')).toContainText('Mobile No');
  await expect(page.locator('form')).toContainText('Full Name*');

  await .click();
  await expect(page.getByLabel('General info')).toContainText('New Test Name');
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number' }).dblclick();
  await .fill('+41 11223355');
  await expect(page.getByRole('textbox', { name: 'Enter your mobile number' })).toHaveValue('+41 11223355');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByLabel('General info')).toContainText('+4111223355');
  await page.getByRole('button', { name: 'Edit' }).click();
  await .click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await .click();
});
