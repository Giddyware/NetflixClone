// import { BrowseContainer } from "../containers/browse";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

const Browse = () => {
  //TODO: We need the series an films
  const { series } = useContent("series");
  const { films } = useContent("films");

  //TODO: We need slides
  const slides = selectionFilter({ series, films });

  //TODO: Pass it to the browse container

  // return <BrowseContainer slides={slides} />;
  return <BrowseContainer slides={slides} />;
};
export default Browse;
