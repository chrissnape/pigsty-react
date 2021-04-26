import { FC, Fragment } from 'react';
import { FaImages } from "react-icons/fa";
import { Image as ImageType } from '../../utils/types';
import { Thumbnail, Image, Number, Overlay } from './style';

type Props = {
  images: Array<ImageType>,
}

const ThumbnailComponent: FC<Props> = ({images}): JSX.Element => (
  <Thumbnail>
    {images.length > 0 ? (
      <Fragment>
        <Image src={images[0].url} data-testid="image"/>
        <Overlay>
          <FaImages />
          <Number data-testid="number">
            {images.length}
          </Number>
        </Overlay>
      </Fragment>
    ) : (
      <FaImages data-testid="placeholder"/>
    )}
  </Thumbnail>
);

export default ThumbnailComponent;
