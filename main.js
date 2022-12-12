function startClassification() 
{
    navigator.mediadevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady)
}

function modelReady(){
    classifier.classify(goResults);
}