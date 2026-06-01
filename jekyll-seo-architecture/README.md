# Jekyll Programmatic SEO Architecture

This folder contains the complete Jekyll configuration and template structure for generating thousands of SEO-friendly static landing pages (programmatic SEO), exactly as requested.

## Structure Overview

* **`_config.yml`**: Defines the Jekyll configuration, enables the `_labels` collection, and sets custom permalinks exactly like `/labels/avery-5160-template-google-docs`.
* **`_labels/avery-5160.md`**: An example YAML front-matter data file representing one specific template. You can drop 1000s of these files into this folder without touching HTML template logic.
* **`_layouts/label.html`**: The liquid template that translates a label YAML record into a polished semantic HTML page with Google Docs IFrames, JSON-LD schema, breadcrumbs, download buttons, and compatibilities linking loops. 
* **`_layouts/default.html` & `_includes/seo.html`**: Global layouts storing canonical tagging, HTML structure, OpenGraph, and Twitter tags.
* **`vendors/index.html`**: Programmatically loops through all items in the `labels` collection to generate a vendor index.
* **`labels/index.html`**: Programmatically loops through to create an index of all label templates.
* **`sitemap.xml` & `robots.txt`**: Automatically generated dynamically based on the looping of the collections.

## How It Works

Jekyll takes everything in the `_labels` collection and merges it with the `_layouts/label.html`. When you push this structure to a repository with GitHub Pages enabled, GitHub's native Jekyll builder (or GitHub Actions script) scans the front matter variables out of the 10,000+ `.md` files and replaces variables like `{{ page.name }}` perfectly generating one statically rendered HTML page per label. 

## Next Steps

To deploy this:
1. Initialize a new repo (or put this in a separate branch) configured natively for Jekyll Pages.
2. Produce your remaining 5000+ `.md` front-matter templates into the `_labels` folder (from your database or JSON script).
3. Push to GitHub!
