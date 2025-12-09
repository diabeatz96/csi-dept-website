import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    // Log violations for debugging
    if (accessibilityScanResults.violations.length > 0) {
      console.log('\n=== ACCESSIBILITY VIOLATIONS ===\n');
      accessibilityScanResults.violations.forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.id}: ${violation.description}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Help: ${violation.helpUrl}`);
        console.log(`   Affected elements:`);
        violation.nodes.forEach((node) => {
          console.log(`     - ${node.target.join(', ')}`);
          console.log(`       ${node.failureSummary}`);
        });
        console.log('');
      });
    }

    // This will fail the test if there are violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('homepage should pass WCAG 2.1 AA standards', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log('\n=== WCAG 2.1 AA VIOLATIONS ===\n');
      accessibilityScanResults.violations.forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.id}: ${violation.description}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Tags: ${violation.tags.join(', ')}`);
        console.log(`   Help: ${violation.helpUrl}`);
        violation.nodes.forEach((node) => {
          console.log(`   Element: ${node.target.join(', ')}`);
        });
        console.log('');
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
