export const getImageUrl = (url: string) => {
  const imageWithFrame = url.match('/frames/');

  return imageWithFrame ? `${import.meta.env.VITE_IMAGE_URL}${url}` : url;
};
