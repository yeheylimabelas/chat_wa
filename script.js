const audioPlayer = document.getElementById("audioPlayer");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioPlayer3 = document.getElementById("audioPlayer3");

const toggleAudioButton = document.getElementById("toggleAudio");
const toggleAudioButton2 = document.getElementById("toggleAudio2");
const toggleAudioButton3 = document.getElementById("toggleAudio3");

let currentAudio = null; // Menyimpan audio yang sedang diputar

function playAudio(audio, button, buttonText) {
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset waktu ke awal
    // Ubah teks tombol yang sedang aktif
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
    button.textContent = buttonText; // Ubah teks tombol
    currentAudio = audio; // Set audio yang sedang aktif
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset waktu ke awal
    button.textContent = `Putar Lagu ${buttonText.split(" ")[2]}`; // Ubah kembali teks tombol
    currentAudio = null; // Reset audio yang sedang aktif
  }
}

let isDarkMode = true; // Awalnya, mode malam aktif
let isFirstTimeUsingLightMode = true; // Menandakan apakah ini penggunaan pertama mode terang

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
    document.documentElement.style.setProperty("--bg-ketik-pesan", "#adb5ba");
    document.documentElement.style.setProperty("--bg-textarea-ketik", "#fff");
    document.documentElement.style.setProperty("--bg-mic-send", "#1dab61");
    document.documentElement.style.setProperty("--bg-gulir", "#fafaf8");
    document.documentElement.style.setProperty("--bg-tanggal-hari", "#f7f7f7");
    document.documentElement.style.setProperty("--bg-modal", "#ffffff");
    document.documentElement.style.setProperty("--bg-title", "#000");
    document.documentElement.style.setProperty("--bg-lock-icon", "#25d367");
    document.documentElement.style.setProperty(
      "--bg-modal-pelajaari",
      "#1dab61"
    );
    document.documentElement.style.setProperty(
      "--bg-fa-battery-full",
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
      alertWarning.classList.remove("hidden"); // Tampilkan alert
      setTimeout(() => {
        alertWarning.classList.add("show"); // Tambahkan kelas show setelah sedikit delay untuk animasi
      }, 10); // Delay singkat untuk memastikan animasi berjalan
      isFirstTimeUsingLightMode = false; // Set flag jadi false setelah pertama kali ditampilkan
      // Menutup alert otomatis setelah 4 detik
      setTimeout(() => {
        closeAlert();
      }, 4000); // 4000 ms = 4 detik
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
    document.documentElement.style.setProperty("--bg-title", "#0b141b");
    document.documentElement.style.setProperty("--bg-lock-icon", "#f9fcfc");
    document.documentElement.style.setProperty(
      "--bg-modal-pelajaari",
      "#21c063"
    );
    document.documentElement.style.setProperty(
      "--bg-fa-battery-full",
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
  alertWarning.classList.remove("show"); // Hapus kelas show untuk menghilangkan animasi

  // Sembunyikan alert setelah animasi selesai
  setTimeout(() => {
    alertWarning.classList.add("hidden");
  }, 500); // Tunggu 500ms untuk menyembunyikan setelah animasi selesai
}

// Tambahkan event listener untuk tombol
document
  .getElementById("modeGelapTerang")
  .addEventListener("click", toggleMode);

toggleAudioButton.addEventListener("click", function () {
  playAudio(audioPlayer, toggleAudioButton, "Matikan Lagu 1");
});

toggleAudioButton2.addEventListener("click", function () {
  playAudio(audioPlayer2, toggleAudioButton2, "Matikan Lagu 2");
});

toggleAudioButton3.addEventListener("click", function () {
  playAudio(audioPlayer3, toggleAudioButton3, "Matikan Lagu 3");
});

document.querySelector(".peringatan").addEventListener("click", function () {
  const modal = document.getElementById("modalPopup");
  const modalContent = modal.querySelector(".modal-content");
  modal.classList.remove("hidden");
  modalContent.classList.add("show"); // Tampilkan modal dengan animasi
});

document.getElementById("closeModal").addEventListener("click", function () {
  const modal = document.getElementById("modalPopup");
  const modalContent = modal.querySelector(".modal-content");
  modalContent.classList.add("slide-out"); // Tambahkan animasi penutupan

  // Sembunyikan modal setelah animasi selesai
  setTimeout(() => {
    modal.classList.add("hidden");
    modalContent.classList.remove("slide-out");
    modalContent.classList.remove("show"); // Reset kelas
  }, 300); // Durasi animasi sama dengan CSS
});

// Sembunyikan modal jika pengguna mengklik di luar konten modal
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
  scrollTop = document.getElementById("modalPopup").scrollTop; // Ambil posisi scroll saat ini
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.pageY - lineScroll.offsetTop;
  const walk = (y - startY) * 2; // Scroll fast
  document.getElementById("modalPopup").scrollTop = scrollTop - walk; // Scroll modal
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    // Close modal if scrolled out of view
    const modal = document.getElementById("modalPopup");
    if (modal.scrollTop <= 0) {
      modal.classList.add("hidden");
    }
  }
});

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
  updateStatus(); // Mulai proses saat DOM siap
});

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "currentTime"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
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

// function setChatTime(bubble, isReceived) {
//   const timeElement = bubble.querySelector("span");
//   const now = new Date();
//   const timeString = `${String(now.getHours()).padStart(2, "0")}:${String(
//     now.getMinutes()
//   ).padStart(2, "0")}`;

//   if (timeElement) {
//     timeElement.innerHTML = `${timeString} ${
//       isReceived
//         ? '<i class="fas fa-check-double" style="font-size: 0.6rem;"></i>'
//         : ""
//     }`;
//     if (isReceived) {
//       bubble.classList.add("with-check"); // Tambahkan with-check untuk chat-right
//     }
//   }
// }

function updateDataUsage() {
  const randomKB = (Math.random() * 10).toFixed(1);
  document.getElementById("dataUsage").textContent = `${randomKB}KB/d`;
  const randomInterval = Math.floor(Math.random() * 5000) + 2000;
  setTimeout(updateDataUsage, randomInterval);
}

setInterval(updateTime, 1000);
updateTime();
updateDataUsage();

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

// Array untuk menyimpan semua chat sequence secara dinamis
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
let sequence2Visible = false;
// let sequence7Visible = false;

function playSound(isRightBubble) {
  const audio = new Audio(
    isRightBubble ? "./sound/sound_right.mp3" : "./sound/sound_left.mp3"
  );

  // Coba untuk memutar audio dan tangani error jika tidak diizinkan
  audio.play().catch((error) => {
    console.error("Failed to play sound:", error);
  });
}

// Function to show chat bubble
function showChatBubble(id, isRightBubble) {
  const chatBubble = document.getElementById(id);
  if (chatBubble) {
    chatBubble.classList.remove("hidden");
    setChatTime(chatBubble, isRightBubble);
    playSound(isRightBubble); // Play sound when chat bubble appears
  }
}

// Function to start chat sequence
// Tambahkan fungsi untuk men-disable/enable ikon mic/send
function toggleMicSendIcon(disable) {
  const micOrSendIcon = document.getElementById("micOrSendIcon");
  if (disable) {
    micOrSendIcon.classList.add("disabled"); // Menambahkan kelas disabled
    micOrSendIcon.onclick = null; // Nonaktifkan event click
  } else {
    micOrSendIcon.classList.remove("disabled");
  }
}

function typeWriter(textarea, text, index, callback) {
  if (index < text.length) {
    textarea.value += text.charAt(index);
    autoResize(textarea); // Resize textarea setelah menambahkan karakter
    setTimeout(() => {
      typeWriter(textarea, text, index + 1, callback); // Rekursif untuk karakter berikutnya
    }, 100); // Delay antara setiap karakter
  } else {
    callback(); // Panggil callback setelah selesai mengetik
  }
}
// Modifikasi fungsi startChatSequence
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
        textarea.value = ""; // Reset textarea

        toggleMicSendIcon(true); // Disable ikon mic/send

        // Menentukan pesan untuk setiap sequence yang membutuhkan input
        if (id === "sequence-2") {
          textarea.value = "Waalaikumsalam mas";
        } else if (id === "sequence-4") {
          textarea.value = "Iyaa sehat2 aja kok mas";
        } else if (id === "sequence-5") {
          textarea.value = "Tumben mas ngechat \nAda perihal apa ya?";
        } else if (id === "sequence-7") {
          textarea.value = "Iyaa dong mas biar gak kelamaan";
        } else if (id === "sequence-10") {
          textarea.value = "Kita adalah manusia";
        } else if (id === "sequence-12") {
          textarea.value = "Ohhh hablum minan nas";
        }

        autoResize(textarea); // Resize textarea otomatis

        // Mengatur event untuk ikon mic/send
        document.getElementById("micOrSendIcon").onclick = function () {
          if (textarea.value.trim() !== "") {
            showChatBubble(id, true); // Tampilkan balon chat
            currentSequenceIndex++;
            toggleMicSendIcon(true); // Disable ikon
            setTimeout(() => {
              toggleMicSendIcon(false); // Enable ikon setelah delay
              startChatSequence(); // Lanjutkan sequence
            }, delay); // Sesuaikan delay jika diperlukan
            textarea.value = ""; // Reset textarea
            autoResize(textarea); // Resize textarea lagi
          }
        };
      }
    }, delay);
  }
}

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

// Hide all chats on page load
function hideAllChats() {
  const chatBubbles = document.querySelectorAll(".hilang");
  chatBubbles.forEach((bubble) => bubble.classList.add("hidden"));
}

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

// Set chat time with checkmarks for right-side chats
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
        ? '<i class="fas fa-check-double" style="font-size: 0.6rem;" id="check-icon"></i>'
        : ""
    }`;

    if (isReceived) {
      bubble.classList.add("with-check");

      // Menunggu 3 detik sebelum mengubah warna ikon
      setTimeout(() => {
        const checkIcon = bubble.querySelector("#check-icon");
        if (checkIcon) {
          checkIcon.style.color = "#4fb9e4"; // Mengubah warna menjadi cyan
        }
      }, 1000);
    }
  }
}

// Misalkan ini adalah chat bubble yang ingin kamu set waktu
const chatBubbleLeft = document.getElementById("september-1"); // Bubble kiri
const chatBubbleRight = document.getElementById("september-2"); // Bubble kanan

// Set waktu manual untuk chat bubble kiri
setChatTime(chatBubbleLeft, false, "09:47");

// Set waktu manual untuk chat bubble kanan
setChatTime(chatBubbleRight, true, "10:02");

// Function for textarea auto resize
function autoResize(textarea) {
  textarea.style.height = "auto";
  const maxHeight = 5 * 24; // 5 lines of text
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
    paperclipIcon.style.marginRight = "0";
    micOrSendIcon.innerHTML = '<i class="fas fa-paper-plane text-white"></i>';
  } else {
    cameraIcon.style.display = "inline";
    paperclipIcon.style.marginRight = "0.5rem";
    micOrSendIcon.innerHTML = '<i class="fas fa-microphone text-white"></i>';
  }

  // Update posisi ikon gulir
  const textareaHeight = textarea.offsetHeight;
  scrollToBottomIcon.style.bottom = `${50 + textareaHeight}px`;
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("input", function () {
  autoResize(textarea);
});
