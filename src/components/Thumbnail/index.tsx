import { FC, Fragment, MouseEventHandler } from 'react';
import { FaImages } from "react-icons/fa";
import { Image as ImageType } from '../../utils/types';
import { Thumbnail, Image, Number, Overlay } from './style';

type Props = {
  images: Array<ImageType>,
  onClick: MouseEventHandler,
}

const ThumbnailComponent: FC<Props> = ({images, onClick}): JSX.Element => (
  <Thumbnail onClick={onClick} data-testid="thumbnail">
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
