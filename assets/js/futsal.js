const activities = [
  {
    title: "第6回",
    date: "2025-08-20",
    desc: "詳細説明3",
    img: "assets/image/footsal_2025_08_03.jpg",
  },
  {
    title: "第5回",
    date: "2025-02-20",
    desc: "詳細説明3",
    img: "assets/image/footsal_2025_02_01.jpg",
  },
  {
    title: "第4回",
    date: "2025-01-05",
    desc: "詳細説明3",
    img: "assets/image/footsal_2025_01_01.jpg",
  },
  {
    title: "第3回",
    date: "2024-10-01",
    desc: "詳細説明3",
    img: "assets/image/footsal_2024_10_01.jpg",
  },
  {
    title: "第2回",
    date: "2024-07-01",
    desc: "詳細説明2",
    img: "assets/image/footsal_2024_07_01.jpg",
  },
  {
    title: "第1回",
    date: "2024-04-01",
    desc: "詳細説明1",
    img: "assets/image/footsal_2024_04_01.jpg",
  },
];

// カード生成
const futsalContents = document.getElementById("futsalContents");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");

activities.forEach((act) => {
  const article = document.createElement("article");
  article.className = "futsal-item";
  article.innerHTML = `
    <img src="${act.img}" alt="${act.title}">
    <h3>${act.title}</h3>
    <time>${act.date}</time>
  `;
  futsalContents.appendChild(article);

  // クリックでモーダル表示
  article.addEventListener("click", () => {
    modalImg.src = act.img;
    modalImg.alt = act.title;
    modalTitle.textContent = act.title;
    modalDate.textContent = act.date;
    modalDesc.textContent = act.desc;
    modal.classList.add("open"); // ← displayではなくclassを追加
    modal.setAttribute("aria-hidden", "false");
  });
});

// モーダル閉じる
modalClose.addEventListener("click", () => {
  modal.classList.remove("open"); // ← classを削除
  modal.setAttribute("aria-hidden", "true");
});

// 背景クリックでも閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});
