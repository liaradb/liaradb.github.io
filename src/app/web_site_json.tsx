export const WebSiteJson = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LiaraDB",
  alternateName: ["Liara DB", "Liara Database", "Liara"],
  url: "liaradb.com",
};
