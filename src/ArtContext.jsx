import { createContext } from "react";

export const ArtContext = createContext({
  artList: [],
  setArtList: () => {},
  originalArtList: [],
  setOriginalArtList: () => {},
  selectedArtists: [],
  setSelectedArtists: () => {},
});
