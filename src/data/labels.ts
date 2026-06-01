export interface LabelFile {
  docsId: string;
}

export interface LabelData {
  name: string;
  slug: string;
  vendor: string;
  files: LabelFile[];
  description: string;
  compatibilities: string[];
  snippet: string;
  s: string[];
}

export const LABELS_DATA: Record<string, LabelData> = {
  "A1": {
    name: "Avery® 5160",
    slug: "avery-5160-template-google-docs",
    vendor: "Avery",
    files: [{ docsId: "1RzM9hxa7qBlmKMfzGvdxdyx5K7dMqZrVne3TwU0lonA" }],
    description: "Create and print labels using Avery® 5160 template for Google Docs & Google Sheets. Word template and PDF version available.",
    compatibilities: [
      "15660", "15700", "15960", "16460", "16790", "18160", "18260", "18660",
      "22837", "28660", "32660", "38260", "45160", "48160", "48260", "48360",
      "48460", "48860", "48960", "5260", "55160", "5520", "55360", "5620",
      "5630", "5660", "58160", "58660", "5960", "6240", "6521", "6525", "6526",
      "6585", "75160", "80509", "8160", "8215", "8250", "8460", "85560", "8620",
      "8660", "88560", "8860", "8920", "95520", "95915", "Presta 94200"
    ],
    snippet: "For mailing list, large and small, Avery® 5160 is perfect and suit to a variety of envelope sizes. Whether you're printing in black and white or adding colour, Avery® 5160 will look sharp and smart on your letters. It has 30 labels per sheet and print in US Letter. Last but not least, it's the [most popular label](/labels/) in the US.",
    s: ["S0", "S2"]
  },

  "A2": {
    name: "Avery® 5161",
    slug: "avery-5161-template-google-docs",
    vendor: "Avery",
    files: [{ docsId: "1RzM9hxa7qBlmKMfzGvdxdyx5K7dMqZrVne3TwU0lonA" }],
    description: "Create and print labels using Avery® 5161 template for Google Docs & Google Sheets. Word template and PDF version available.",
    compatibilities: [
      "5261", "5961", "8161", "8661"
    ],
    snippet: "Avery® 5161 address labels are ideal for shipping, filing and organization. Featuring 20 labels per sheet, they provide more space for addresses, logos and custom designs while maintaining a professional appearance.",
    s: ["S0", "S2"]
  },

  "A3": {
    name: "Avery® 5162",
    slug: "avery-5162-template-google-docs",
    vendor: "Avery",
    files: [{ docsId: "1RzM9hxa7qBlmKMfzGvdxdyx5K7dMqZrVne3TwU0lonA" }],
    description: "Create and print labels using Avery® 5162 template for Google Docs & Google Sheets. Word template and PDF version available.",
    compatibilities: [
      "5262", "5962", "8162", "8662"
    ],
    snippet: "Avery® 5162 labels are a popular choice for mailing and shipping applications. With 14 labels per sheet, they offer ample room for recipient information, branding and barcodes.",
    s: ["S0", "S2"]
  },

  "A4": {
    name: "Avery® 5163",
    slug: "avery-5163-template-google-docs",
    vendor: "Avery",
    files: [{ docsId: "1RzM9hxa7qBlmKMfzGvdxdyx5K7dMqZrVne3TwU0lonA" }],
    description: "Create and print labels using Avery® 5163 template for Google Docs & Google Sheets. Word template and PDF version available.",
    compatibilities: [
      "5263", "5963", "8163", "8663"
    ],
    snippet: "Avery® 5163 shipping labels are designed for larger packages and envelopes. With 10 labels per sheet, they provide plenty of space for shipping details, return addresses and tracking information.",
    s: ["S0", "S2"]
  }
};
