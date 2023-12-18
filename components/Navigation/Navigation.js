import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favourites">Favourites</Link>
    </>
  );
}
