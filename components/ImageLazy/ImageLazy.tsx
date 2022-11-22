// This is component Image with Lazy load
import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  MouseEventHandler,
  KeyboardEventHandler,
  useMemo,
} from "react";
import useImageBroken from "../../hooks/useImageBroken";

export type ImageLazyProps = {
  imgUrl: string;
  width?: number | string;
  height?: number | string;
  radiusBorder?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  onKeyDown?: KeyboardEventHandler<HTMLImageElement>;
  onKeyPress?: () => void;
  style?: CSSProperties;
  alt?: string;
  id?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  loading?: "lazy" | "eager";
  isLoading?: boolean;
};

const ImageLazy = React.memo(function ImageLazy({
  alt,
  radiusBorder,
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
  isLoading,
}: ImageLazyProps) {
  // check if image url work or not , it work  return true, else return false;
  const isUrl = useImageBroken(imgUrl);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgLoadingRef = useRef<HTMLDivElement>(null);
  function validURL(str: string) {
    var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
      return false;
    } else {
      return true;
    }
  }
  const getHttps = () => {
    const isvalidUrl = validURL(imgUrl);
    if (isvalidUrl) {
      return imgUrl?.replace("http://", "https://");
    } else {
      return imgUrl;
    }
  };
  const isUrlValid = getHttps();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!shouldLoad && imgLoadingRef?.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(imgLoadingRef?.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, imgLoadingRef]);

  const cssStyles = `
    #imgTeacher {
        padding-right:0px;
        width:320px;
        height:100%;
        border-radius:${radiusBorder}px;
    }
     #imgTeacherLoading {
        padding-right:0px;
        background-image: linear-gradient(#91C884, #CCD492,#7CB4E0);
        width:320px;
        height:180px;
        text-align:center;
        border-radius:${radiusBorder}px;
    }
   @media only screen and (max-width: 1440px) {
    #imgTeacher {
        width:100%;
        border-radius:${radiusBorder}px;
    }
    #imgTeacherLoading {
        padding-right:0px;
        background-image: linear-gradient(#91C884, #CCD492,#7CB4E0);
        width:300px;
        height:180px;
        text-align:center;
        border-radius:${radiusBorder}px;
    }
    }
    @media only screen and (max-width: 768px) {
    #imgTeacher {
        width:100%;
        border-radius:${radiusBorder}px;
    }
    #imgTeacherLoading {
        padding-right:0px;
        background-image: linear-gradient(#91C884, #CCD492,#7CB4E0);
        width:100%;
        height:180px;
        text-align:center;
        border-radius:${radiusBorder}px;
    }
    }`;
  if (isLoading) {
    return (
      <div
        id={id}
        className={className}
        style={{
          backgroundImage: "linear-gradient(#91C884, #CCD492,#7CB4E0)",
          borderRadius: "8px",
        }}
        ref={imgLoadingRef}
      >
        <p
          style={{
            paddingTop: "100px",
            color: "white",
            textAlign: "center",
          }}
        >
          Loading ...
        </p>
      </div>
    );
  }
  return (
    <>
      {shouldLoad ? (
        <picture>
          <source
            srcSet={
              isUrl ? isUrlValid : "https://phuongmychi.web.app/img/premium.jpg"
            }
            type="image/webp"
          />
          <img
            src={
              isUrl ? isUrlValid : "https://phuongmychi.web.app/img/premium.jpg"
            }
            alt={alt}
            loading={loading}
            crossOrigin={crossOrigin}
            onClick={onClick}
            style={style}
            height={height}
            width={width}
            id={id}
            onKeyPress={onKeyPress}
            className={className}
          />
        </picture>
      ) : (
        <>
          <div
            id={id}
            className={className}
            style={{
              backgroundImage: "linear-gradient(#91C884, #CCD492,#7CB4E0)",
              borderRadius: "8px",
            }}
            ref={imgLoadingRef}
          >
            <p
              style={{
                paddingTop: "100px",
                color: "white",
                textAlign: "center",
              }}
            >
              Loading ...
            </p>
          </div>
        </>
      )}
    </>
  );
});

export default ImageLazy;
