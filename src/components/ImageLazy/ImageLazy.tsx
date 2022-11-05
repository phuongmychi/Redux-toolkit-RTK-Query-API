// This is component Image with Lazy load for more detail : https://web.dev/lazy-loading-images/
import React, {
  CSSProperties,
  FunctionComponent,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  Key,
} from 'react';
import { useImageBroken } from '../../hooks';

export type ImageLazyProps = {
  imgUrl: string;
  srcSet?: string;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  loading?: 'lazy' | 'eager';
  width?: number | string;
  height?: number | string;
  id?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  onKeyDown?: KeyboardEventHandler<HTMLImageElement>;
  onKeyPress?: KeyboardEventHandler<HTMLImageElement>;
  onError?: KeyboardEventHandler<HTMLImageElement>;
  style?: CSSProperties;
  alt?: string;
  key?: any;
};

const ImageLazy = React.memo(function ImageLazy({
  alt,
  onClick,
  style,
  height,
  onKeyPress,
  onKeyDown,
  id,
  crossOrigin,
  loading,
  imgUrl,
  width,
  className,
  key,
  onError,
  referrerPolicy,
  srcSet,
}: ImageLazyProps) {
  const isUrl = useImageBroken(imgUrl);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgLoadingRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!shouldLoad && imgLoadingRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(imgLoadingRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, imgLoadingRef]);
  return (
    <>
      <img
        src={
          isUrl
            ? imgUrl
            : 'https://antoree-v1-prod-files.s3.ap-southeast-1.amazonaws.com/user_196374/campaigns/file_1647619503_6234adafdec6f8.79189829.png'
        }
        srcSet={srcSet}
        referrerPolicy={referrerPolicy}
        key={imgUrl}
        onError={onError}
        alt={alt}
        width={width}
        height={height}
        style={style}
        loading={loading}
        crossOrigin={crossOrigin}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onKeyPress={onKeyPress}
        className={`${className} `}
        id={id}
      />
    </>
  );
});

export default ImageLazy;
