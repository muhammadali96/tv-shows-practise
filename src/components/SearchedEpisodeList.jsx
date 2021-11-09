import { useState } from "react";
import DisplayEpisodes from "./DisplayEpisodes";
import episodes from "../data/episodes.json";

export default function SearchedEpisodeList() {
  const [searchTerm, setSearchTerm] = useState("");
  //given searchTerm and a list of all episodes
  //return filteredEpisodes where only episodes whose summary OR name contains the search term should be displayed
  const filteredEpisodesList = filterEpisodes(searchTerm, episodes);

  return (
    <>
      <input
        className="search field"
        placeholder="enter search term"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DisplayEpisodes episodes={filteredEpisodesList} />;
    </>
  );
}

function filterEpisodes(query, episodes) {
  return episodes.filter(
    (episode) =>
      !query ||
      contains(episode.name, query) ||
      contains(episode.summary, query)
  );
}

function contains(a, b) {
  return a && b && a.toLowerCase().includes(b.toLowerCase());
}
