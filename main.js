noseX = 0;
noseY = 0;
rightEyeX = 0;
rightEyeY = 0;
leftEyeX = 0;
leftEyeY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/j5hqyCXD/clown-nose-removebg-preview.png')
    rightEye = loadImage('https://i.postimg.cc/zfKTZSJ4/eye-removebg-preview.png')
    leftEye = loadImage('https://i.postimg.cc/zfKTZSJ4/eye-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30)
    image(rightEye, rightEyeX, rightEyeY, 20, 20)
    image(leftEye, leftEyeX, leftEyeY, 20, 20)
}
function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-20;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("right_eye x = " + rightEyeX);
        console.log("right_eye y = " + rightEyeY);
        console.log("left_eye x = " + leftEyeX);
        console.log("left_eye y = " + leftEyeY);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y-6;
        leftEyeX = results[0].pose.leftEye.x-4;
        leftEyeY = results[0].pose.leftEye.y-3;
        }
}