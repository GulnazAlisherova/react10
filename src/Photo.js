function Photo({ title, thumbnailUrl }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={thumbnailUrl} />
    </article>
  );
}

export default Photo;