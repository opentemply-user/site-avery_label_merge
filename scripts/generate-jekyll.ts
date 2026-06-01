import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LABELS_DATA } from '../src/data/labels.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '../jekyll-seo-architecture/_labels');

// Ensure the target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let generatedCount = 0;

Object.entries(LABELS_DATA).forEach(([key, label]) => {
  // We recreate the exact front-matter format expected by Jekyll
  const frontMatter = `---
layout: label
id: "${key}"
name: "${label.name}"
title: "${label.name} Template Google Docs & Sheets"
slug: "${label.slug}"
vendor: "${label.vendor}"
document: "https://docs.google.com/open?id=${label.files[0].docsId}"
description: "${label.description}"
compatibilities: "${label.compatibilities.join(', ')}"
snippet: "${label.snippet}"
---
`;

  const fileName = `${label.slug.replace('-template-google-docs', '')}.md`;
  const filePath = path.join(targetDir, fileName);

  fs.writeFileSync(filePath, frontMatter, 'utf-8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} Markdown files for Jekyll in /jekyll-seo-architecture/_labels`);
