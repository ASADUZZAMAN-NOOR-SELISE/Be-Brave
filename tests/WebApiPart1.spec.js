import { test, expect, request } from '@playwright/test';
const credentials = require("../utils/credentials");
const assertion = require("../utils/assertion");

const USER = credentials.valid.username;
const PASS = credentials.valid.password;
// Optional if your API requires them:
// const CLIENT_ID = process.env.EAGLE_CLIENT_ID!;
// const CLIENT_SECRET = process.env.EAGLE_CLIENT_SECRET!;

let accessToken;

test.beforeAll(async () => {
  const api = await request.newContext({ baseURL: 'https://dev-api.eaglegpt.ai' });

  const res = await api.post('/authentication/v1/OAuth/Token', {
    // Most OAuth token endpoints expect x-www-form-urlencoded
    form: {
      grant_type: 'password',
      username: USER,
      password: PASS,
      // client_id: CLIENT_ID,
      // client_secret: CLIENT_SECRET,
    },
    headers: { Accept: 'application/json' },
  });

  const bodyText = await res.text();
  expect(res.ok(), `Login failed: ${res.status()} ${bodyText}`).toBeTruthy();

  const json = JSON.parse(bodyText);
  accessToken = json.access_token;
  await api.dispose();
});

test('test', async () => {
  // use accessToken here
});

