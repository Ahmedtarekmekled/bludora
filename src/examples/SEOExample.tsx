import SEO from "../components/SEO";

/**
 * Example usage of the SEO component
 * This demonstrates how to use the SEO component in different scenarios
 */

// Example 1: Basic usage with minimal props
export function BasicSEOExample() {
  return (
    <>
      <SEO
        title="My Page Title"
        description="This is a basic example of using the SEO component"
        url="https://example.com/page"
        image="/my-image.jpg"
      />
      <div>
        <h1>My Page Content</h1>
        <p>This page demonstrates basic SEO usage.</p>
      </div>
    </>
  );
}

// Example 2: Full featured usage with all props
export function FullSEOExample() {
  return (
    <>
      <SEO
        title="Complete SEO Example - Bludora"
        description="This is a comprehensive example showing all available SEO props and their usage in a real-world scenario."
        url="https://bludora.vercel.app/example"
        image="https://bludora.vercel.app/logo1.png"
        type="article"
        keywords={[
          "seo",
          "open graph",
          "twitter cards",
          "meta tags",
          "social media",
          "web development",
          "react",
          "typescript",
        ]}
        author="Bludora Team"
        twitterCard="summary_large_image"
        twitterSite="@bludorasoftware"
        twitterCreator="@bludorasoftware"
        canonicalUrl="https://bludora.vercel.app/example"
        noindex={false}
        nofollow={false}
      />
      <div>
        <h1>Complete SEO Example</h1>
        <p>This example shows how to use all available SEO props.</p>
        <ul>
          <li>✅ Open Graph tags for Facebook, LinkedIn</li>
          <li>✅ Twitter Card tags for Twitter</li>
          <li>✅ Structured data (JSON-LD)</li>
          <li>✅ Canonical URLs</li>
          <li>✅ Meta robots tags</li>
          <li>✅ Custom keywords and author</li>
        </ul>
      </div>
    </>
  );
}

// Example 3: Blog post example
export function BlogPostSEOExample() {
  const blogPost = {
    title: "How to Implement SEO in React Applications",
    description:
      "Learn how to add comprehensive SEO meta tags to your React applications using our reusable SEO component.",
    url: "https://bludora.vercel.app/blog/seo-react-guide",
    image: "https://bludora.vercel.app/blog-images/seo-react-guide.jpg",
    publishDate: "2024-01-15",
    author: "Bludora Team",
  };

  return (
    <>
      <SEO
        title={`${blogPost.title} | Bludora Blog`}
        description={blogPost.description}
        url={blogPost.url}
        image={blogPost.image}
        type="article"
        keywords={[
          "seo",
          "react",
          "meta tags",
          "open graph",
          "tutorial",
          "web development",
          "bludora blog",
        ]}
        author={blogPost.author}
        twitterCard="summary_large_image"
      />
      <article>
        <header>
          <h1>{blogPost.title}</h1>
          <p>
            By {blogPost.author} • {blogPost.publishDate}
          </p>
        </header>
        <main>
          <p>{blogPost.description}</p>
          {/* Blog content would go here */}
        </main>
      </article>
    </>
  );
}

// Example 4: Product page example
export function ProductSEOExample() {
  const product = {
    name: "Premium Web Development Package",
    description:
      "Complete web development solution including design, development, and deployment. Perfect for startups and established businesses.",
    url: "https://bludora.vercel.app/services/web-development",
    image: "https://bludora.vercel.app/services/web-dev-package.jpg",
    price: "$2999",
    availability: "in-stock",
  };

  return (
    <>
      <SEO
        title={`${product.name} | Bludora Services`}
        description={product.description}
        url={product.url}
        image={product.image}
        type="product"
        keywords={[
          "web development",
          "premium package",
          "complete solution",
          "startup",
          "business website",
          "bludora services",
        ]}
        author="Bludora"
        twitterCard="summary_large_image"
      />
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div>
          <span>Price: {product.price}</span>
          <span>Availability: {product.availability}</span>
        </div>
        <button>Get Started</button>
      </div>
    </>
  );
}

// Example 5: Using the useSEO hook instead of component
import { useSEO } from "../hooks/useSEO";

export function HookSEOExample() {
  // Using the hook approach
  useSEO({
    title: "Using useSEO Hook - Bludora",
    description:
      "This example shows how to use the useSEO hook instead of the SEO component for more flexibility.",
    url: "https://bludora.vercel.app/hook-example",
    image: "/logo1.png",
    keywords: ["useSEO", "hook", "react", "seo", "meta tags"],
  });

  return (
    <div>
      <h1>Hook SEO Example</h1>
      <p>This page uses the useSEO hook instead of the SEO component.</p>
      <p>
        The hook approach gives you more control over when and how SEO tags are
        updated.
      </p>
    </div>
  );
}

export default {
  BasicSEOExample,
  FullSEOExample,
  BlogPostSEOExample,
  ProductSEOExample,
  HookSEOExample,
};
