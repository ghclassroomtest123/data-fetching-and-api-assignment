import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('db.json exists and has correct structure', async () => {
  const dbPath = path.join(__dirname, '..', 'events-app', 'db.json');
  expect(fs.existsSync(dbPath)).toBe(true);
  
  const dbContent = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  expect(dbContent).toHaveProperty('events');
  expect(Array.isArray(dbContent.events)).toBe(true);
  expect(dbContent.events.length).toBeGreaterThanOrEqual(5);
  
  const firstEvent = dbContent.events[0];
  expect(firstEvent).toHaveProperty('id');
  expect(firstEvent).toHaveProperty('title');
  expect(firstEvent).toHaveProperty('date');
  expect(firstEvent).toHaveProperty('location');
  expect(firstEvent).toHaveProperty('description');
});
