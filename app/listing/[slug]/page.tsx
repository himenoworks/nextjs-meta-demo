import type { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const meta = {
    title: `Slug ${slug}`,
    description: `Nextjs meta demo description ${slug}.`,
    image: `https://dummyimage.com/600x480/000/fff.jpg&text=this+${slug}`,
  };

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      images: [{ url: meta.image }],
    },
  };
}

const Listing = ({ params }: Props) => {
  const { slug } = params;
  return <div>Listing! {slug}</div>;
};

export default Listing;
