onmessage = (e: MessageEvent) => {
  const imageData: ImageData = e.data;

  imageData.data.fill(0);
  postMessage(imageData, [imageData.data.buffer]);
};
