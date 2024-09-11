import ga4 from 'react-ga4';

export const init = () => ga4.initialize(import.meta.env.VITE_GA);

export const sendEvent = (name: string) =>
  ga4.event('screen_view', {
    app_name: 'myApp',
    screen_name: name,
  });

export const sendPageview = (path: string) =>
  ga4.send({
    hitType: 'pageview',
    page: path,
  });

export const sendGTAG = () => {
  ga4.gtag('js', Date.now());
  ga4.gtag('config', import.meta.env.VITE_GMT);
};
