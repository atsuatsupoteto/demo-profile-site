const activities = [
  {
    title: "活動1",
    date: "2025-09-01",
    desc: "詳細説明1",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動2",
    date: "2025-09-15",
    desc: "詳細説明2",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動3",
    date: "2025-09-20",
    desc: "詳細説明3",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動4",
    date: "2025-09-20",
    desc: "詳細説明3",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動5",
    date: "2025-09-20",
    desc: "詳細説明3",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動6",
    date: "2025-09-20",
    desc: "詳細説明3",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動7",
    date: "2025-09-20",
    desc: "詳細説明3",
    img: "https://placehold.jp/274x182.png",
  },
  {
    title: "活動8",
    date: "2025-09-20",
    desc: "詳細説明3",
    img: "https://placehold.jp/274x182.png",
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
