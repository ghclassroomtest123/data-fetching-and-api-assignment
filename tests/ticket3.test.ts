import { test, expect } from '@playwright/test';

test('navigation to event details works', async ({ page }) => {
  await page.goto('/');
  
  const firstEventCard = page.locator('[data-testid="event-card"]').first();
  const eventId = await firstEventCard.getAttribute('data-event-id');
  
  await firstEventCard.click();
  
  await expect(page).toHaveURL(new RegExp(`/events/${eventId}`));
  
  const eventDetails = page.locator('[data-testid="event-details"]');
  await expect(eventDetails).toBeVisible();
});
