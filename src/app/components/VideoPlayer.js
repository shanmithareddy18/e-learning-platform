"use client";

export default function VideoPlayer({ src }) {
  return (
    <div style={styles.container}>
      <video controls style={styles.video}>
        <source src={src} type="video/mp4" />
        Your browser does not support video
      </video>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px"
  },
  video: {
    width: "100%",
    maxWidth: "700px",
    borderRadius: "10px"
  }
};