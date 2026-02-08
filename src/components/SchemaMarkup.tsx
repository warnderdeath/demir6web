const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Demir6",
    "description": "Demir & Çelik sektöründe hizmet veren Demir6 modülü kullanıcıların Web platformu",
    "url": "https://demir6.com",
    "logo": "https://demir6.com/images/11.png",
    "foundingDate": "2014",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@demir6.com"
    },
    "sameAs": [
      "https://demir6.com"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Demir6",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "35"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
