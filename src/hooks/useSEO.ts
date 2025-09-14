import { useEffect } from "react";

interface SEOData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    const {
      title = "Bludora - Software Development Studio",
      description = "Creating cutting-edge digital experiences with innovative software solutions. A software development studio crafting digital experiences that push the boundaries of technology and creativity.",
      image = "/logo1.png",
      url = "https://bludora.vercel.app",
      type = "website",
      keywords = [
        "software development",
        "web development",
        "bludora",
        "technology",
        "digital solutions",
        "react",
        "typescript",
        "web design",
      ],
      author = "Bludora",
      twitterCard = "summary_large_image",
      twitterSite = "@bludorasoftware",
      twitterCreator = "@bludorasoftware",
      canonicalUrl,
      noindex = false,
      nofollow = false,
    } = seoData;

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      property: string,
      content: string,
      isProperty = true
    ) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(
        `meta[${attribute}="${property}"]`
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description, false);
    updateMetaTag("keywords", keywords.join(", "), false);
    updateMetaTag("author", author, false);

    // Open Graph tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag(
      "og:image",
      image.startsWith("http") ? image : `${url}${image}`
    );
    updateMetaTag("og:url", url);
    updateMetaTag("og:type", type);
    updateMetaTag("og:site_name", "Bludora");
    updateMetaTag("og:locale", "en_US");

    // Twitter Card tags
    updateMetaTag("twitter:card", twitterCard, false);
    updateMetaTag("twitter:site", twitterSite, false);
    updateMetaTag("twitter:creator", twitterCreator, false);
    updateMetaTag("twitter:title", title, false);
    updateMetaTag("twitter:description", description, false);
    updateMetaTag(
      "twitter:image",
      image.startsWith("http") ? image : `${url}${image}`,
      false
    );

    // Additional SEO tags
    updateMetaTag(
      "robots",
      `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`,
      false
    );
    updateMetaTag(
      "googlebot",
      `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`,
      false
    );

    // Update canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl || url);

    // Update structured data (JSON-LD)
    const existingStructuredData = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Bludora",
      description: description,
      url: url,
      logo: image.startsWith("http") ? image : `${url}${image}`,
      sameAs: [
        "https://www.instagram.com/bludorasoftware/",
        "https://github.com/bludora",
        "https://twitter.com/bludorasoftware",
        "https://linkedin.com/company/bludora",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "bludorasoftware@outlook.com",
        contactType: "customer service",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [seoData]);
};

export default useSEO;
