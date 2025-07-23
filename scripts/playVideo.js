(function () {
  const root = document.querySelector("#es-rc-content");
  if (!root) return;

  const video = root.querySelector(".es-video__video");
  const playButton = root.querySelector(".es-video__play");
  const playIcon = root.querySelector(".es-video__play-icon");
  const videoContainer = root.querySelector(".es-video");

  if (!video || !playButton || !playIcon || !videoContainer) return;

  let hideTimeout;

  const updateIcon = (isPlaying) => {
    playIcon.classList.toggle("es-is-pause", isPlaying);
  };

  const showButton = () => {
    clearTimeout(hideTimeout);
    playButton.classList.add("es-is-visible");
  };

  const hideButton = (delay = 0) => {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      playButton.classList.remove("es-is-visible");
    }, delay);
  };

  if (video.paused) {
    showButton();
    updateIcon(false);
  }

  playButton.addEventListener("click", () => {
    playButton.setAttribute(
      "aria-label",
      video.paused ? "Zapauzuj filmik" : "Odtwórz filmik"
    );
    playButton.setAttribute("aria-pressed", !video.paused);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
      videoContainer.classList.remove("es-is-playing");
      updateIcon(false);
      showButton();
    }
  });

  video.addEventListener("play", () => {
    videoContainer.classList.add("es-is-playing");
    updateIcon(true);
    hideButton(1000);
  });

  video.addEventListener("pause", () => {
    videoContainer.classList.remove("es-is-playing");
    updateIcon(false);
    showButton();
  });

  videoContainer.addEventListener("mouseenter", () => {
    if (!video.paused) {
      showButton();
      updateIcon(true);
    }
  });

  videoContainer.addEventListener("mouseleave", () => {
    if (!video.paused) {
      hideButton(1000);
    }
  });
})();
