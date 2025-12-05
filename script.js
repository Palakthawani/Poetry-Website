let currentIndex = 0;
const container = document.getElementById("poemContainer");

function loadPoems() {
  fetch('poems.json')
    .then(res => res.json())
    .then(poems => {
      showPoem(poems, currentIndex);

      document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentIndex > 0) currentIndex--;
        showPoem(poems, currentIndex);
      });

      document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentIndex < poems.length - 1) currentIndex++;
        showPoem(poems, currentIndex);
      });
    });
}

function showPoem(poems, index) {
  const poem = poems[index];
  container.innerHTML = `
    <div class="poem">
      <h2>${poem.title}</h2>
      <pre>${poem.content}</pre>
      <button class="like-btn" id="likeBtn">❤️ Like <span id="count">0</span></button>
    </div>
  `;
  let count = 0;
  document.getElementById("likeBtn").addEventListener("click", () => {
    count++;
    document.getElementById("count").textContent = count;
  });
}

// Load poems on page load
loadPoems();
