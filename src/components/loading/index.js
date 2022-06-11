import { LockBody, Spinner, ReleaseBody, Picture } from "./styles/loading";

export default function Loading({ src, ...restProp }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />;
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
