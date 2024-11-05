// src/utils/seo.js

export function generateMetaTags(title, description, keywords) {
  const metaTags = [
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:card', content: 'summary' },
  ];

  return metaTags;
}

export function generateOpenGraphTags(url, title, description, image) {
  const openGraphTags = [
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
  ];

  return openGraphTags;
}

export function generateTwitterTags(title, description, image) {
  const twitterTags = [
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image', content: image },
  ];

  return twitterTags;
}