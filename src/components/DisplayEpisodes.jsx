export default function DisplayEpisodes({ episodes }) {
  return (
    <>
      <h1>This is Level 100 of Tv Shows</h1>
      <div className="list of episodes">
        {episodes.map((episode) => (
          <DisplaySingleEpisode key={episode.id} SingleEpisode={episode} />
        ))}
      </div>
      <footer>
        Credits: Episode data is originally from the fantastic{" "}
        <a href="https://tvmaze.com/">TVmaze</a> via their{" "}
        <a href="https://www.tvmaze.com/api">API</a>.
      </footer>
    </>
  );
}

function DisplaySingleEpisode({ SingleEpisode }) {
  return (
    <div className="single-episode">
      <h3>
        {SingleEpisode.name} - {formatSeason(SingleEpisode)}
      </h3>
      <img src={SingleEpisode.image.medium} alt="single episode screengrab" />
      <p>{SingleEpisode.summary}</p>
    </div>
  );
}

function formatSeason(SingleEpisode) {
  return `S${SingleEpisode.season
    .toString()
    .padStart(2, "0")}E${SingleEpisode.number.toString().padStart(2, "0")}`;
}
