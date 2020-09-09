import AutoPlay from '../plugins/AutoPlay';
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

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el : video, plugins : [
    new AutoPlay()
  ] });

  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay();