export default function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const allItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://batchbg.com/" },
    ...items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: item.name,
      item: item.url,
    })),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: allItems,
        }),
      }}
    />
  );
}