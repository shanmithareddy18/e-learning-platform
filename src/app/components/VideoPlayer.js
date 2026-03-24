export default function VideoPlayer() {
  return (
    <video controls style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}>
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}