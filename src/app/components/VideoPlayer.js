export default function VideoPlayer({ src }) {
  return (
    <video width="700" controls>
      <source src={src} />
    </video>
  );
}