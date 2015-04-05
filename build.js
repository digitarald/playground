require('shelljs/global');

var files = [

  "license.txt",

  "src/lib/Whammy.js",
  "src/lib/Ease.js",

  "src/Playground.js",
  "src/Utils.js",

  "src/Events.js",
  "src/States.js",
  "src/Application.js",
  "src/GameLoop.js",
  "src/Gamepads.js",
  "src/Keyboard.js",
  "src/Loader.js",
  "src/Mouse.js",
  "src/Sound.js",
  "src/SoundWebAudioAPI.js",
  "src/SoundAudio.js",
  "src/Touch.js",
  "src/Tween.js",
  "src/VideoRecorder.js",
  "src/Atlases.js",
  "src/Fonts.js",
  "src/DefaultState.js",
  "src/LoadingScreen.js"

];

var builds = {

  "playground.js": [
    "src/lib/CanvasQuery.js",
    "src/layer/Layer.js",
    "src/layer/Transitions.js",
    "src/layer/LoadingScreen.js"
  ],

  "playground-base.js": [

  ]

};

for (var key in builds) {

  var extra = builds[key];

  var output = cat(files.concat(extra));
  
  output.to("build/" + key);

}

cp("-f", "build/playground.js", "docs/script/playground.js");
cp("-f", "build/playground-base.js", "docs/script/playground-base.js");
cp("-fR", "plugins/", "docs/script/playground/");

cp("-f", "build/playground.js", "docs/standalone/playground/script/lib/playground.js");
cp("-f", "build/playground-base.js", "docs/standalone/playground-base/script/lib/playground.js");

var prevDir = pwd();
cd("docs/standalone/");
exec("zip -r playground.zip playground/*");
exec("zip -r playground-base.zip playground-base/*");
cd(prevDir);

