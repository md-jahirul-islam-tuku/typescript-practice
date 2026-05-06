/*
  1. interface
  2. abstract class
*/

//* interface abstraction

interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Music playing...");
  }
  pause(): void {
    console.log("Music paused...");
  }
  stop(): void {
    console.log("Music stopped");
  }
}

const TukuPlayer = new MusicPlayer();

// TukuPlayer.play();
// TukuPlayer.pause();
// TukuPlayer.stop();

//* abstract class

abstract class Media {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class Music extends Media {   //use extends
  play(): void {
    console.log("Music playing....");
  }
  pause(): void {
    console.log("Music paused....");
  }
  stop(): void {
    console.log("Music stopped");
  }
}

const SaadPlayer = new Music();

SaadPlayer.play();
SaadPlayer.pause();
SaadPlayer.stop();
