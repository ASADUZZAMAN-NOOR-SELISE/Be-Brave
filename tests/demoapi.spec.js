// import { test, expect, request } from '@playwright/test';
// const credentials = require("../utils/credentials");
// const assertion = require("../utils/assertion");

// const USER = credentials.valid.username;
// const PASS = credentials.valid.password;
// const baseURL = 'https://dev-api.eaglegpt.ai' 

// let accessToken;
// let context;
// let page;
// let auth;

// test.beforeAll(async () => {
//   const apiRequest = await request.newContext({baseURL});

//   const response = await apiRequest.post(`${baseURL}/authentication/v1/OAuth/Token`, {
//     form: {
//       grant_type: 'password',
//       username: USER,
//       password: PASS,
//     },
//     headers: { Accept: 'application/json','x-blocks-key':'0E446905CE8146C49CC2C0D9FF3A2168' },
//   });
//   const bodyText = await response.text();
//   expect(response.ok(), `Login failed: ${response.status()} ${bodyText}`).toBeTruthy();
//   const json = JSON.parse(bodyText);
//   accessToken = json;
//   await page.waitForURL(/\/home/i);
//   await page.waitForFunction(() => !!window.localStorage.getItem('auth-storage'));
//   auth = await page.evaluate(() => localStorage.getItem('auth-storage'));
//   console.log(auth);
//   //await apiRequest.dispose();

// });

// test('login new page open @API', async ({page}) => {
//   await page.addInitScript(value=>{
//     window.localStorage.setItem('auth-storage', value);
//   },auth)

//   await page.goto("https://dev-api.eaglegpt.ai");

// });

