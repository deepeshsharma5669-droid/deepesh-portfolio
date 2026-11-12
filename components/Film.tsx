export type FilmInfo = { src: string; poster: string; title: string; length: string };

/** Short product film of the real app, recorded on mock data. Loads nothing until the visitor presses play. */
export default function Film({ film }: { film: FilmInfo }) {
  return (
    <figure className="film">
      <video
        controls
        playsInline
        preload="none"
        poster={film.poster}
        width={1920}
        height={1080}
        aria-label={`${film.title}: product film, mock data`}
      >
        <source src={film.src} type="video/mp4" />
        Your browser can&apos;t play this video. <a href={film.src}>Download the film</a>.
      </video>
      <figcaption>
        <span className="film-badge">Product film · mock data</span>
        The real app, recorded on made-up data · {film.length} · no sound
      </figcaption>
    </figure>
  );
}
