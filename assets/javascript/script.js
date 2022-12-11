const toastTrigger = document.getElementById('connectButton')
const toastLiveExample = document.getElementById('connectToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalLogin'));
    modal.hide();
    toast.show()
  })
}

let audio;

function playAudio(url) {
  audio = new Audio(url);
  audio.play();
  audio.volume = 0.1;
  setTimeout(() => {
      audio.pause()
  }, 5100)
}

function stopAudio() {
  audio.pause()
}