import React, { ReactNode } from 'react';
interface ZoommentPropsType {
    theme?: 'light' | 'dark' | 'black';
    language?: 'en' | 'ru' | 'hyw' | 'hy' | 'zh' | string;
    gravatar?: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank';
    emotions?: string;
    preloader?: ReactNode;
}
declare const Zoomment: React.FC<ZoommentPropsType>;
export default Zoomment;
