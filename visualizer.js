const canvas = document.getElementById('AudioVisuals');
const context = canvas.getContext('2d');

function plotSine(ctx, xOffset, yOffset) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var scale = 20;

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgb(66,44,255)';

  // console.log("Drawing point...");
  // drawPoint(ctx, yOffset+step);

  var x = 4;
  var y = 0;

  while (x < width) {
    y = Math.Sine(xOffset) + 50;
    ctx.lineTo(x, y);
    x++;
  }

  ctx.stroke();
}

function draw() {
  context.clearRect(0, 0, 500, 500);
  //showAxes(context);

  //plotSine(context, step, 0);
  plotAudio();

  step += 4;
  window.requestAnimationFrame(draw);
}

var step = -4;
//draw();

function plotAudio(ctx, volume) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  ctx.clearRect(0, 0, width, height);
}
navigator.mediaDevices
  .getUserMedia({
    audio: true,
    video: false,
  })
  .then(function (stream) {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);

    let i = 1;

    scriptProcessor.onaudioprocess = function () {
      const array = new Uint8Array(analyser.frequencyBinCount);

      analyser.getByteFrequencyData(array);
      const arraySum = array.reduce((a, value) => a + value, 0);
      const average = arraySum / array.length;

      if (i < 200) {
        console.log(array);
      }
      //console.log(average);

      plotAudio(context, average);
      // colorPids(average);
      i += 1;
    };
  })
  .catch(function (err) {
    /* handle the error */
    console.error(err);
  });
