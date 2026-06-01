export const LINKS = {
  MARKETPLACE_URL: "https://workspace.google.com/marketplace/app/details/271995761092",
  TWITTER_URL: "https://twitter.com/averylabelmerge",
  HELP_CENTER_URL: "https://opentemply-label-maker.gitbook.io/label-maker-knowledge-base",
  GOOGLE_API_TERMS_URL: "https://developers.google.com/terms/api-services-user-data-policy",
  SUPPORT_EMAIL_URL: "mailto:support@opentemply.com",
};

export const ASSETS = {
  LOGO_URL: "https://cdn.jsdelivr.net/gh/opentemply-user/OpenTemply/projects/astral-layout/assets/logo.svg",
  GOOGLE_INSTALL_BTN_IMG: "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images_archive/original_images/AVvXsEhFZYaRVKIa1ylbEn98dXTXz4f9Qr3Nadec0ytqjEA5LkX91rKMIkFBX_uq-BKNfHLIWp2uvl",
};

export const FORMS = {
  TURNSTILE_SITE_KEY: "0x4AAAAAADUwem0lc05u_ORW", // Cloudflare test key, replace in production
  GOOGLE_FORM_ACTION: "https://docs.google.com/forms/d/e/1FAIpQLSf5VjFuwULFnLpetMMFnpCDMRVqZj-xaMsRe_Pbw3LD16bqRg/formResponse",
  WORKER_URL: "https://gforms-forwarder.opentemply.workers.dev",
  FIELDS: {
    EMAIL: "emailAddress",
    NAME: "entry.1513751478",
    PRODUCT: "entry.613596014",
    PRODUCT_OTHER: "entry.613596014.other_option_response",
    SUBJECT: "entry.1248156590",
    SUBJECT_OTHER: "entry.1248156590.other_option_response",
    MESSAGE: "entry.1380495134",
  },
  // Supported URL parameters for prefilling the contact form:
  // ?name=John%20Doe             (Prefills Your Name)
  // ?email=user@example.com      (Prefills Email address)
  // ?product=Label%20Maker       (Prefills Product dropdown/Custom input)
  // ?subject=Not%20Working       (Prefills Issue/Subject dropdown/Custom input)
  // ?message=Detailed%20issue... (Prefills Detailed Description text area)
};

export const YOUTUBE_TUTORIAL_VIDEO_ID = "XXXXXXXXXXXXXXXXXXXXXX";

export const TEMPLATE_SECTIONS: Record<string, { title: string; description: string }> = {
  "S0": {
    "title": "Most Popular Templates",
    "description": "Discover the most frequently used and downloaded label, card, and business templates."
  },
  "S2": {
    "title": "Avery US",
    "description": "Explore popular Avery US templates for labels, business cards, name badges, shipping labels, and more."
  },
  "S3": {
    "title": "Avery Zweckform",
    "description": "Browse top Avery Zweckform templates designed for European label formats, office products, and business printing needs."
  }
};
