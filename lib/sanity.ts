import { createClient } from "next-sanity";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2024-01-01";
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
});
