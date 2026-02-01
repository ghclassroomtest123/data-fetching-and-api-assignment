import { test, expect } from '@playwright/test';

test('SettingsContext and useMemo work together for sorting/filtering', async ({ page }) => {
  await page.goto('/');
  
  const searchInput = page.locator('[data-testid="search-input"]');
  const sortButton = page.locator('[data-testid="sort-button"]');
  
  await expect(searchInput).toBeVisible();
  await expect(sortButton).toBeVisible();

  const eventCards = page.locator('[data-testid="event-card"]');
  await expect(eventCards.first()).toBeVisible();

  const initialCount = await eventCards.count();
  const firstEventTitle = await eventCards.first().innerText();
  const titleToSearch = firstEventTitle.split('\n')[0].trim();
  await searchInput.fill(titleToSearch);
  
  // Wait for the count to potentially change (filtering)
  // We expect at least 1 result (the one we searched for)
  await expect(eventCards).not.toHaveCount(0);
  const filteredCount = await eventCards.count();
  expect(filteredCount).toBeGreaterThan(0);
  expect(filteredCount).toBeLessThanOrEqual(initialCount);

  await searchInput.fill('');
  const firstTitleBeforeSort = await page.locator('[data-testid="event-card"]').first().innerText();
  await sortButton.selectOption('date');
  const firstTitleAfterSort = await page.locator('[data-testid="event-card"]').first().innerText();
  
  if (initialCount > 1) {
    expect(firstTitleBeforeSort).not.toBe(firstTitleAfterSort);
  }
});

test('useCallback fetch logic is implemented', async ({ page }) => {
  await page.goto('/');
  const eventCards = page.locator('[data-testid="event-card"]');
  await expect(eventCards.first()).toBeVisible();
  
  const count = await eventCards.count();
  expect(count).toBeGreaterThanOrEqual(5);
});
