import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} width={240} height={240} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
