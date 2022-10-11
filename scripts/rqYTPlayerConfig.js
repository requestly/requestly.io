const rqYTPlayerConfig = `
if (typeof YT === "undefined") {
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
let onYouTubeIframeAPIReadyCallbacks = [];
for (let playerWrap of document.querySelectorAll(".rqYTPlayer")) {
  let playerFrame = playerWrap.querySelector("iframe");
  let onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
      playerWrap.classList.add("ended");
    } else if (event.data == YT.PlayerState.PAUSED) {
      playerWrap.classList.add("paused");
    } else if (event.data == YT.PlayerState.PLAYING) {
      playerWrap.classList.remove("ended");
      playerWrap.classList.remove("paused");
    }
  };
  let player;
  onYouTubeIframeAPIReadyCallbacks.push(function () {
    player = new YT.Player(playerFrame, {
      events: { onStateChange: onPlayerStateChange },
    });
  });
  playerWrap.addEventListener("click", function () {
    let playerState = player.getPlayerState();
    if (playerState == YT.PlayerState.ENDED) {
      player.seekTo(0);
    } else if (playerState == YT.PlayerState.PAUSED) {
      player.playVideo();
    }
  });
}
window.onYouTubeIframeAPIReady = function () {
  for (let callback of onYouTubeIframeAPIReadyCallbacks) {
    callback();
  }
};
window.hideYTActivated = true;  
`;

export default rqYTPlayerConfig;
