// Resources Data - Central Exports

export { resourceCategories } from "./categories";

export type {
  ResourceCategory,
  ResourceLink,
  ResourceCategoryId,
} from "./types";

// Helper functions

import { resourceCategories } from "./categories";
import type { ResourceCategory, ResourceLink } from "./types";

/**
 * Get a resource category by its ID
 */
export function getResourceCategoryById(
  id: string
): ResourceCategory | undefined {
  return resourceCategories.find((category) => category.id === id);
}

/**
 * Get all resource links across all categories
 */
export function getAllResourceLinks(): ResourceLink[] {
  return resourceCategories.flatMap((category) => category.links);
}

/**
 * Get a specific resource link by its ID
 */
export function getResourceLinkById(id: string): ResourceLink | undefined {
  for (const category of resourceCategories) {
    const link = category.links.find((l) => l.id === id);
    if (link) return link;
  }
  return undefined;
}

/**
 * Search resource links by label
 */
export function searchResourceLinks(query: string): ResourceLink[] {
  const lowerQuery = query.toLowerCase();
  return getAllResourceLinks().filter(
    (link) =>
      link.label.toLowerCase().includes(lowerQuery) ||
      link.description?.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get the category that contains a specific link
 */
export function getCategoryForLink(
  linkId: string
): ResourceCategory | undefined {
  return resourceCategories.find((category) =>
    category.links.some((link) => link.id === linkId)
  );
}
