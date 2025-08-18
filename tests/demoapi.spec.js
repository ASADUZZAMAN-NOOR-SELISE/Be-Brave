import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devapp.eaglegpt.ai/login');
  
});