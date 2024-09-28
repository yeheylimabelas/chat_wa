/*** Tampilan Jam Menit Detik Mulai */
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "currentTime"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
/*** Tampilan Jam Menit Detik Selesai ***/

/*** Tampilan Terakhir Dilihat Mulai ***/
function getLastSeenTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `Terakhir dilihat ${hours}:${minutes}`;
}

function updateStatus() {
  const statusElement = document.querySelector("#status");
  statusElement.textContent = "Online";
  setTimeout(() => {
    statusElement.textContent = getLastSeenTime();
    setTimeout(updateStatus, Math.random() * (8000 - 7000) + 7000); // 2-5 detik
  }, Math.random() * (9000 - 7000) + 7000); // 2-5 detik
}

document.addEventListener("DOMContentLoaded", function () {
  updateStatus();
});
/*** Tampilan Terakhir Dilihat Selesai ***/

/*** Tampilan Data Usage Mulai ***/
function updateDataUsage() {
  const randomKB = (Math.random() * 10).toFixed(1);
  document.getElementById("dataUsage").textContent = `${randomKB}KB/d`;
  const randomInterval = Math.floor(Math.random() * 5000) + 2000;
  setTimeout(updateDataUsage, randomInterval);
}

setInterval(updateTime, 1000);
updateTime();
updateDataUsage();
/*** Tampilan Data Usage Selesai ***/

/*** Tampilkan Header Animasi Mulai ***/
function showRandomIcons(iconIds, interval) {
  setInterval(() => {
    // Sembunyikan semua ikon
    iconIds.forEach((id) => {
      document.getElementById(id).classList.add("hidden");
    });

    // Pilih secara acak salah satu ikon
    const randomIndex = Math.floor(Math.random() * iconIds.length);
    const selectedIcon = iconIds[randomIndex];

    // Tampilkan ikon yang dipilih
    document.getElementById(selectedIcon).classList.remove("hidden");
  }, interval);
}

showRandomIcons(["wifi1", "wifi2", "wifi3", "wifiOff"], 2000);
showRandomIcons(["signal1", "signal2", "signalFull"], 2000);
const batteryIcons = [
  "battery-charging-full",
  "battery-charging-20",
  "battery-charging-50",
  "battery-charging-60",
  "battery-charging-80",
  "battery-charging-90",
  "battery-full",
];

let batteryIndex = 0;

setInterval(() => {
  batteryIcons.forEach((id) => {
    document.getElementById(id).classList.add("hidden");
  });

  document
    .getElementById(batteryIcons[batteryIndex])
    .classList.remove("hidden");

  batteryIndex = (batteryIndex + 1) % batteryIcons.length;
}, 1000);

document.getElementById(batteryIcons[0]).classList.remove("hidden");
/*** Tampilan Header Animasi Selesai ***/

/*** Pesan Whatsapp Mulai */
const phoneNumber = "6281326561934";

document.getElementById("videoIcon").addEventListener("click", function () {
  const message = "Aku mau vc kamu";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
});

document.getElementById("phoneIcon").addEventListener("click", function () {
  const message = "Aku mau teleponan sama kamu";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
});
/*** Pesan Whatsapp Selesai ***/

/*** Tampilan Popup Pengaturan Mulai ***/
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const moreDropdown = document.getElementById("moreDropdown");
  const musicDropdown = document.getElementById("musicDropdown");

  if (dropdownMenu.classList.contains("active")) {
    dropdownMenu.classList.remove("active");
    moreDropdown.classList.remove("active");
    musicDropdown.classList.remove("active");
  } else {
    dropdownMenu.classList.add("active");
    moreDropdown.classList.remove("active");
    musicDropdown.classList.remove("active");
  }
}

function showMoreDropdown(event) {
  event.preventDefault();
  const dropdownMenu = document.getElementById("dropdownMenu");
  const moreDropdown = document.getElementById("moreDropdown");
  const musicDropdown = document.getElementById("musicDropdown");

  dropdownMenu.classList.remove("active");
  moreDropdown.classList.add("active");
  musicDropdown.classList.remove("active");
}

function showMusicDropdown(event) {
  event.preventDefault();
  const moreDropdown = document.getElementById("moreDropdown");
  const musicDropdown = document.getElementById("musicDropdown");

  moreDropdown.classList.remove("active");
  musicDropdown.classList.add("active");
}

document.addEventListener("click", function (event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const moreDropdown = document.getElementById("moreDropdown");
  const musicDropdown = document.getElementById("musicDropdown");

  if (event.target.matches(".fa-ellipsis-v")) {
    return;
  } else if (event.target.matches(".more")) {
    if (event.target.textContent.includes("Lainnya Lagi")) {
      showMusicDropdown(event);
    } else {
      showMoreDropdown(event);
    }
  } else if (
    !dropdownMenu.contains(event.target) &&
    !moreDropdown.contains(event.target) &&
    !musicDropdown.contains(event.target)
  ) {
    dropdownMenu.classList.remove("active");
    moreDropdown.classList.remove("active");
    musicDropdown.classList.remove("active");
  }
});
/*** Tampilan Popup Pengaturan Selesai ***/

/*** Tampilan Audio Mulai ***/
const audioPlayer = document.getElementById("audioPlayer");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioPlayer3 = document.getElementById("audioPlayer3");

const toggleAudioButton = document.getElementById("toggleAudio");
const toggleAudioButton2 = document.getElementById("toggleAudio2");
const toggleAudioButton3 = document.getElementById("toggleAudio3");

let currentAudio = null;

function playAudio(audio, button, buttonText) {
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    if (currentAudio === audioPlayer) {
      toggleAudioButton.textContent = "Putar Lagu 1";
    } else if (currentAudio === audioPlayer2) {
      toggleAudioButton2.textContent = "Putar Lagu 2";
    } else if (currentAudio === audioPlayer3) {
      toggleAudioButton3.textContent = "Putar Lagu 3";
    }
  }

  if (audio.paused) {
    audio.play();
    button.textContent = buttonText;
    currentAudio = audio;
  } else {
    audio.pause();
    button.textContent = `Putar Lagu ${buttonText.split(" ")[2]}`;
    currentAudio = null;
  }
}

toggleAudioButton.addEventListener("click", function () {
  playAudio(audioPlayer, toggleAudioButton, "Matikan Lagu 1");
});

toggleAudioButton2.addEventListener("click", function () {
  playAudio(audioPlayer2, toggleAudioButton2, "Matikan Lagu 2");
});

toggleAudioButton3.addEventListener("click", function () {
  playAudio(audioPlayer3, toggleAudioButton3, "Matikan Lagu 3");
});

/*** Tampilan Audio Selesai ***/

/*** Tampilan Mode Gelap Terang Mulai ***/
let isDarkMode = true;
let isFirstTimeUsingLightMode = true;

function toggleMode() {
  const body = document.body;
  const toggleButton = document.getElementById("modeGelapTerang");
  const alertWarning = document.getElementById("alertWarning");

  if (isDarkMode) {
    // Mode terang
    document.documentElement.style.setProperty("--text-putih", "#202020");
    document.documentElement.style.setProperty("--text-gray-400", "#595e62");
    document.documentElement.style.setProperty("--bg-dark", "#fff");
    document.documentElement.style.setProperty("--bg-bubble-left", "#fff");
    document.documentElement.style.setProperty("--bg-bubble-right", "#d8fdd2");
    document.documentElement.style.setProperty("--bg-gray", "#cccccc");
    document.documentElement.style.setProperty("--bg-alert", "#feeecc");
    document.documentElement.style.setProperty(
      "--bg-teks-peringatan",
      "#626261"
    );
    document.documentElement.style.setProperty("--bg-header", "#fff");
    document.documentElement.style.setProperty("--bg-ketik-pesan", "#dde4e8");
    document.documentElement.style.setProperty("--bg-textarea-ketik", "#fff");
    document.documentElement.style.setProperty("--bg-mic-send", "#1dab61");
    document.documentElement.style.setProperty("--bg-gulir", "#fafaf8");
    document.documentElement.style.setProperty("--bg-tanggal-hari", "#f7f7f7");
    document.documentElement.style.setProperty("--bg-modal", "#ffffff");
    document.documentElement.style.setProperty("--bg-title", "#000");
    document.documentElement.style.setProperty("--bg-lock-icon", "#25d367");
    document.documentElement.style.setProperty("--bg-dropdown-menu", "#fff");
    document.documentElement.style.setProperty(
      "--bg-ketik-pesan-border",
      "#fff"
    );
    document.documentElement.style.setProperty(
      "--bg-dropdown-menu-hover",
      "#dde4e8"
    );
    document.documentElement.style.setProperty(
      "--bg-modal-pelajaari",
      "#1dab61"
    );
    document.documentElement.style.setProperty(
      "--bg-fa-battery-full",
      "#F59E0B"
    );
    document.documentElement.style.setProperty(
      "--bg-animation-battery",
      "#F59E0B"
    );
    document.documentElement.style.setProperty(
      "--bg-teks-tanggal-hari",
      "#505457"
    );
    document.documentElement.style.setProperty(
      "--bubble-after-left",
      "linear-gradient(223deg, #fff 0%, #fff 50%, transparent 50%, transparent)"
    );
    document.documentElement.style.setProperty(
      "--bubble-after-right",
      "linear-gradient(135deg, #d8fdd2 0%, #d8fdd2 50%, transparent 50%, transparent)"
    );

    body.style.backgroundImage = "var(--bg-image-light)";

    if (isFirstTimeUsingLightMode) {
      alertWarning.classList.remove("hidden");
      setTimeout(() => {
        alertWarning.classList.add("show");
      }, 10);
      isFirstTimeUsingLightMode = false;
      setTimeout(() => {
        closeAlert();
      }, 4000);
    }

    toggleButton.innerText = "Mode Terang";
  } else {
    // Mode malam
    document.documentElement.style.setProperty("--text-putih", "#ffffff");
    document.documentElement.style.setProperty("--text-gray-400", "#a0aec0");
    document.documentElement.style.setProperty("--bg-dark", "#121b22");
    document.documentElement.style.setProperty("--bg-bubble-left", "#212e36");
    document.documentElement.style.setProperty("--bg-bubble-right", "#005C4B");
    document.documentElement.style.setProperty("--bg-gray", "#2A2F32");
    document.documentElement.style.setProperty("--bg-alert", "#212e36");
    document.documentElement.style.setProperty("--bg-header", "#121b22");
    document.documentElement.style.setProperty("--bg-ketik-pesan", "#121b22");
    document.documentElement.style.setProperty("--bg-mic-send", "#00A884");
    document.documentElement.style.setProperty("--bg-gulir", "#283337");
    document.documentElement.style.setProperty("--bg-tanggal-hari", "#212e36");
    document.documentElement.style.setProperty("--bg-modal", "#0b141b");
    document.documentElement.style.setProperty("--bg-title", "#f9fcfc");
    document.documentElement.style.setProperty("--bg-lock-icon", "#f9fcfc");
    document.documentElement.style.setProperty("--bg-dropdown-menu", "#2a2f32");
    document.documentElement.style.setProperty(
      "--bg-ketik-pesan-border",
      "#2a2f32"
    );
    document.documentElement.style.setProperty(
      "--bg-dropdown-menu-hover",
      "#3b4a54"
    );
    document.documentElement.style.setProperty(
      "--bg-modal-pelajaari",
      "#21c063"
    );
    document.documentElement.style.setProperty(
      "--bg-fa-battery-full",
      "#ECFCCB"
    );
    document.documentElement.style.setProperty(
      "--bg-animation-battery",
      "#ECFCCB"
    );
    document.documentElement.style.setProperty(
      "--bg-teks-tanggal-hari",
      "#9CA3AF"
    );
    document.documentElement.style.setProperty(
      "--bg-teks-peringatan",
      "#fcd34d"
    );
    document.documentElement.style.setProperty(
      "--bg-textarea-ketik",
      "#3B4A54"
    );
    document.documentElement.style.setProperty(
      "--bubble-after-left",
      "linear-gradient(223deg, #212e36 0%, #212e36 50%, transparent 50%, transparent)"
    );
    document.documentElement.style.setProperty(
      "--bubble-after-right",
      "linear-gradient(135deg, #005C4B 0%, #005C4B 50%, transparent 50%, transparent)"
    );

    body.style.backgroundImage = "var(--bg-image-dark)";
    toggleButton.innerText = "Mode Gelap";
  }

  isDarkMode = !isDarkMode;
}

function closeAlert() {
  const alertWarning = document.getElementById("alertWarning");
  alertWarning.classList.remove("show");

  setTimeout(() => {
    alertWarning.classList.add("hidden");
  }, 500);
}

document
  .getElementById("modeGelapTerang")
  .addEventListener("click", toggleMode);
/*** Tampilan Mode Gelap Terang Selesai ***/

/*** Tampilan Popup Peringatan Privasi ***/
document.querySelector(".peringatan").addEventListener("click", function () {
  const modal = document.getElementById("modalPopup");
  const modalContent = modal.querySelector(".modal-content");
  modal.classList.remove("hidden");
  modalContent.classList.add("show");
});

document.getElementById("closeModal").addEventListener("click", function () {
  const modal = document.getElementById("modalPopup");
  const modalContent = modal.querySelector(".modal-content");
  modalContent.classList.add("slide-out");

  setTimeout(() => {
    modal.classList.add("hidden");
    modalContent.classList.remove("slide-out");
    modalContent.classList.remove("show");
  }, 300);
});

window.addEventListener("click", function (event) {
  const modal = document.getElementById("modalPopup");
  if (event.target === modal) {
    const modalContent = modal.querySelector(".modal");
    modalContent.classList.add("slide-out");
    setTimeout(() => {
      modal.classList.add("hidden");
      modalContent.classList.remove("slide-out");
      modalContent.classList.remove("show");
    }, 300);
  }
});

const lineScroll = document.querySelector(".line-scroll");
let isDragging = false;
let startY;
let scrollTop;

lineScroll.addEventListener("mousedown", (e) => {
  isDragging = true;
  startY = e.pageY - lineScroll.offsetTop;
  scrollTop = document.getElementById("modalPopup").scrollTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.pageY - lineScroll.offsetTop;
  const walk = (y - startY) * 2;
  document.getElementById("modalPopup").scrollTop = scrollTop - walk;
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    const modal = document.getElementById("modalPopup");
    if (modal.scrollTop <= 0) {
      modal.classList.add("hidden");
    }
  }
});
/*** Tampilan Popup Peringatan Privasi Selesai ***/

/*** Tampilan Chat Dimulai ***/
function hideAllChats() {
  const chatBubbles = document.querySelectorAll(".hilang");
  chatBubbles.forEach((bubble) => bubble.classList.add("hidden"));
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  const maxHeight = 5 * 24;
  if (textarea.scrollHeight <= maxHeight) {
    textarea.style.height = textarea.scrollHeight + "px";
  } else {
    textarea.style.height = maxHeight + "px";
  }

  const cameraIcon = document.getElementById("cameraIcon");
  const paperclipIcon = document.getElementById("paperclipIcon");
  const micOrSendIcon = document.getElementById("micOrSendIcon");
  const scrollToBottomIcon = document.getElementById("scrollToBottom");

  if (textarea.value.length > 0) {
    cameraIcon.style.display = "none";
    micOrSendIcon.innerHTML = '<i class="fas fa-paper-plane text-white"></i>';
  } else {
    cameraIcon.style.display = "inline";
    micOrSendIcon.innerHTML = '<i class="fas fa-microphone text-white"></i>';
  }

  const textareaHeight = textarea.offsetHeight;
  scrollToBottomIcon.style.bottom = `${50 + textareaHeight}px`;
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("input", function () {
  autoResize(textarea);
});

const chatSequence = [
  { id: "sequence-1", delay: 2000 },
  { id: "sequence-2", delay: 1000 },
  { id: "sequence-3", delay: 1000 },
  { id: "sequence-4", delay: 1000 },
  { id: "sequence-5", delay: 400 },
  { id: "sequence-6", delay: 1000 },
  { id: "sequence-7", delay: 1000 },
  { id: "sequence-8", delay: 1000 },
  { id: "sequence-9", delay: 1000 },
  { id: "sequence-10", delay: 1000 },
  { id: "sequence-11", delay: 1000 },
  { id: "sequence-12", delay: 1000 },
  { id: "sequence-13", delay: 1000 },
];

let currentSequenceIndex = 0;

function playSound(isRightBubble) {
  const audio = new Audio(
    isRightBubble ? "./sound/sound_right.mp3" : "./sound/sound_left.mp3"
  );

  audio.play().catch((error) => {
    console.error("Failed to play sound:", error);
  });
}

function showChatBubble(id, isRightBubble) {
  const chatBubble = document.getElementById(id);
  if (chatBubble) {
    chatBubble.classList.remove("hidden");
    setChatTime(chatBubble, isRightBubble);
    playSound(isRightBubble);
  }
}

function toggleMicSendIcon(disable) {
  const micOrSendIcon = document.getElementById("micOrSendIcon");
  if (disable) {
    micOrSendIcon.classList.add("disabled");
    micOrSendIcon.onclick = null;
  } else {
    micOrSendIcon.classList.remove("disabled");
  }
}

function typeWriter(textarea, text, index, callback) {
  if (index < text.length) {
    textarea.value += text.charAt(index);
    autoResize(textarea);
    setTimeout(() => {
      typeWriter(textarea, text, index + 1, callback);
    }, 100);
  } else {
    callback();
  }
}

function startChatSequence() {
  if (currentSequenceIndex < chatSequence.length) {
    const { id, delay } = chatSequence[currentSequenceIndex];

    setTimeout(() => {
      if ([1, 3, 6, 8, 9, 11, 13].includes(currentSequenceIndex + 1)) {
        // Sequence ini muncul otomatis
        showChatBubble(
          id,
          id.includes("sequence-2") || id.includes("sequence-4")
        );
        currentSequenceIndex++;
        startChatSequence(); // Panggil fungsi ini lagi untuk melanjutkan sequence
      } else {
        // Sequence ini memerlukan input dari pengguna
        const textarea = document.querySelector("textarea");
        textarea.value = "";

        toggleMicSendIcon(true);

        // if (id === "sequence-2") {
        //   textarea.value = "Waalaikumsalam mas";
        // } else if (id === "sequence-4") {
        //   textarea.value = "Iyaa sehat2 aja kok mas";
        // } else if (id === "sequence-5") {
        //   textarea.value = "Tumben mas ngechat \nAda perihal apa ya?";
        // } else if (id === "sequence-7") {
        //   textarea.value = "Iyaa dong mas biar gak kelamaan";
        // } else if (id === "sequence-10") {
        //   textarea.value = "Kita adalah manusia";
        // } else if (id === "sequence-12") {
        //   textarea.value = "Ohhh hablum minan nas";
        // }

        const messageElement = document.getElementById(id);
        const pElement = messageElement
          ? messageElement.querySelector("p")
          : null;
        if (pElement) {
          textarea.value = pElement.innerHTML.replace(/<br\s*\/?>/g, "\n");
        }

        autoResize(textarea);

        document.getElementById("micOrSendIcon").onclick = function () {
          if (textarea.value.trim() !== "") {
            showChatBubble(id, true);
            currentSequenceIndex++;
            toggleMicSendIcon(true);
            setTimeout(() => {
              toggleMicSendIcon(false);
              startChatSequence();
            }, delay);
            textarea.value = "";
            autoResize(textarea);
          }
        };
      }
    }, delay);
  }
}
/*** Tampilan Chat Dimulai Selesai **/

// Mulai urutan chat saat DOM siap
document.addEventListener("DOMContentLoaded", function () {
  hideAllChats();
  startChatSequence();

  document
    .getElementById("scrollToBottom")
    .addEventListener("click", function () {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });
});

function cleanAllChats() {
  const chatBubbles = document.querySelectorAll(".hilang");
  const tanggalSeptember = document.querySelectorAll(".tanggal-september");
  const peringatan = document.querySelectorAll(".peringatan");
  const september1 = document.querySelectorAll(".september-1");
  const september2 = document.querySelectorAll(".september-2");
  chatBubbles.forEach((bubble) => bubble.classList.add("hidden"));
  tanggalSeptember.forEach((bubble) => bubble.classList.add("hidden"));
  peringatan.forEach((bubble) => bubble.classList.add("hidden"));
  september1.forEach((bubble) => bubble.classList.add("hidden"));
  september2.forEach((bubble) => bubble.classList.add("hidden"));
}

/*** Tampilan Waktu Pada Tiap Chat Mulai */
function setChatTime(bubble, isReceived, manualTime) {
  const timeElement = bubble.querySelector("span");
  const timeString =
    manualTime ||
    `${String(new Date().getHours()).padStart(2, "0")}:${String(
      new Date().getMinutes()
    ).padStart(2, "0")}`;

  if (timeElement) {
    timeElement.innerHTML = `${timeString} ${
      isReceived
        ? // ? '<i class="fas fa-check-double" style="font-size: 0.6rem;" id="check-icon"></i>'
          '<span class="material-symbols-outlined align-top	" style="font-size: 1.1rem;" id="check-icon">done_all</span>'
        : ""
    }`;

    if (isReceived) {
      bubble.classList.add("with-check");

      setTimeout(() => {
        const checkIcon = bubble.querySelector("#check-icon");
        if (checkIcon) {
          checkIcon.style.color = "#4fb9e4";
        }
      }, 1000);
    }
  }
}

const chatBubbleLeft = document.getElementById("september-1");
const chatBubbleRight = document.getElementById("september-2");

setChatTime(chatBubbleLeft, false, "09:47");
setChatTime(chatBubbleRight, true, "10:02");
/*** Tampilan Waktu Pada Tiap Chat Selesai */

/*** Tampilan Kamera Mulai ***/
async function openCamera() {
  const cameraPopup = document.getElementById("cameraPopup");
  cameraPopup.classList.remove("hidden"); // Tampilkan popup kamera

  const video = document.getElementById("video");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
    });
    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing camera: ", error);
  }
  // Sembunyikan popup item setelah mengklik ikon kamera
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}

document
  .getElementById("popupCameraIcon")
  .addEventListener("click", openCamera);
document.getElementById("cameraIcon").addEventListener("click", openCamera);

window.addEventListener("click", function (event) {
  const cameraPopup = document.getElementById("cameraPopup");
  if (
    !cameraPopup.contains(event.target) &&
    !event.target.matches("#popupCameraIcon") &&
    !event.target.matches("#cameraIcon")
  ) {
    cameraPopup.classList.add("hidden");

    const video = document.getElementById("video");
    const stream = video.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  }
});
/*** Tampilan Kamera Selesai ***/

/*** Tampilan Attach File Mulai ***/
document.getElementById("paperclipIcon").addEventListener("click", function () {
  document.getElementById("popup").classList.toggle("hidden");
});

window.onclick = function (event) {
  if (
    event.target !== document.getElementById("paperclipIcon") &&
    !event.target.closest("#popup") &&
    !event.target.matches(".popup-item")
  ) {
    document.getElementById("popup").classList.add("hidden");
  }
};
/*** Tampilan Attach File Selesai ***/
