import React from "react";

function useRouter() {
  return {
    asPath: window.location.pathname, // Just a simple example for demonstration
  };
}

const siteMetadata = {
  siteUrl: "https://beacontechh.com/",
  title: "Beacon Techh - Navigating Brands to Digital Success",
  image: "/img/meta-img.png",
  twitterImage: "/img/meta-img.png",
  description:
    "Digital Agency, Software House, Digital Marketing, Website Development, Social Media Marketing, Video Production, Graphic Design, Logo Design, Social media posts, Software Development, Mobile App Development, Social Accounts Handling ",
};

function PageSEO({ title, description, ogType, ogImage }) {
  const router = useRouter();

  const siteUrl = siteMetadata.siteUrl + router.asPath;
  return (
    <React.Fragment>
      <head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {Array.isArray(ogImage) ? (
          ogImage.map(({ url }) => (
            <meta property="og:image" content={url} key={url} />
          ))
        ) : (
          <meta
            property="og:image"
            content={siteMetadata.image}
            key={ogImage}
          />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteMetadata.twitterImage} />
      </head>
    </React.Fragment>
  );
}

export default PageSEO;
