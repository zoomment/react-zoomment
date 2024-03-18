import React, { ReactNode, useEffect } from 'react';

interface ZoommentPropsType {
  theme?: 'light' | 'dark' | 'black';
  language?: 'en' | 'ru' | 'hyw' | 'hy' | 'zh' | string;
  gravatar?:
    | '404'
    | 'mp'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'retro'
    | 'robohash'
    | 'blank';
  emotions?: string;
  preloader?: ReactNode;
}

const Zoomment: React.FC<ZoommentPropsType> = (props) => {
  const defaultProps = {
    theme: 'light',
    language: 'en',
    gravatar: 'monsterid',
    emotions: '❤️,😀,🪄,🥸,💡,🤔,💩,😢',
    ...props,
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.zoomment.com/zoomment.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="zoomment"
      data-theme={defaultProps.theme}
      data-language={defaultProps.language}
      data-gravatar={defaultProps.gravatar}
      data-emotions={defaultProps.emotions}
    >
      {props.preloader}
    </div>
  );
};

export default Zoomment;
