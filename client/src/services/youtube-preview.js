import YouTubePlayer from "youtube-player";

function youtubePlayer({
  player,
  videoId,
  isPreview,
  startTime = 35,
  previewDuration = 20
}) {
  let videoPlayer;
  let playerVars;

  if (isPreview) {
    playerVars = {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 0,
      enablejsapi: 1,
      start: startTime,
      end: startTime + previewDuration,
      loop: 1
    };
  } else {
    playerVars = {
      autoplay: 1,
      showinfo: 0,
      controls: 1,
      rel: 0
    };
  }

  videoPlayer = YouTubePlayer(player, {
    videoId: videoId,
    playerVars: playerVars
  });

  if (isPreview) {
    videoPlayer.on("stateChange", event => {
      videoPlayer.playVideo();
    });

    videoPlayer.setVolume(0);
  }
  function ruin() {
    videoPlayer.destroy();
  }

  return {
    ruin
  };
}

export { youtubePlayer };
