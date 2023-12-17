import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image src={image} width={480} height={480} alt={image} />
      <p>{artist}</p>
    </>
  );
}
