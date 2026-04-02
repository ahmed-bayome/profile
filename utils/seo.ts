import { Metadata } from 'next';

export const doMetadata = (props: { title: string; description: string; }): Metadata => {
  const { title, description } = props;
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    title,
    description,
    openGraph: {
      title,
      description
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
};
