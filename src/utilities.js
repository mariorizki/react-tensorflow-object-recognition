export const drawRect = (detections, ctx) => {
  detections.forEach(prediction => {
    // Get prediction result
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // Set styling
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = color;
    ctx.font = '18px Arial';
    ctx.fillStyle = color;

    // Draw Rectangle and Text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
