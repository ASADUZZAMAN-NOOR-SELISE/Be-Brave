import { test, expect, request } from '@playwright/test';
const credentials = require("../utils/credentials");
const assertion = require("../utils/assertion");

const USER = credentials.valid.username;
const PASS = credentials.valid.password;
const baseURL = 'https://dev-api.eaglegpt.ai' 

let accessToken;

test.beforeAll(async () => {
  const apiRequest = await request.newContext({baseURL});

  const response = await apiRequest.post(`${baseURL}/authentication/v1/OAuth/Token`, {
    form: {
      grant_type: 'password',
      username: USER,
      password: PASS,
    },
    headers: { Accept: 'application/json','x-blocks-key':'0E446905CE8146C49CC2C0D9FF3A2168' },
  });

  const bodyText = await response.text();
  expect(response.ok(), `Login failed: ${response.status()} ${bodyText}`).toBeTruthy();

  const json = JSON.parse(bodyText);
  accessToken = json.access_token;
  await apiRequest.dispose();
});

test('test', async () => {
  // use accessToken here
});

