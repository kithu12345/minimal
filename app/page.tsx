import Hero from './_components/Hero';
import CollectionGrid from './_components/CollectionGrid';
import FeaturedProducts from './_components/FeaturedProducts';

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectionGrid />
      <FeaturedProducts />
    </main>
  );
}