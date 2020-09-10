import AutoPlay from './plugins/AutoPlay.js';
function MediaPlayer(config) {
    this.media = config.el;
    // Usamos plugin
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    })
    
  }
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };
  

  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };

  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

  MediaPlayer.prototype.mute = function () {
    this.media.muted = true
  }

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el : video, plugins : [
    new AutoPlay()
  ] });

  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay();