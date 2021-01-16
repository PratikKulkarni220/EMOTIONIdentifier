var camera=document.getElementById("camera");
Webcam.set({
    width:300,
    height:450,
    image_format:'png',
    png_quality:99,
})

Webcam.attach("#camera");

function takeImage()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("snap_div").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C4KaFxxkZ/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
  }

  function gotResult(error, results){
if (error){
  console.error(error);

}else{
  console.log(results);
  document.getElementById("object").innerHTML= results[0]. label;
  }
}