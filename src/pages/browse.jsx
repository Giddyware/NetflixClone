import { useContent } from "../hooks";

const Browse = () => {
  //TODO: We need the series an films
  const { series } = useContent("series");
  console.log(series);
  //TODO: We need slides
  //TODO: Pass it to the browse container
  return <div>Browse</div>;
};
export default Browse;
