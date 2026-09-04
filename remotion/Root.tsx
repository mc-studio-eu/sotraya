import {Composition} from 'remotion';
import {SotrayaFilm} from './SotrayaFilm';

export const RemotionRoot = () => {
  return (
    <Composition
      id="SotrayaFilm"
      component={SotrayaFilm}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{}}
    />
  );
};
