const BASE_URL = `${process.env.SITE_URL}/api`;

export const API_ENDPOINTS = Object.freeze({
  HERO: `${BASE_URL}/hero`,
  PROJECTS: `${BASE_URL}/projects`,
  CONTACTS: `${BASE_URL}/contacts`,
  SKILLS: `${BASE_URL}/skills`,
});

export type ApiEndpoints = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];