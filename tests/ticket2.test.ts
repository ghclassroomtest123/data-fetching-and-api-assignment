import { test, expect } from '@playwright/test';

test('events are fetched and displayed', async ({ page }) => {
  await page.goto('/');
  
  const eventsList = page.locator('[data-testid="events-list"]');
  await expect(eventsList).toBeVisible();
  
  const eventCards = page.locator('[data-testid="event-card"]');
  const count = await eventCards.count();
  expect(count).toBeGreaterThanOrEqual(5);
  
});