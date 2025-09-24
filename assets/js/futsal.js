const activities = [
  {
    title: "第6回",
    date: "2025-08-20",
    desc: "詳細説明3",
    img: [
      "assets/image/footsal_2025_08_03.jpg",
      "assets/image/footsal_2025_08_02.jpg",
      "assets/image/footsal_2025_08_01.jpg",
    ],
  },
  {
    title: "第5回",
    date: "2025-02-20",
    desc: "詳細説明3",
    img: ["assets/image/footsal_2025_02_01.jpg"],
  },
  {
    title: "第4回",
    date: "2025-01-05",
    desc: "詳細説明3",
    img: [
      "assets/image/footsal_2025_01_01.jpg",
      "assets/image/footsal_2025_01_02.jpg",
    ],
  },
  {
    title: "第3回",
    date: "2024-10-01",
    desc: "詳細説明3",
    img: ["assets/image/footsal_2024_10_01.jpg"],
  },
  {
    title: "第2回",
    date: "2024-07-01",
    desc: "詳細説明2",
    img: [
      "assets/image/footsal_2024_07_01.jpg",
      "assets/image/footsal_2024_07_02.jpg",
      "assets/image/footsal_2024_07_03.jpg",
    ],
  },
  {
    title: "第1回",
    date: "2024-04-01",
    desc: "詳細説明1",
    img: ["assets/image/footsal_2024_04_01.jpg"],
  },
];

// DOM取得
const futsalContents = document.getElementById("futsalContents");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");
const modalImages = document.getElementById("modalImages");

let swiper;

// カード生成
activities.forEach((act) => {
  const article = document.createElement("article");
  article.className = "futsal-item";
  article.innerHTML = `
    <img src="${act.img[0]}" alt="${act.title}">
    <h3>${act.title}</h3>
    <time>${act.date}</time>
  `;
  futsalContents.appendChild(article);

  // クリックでモーダル表示
  article.addEventListener("click", () => {
    // スライドをクリア
    modalImages.innerHTML = "";

    // 画像を追加
    act.img.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${src}" alt="${act.title}">`;
      modalImages.appendChild(slide);
    });

    // テキスト系セット
    modalTitle.textContent = act.title;
    modalDate.textContent = act.date;
    modalDesc.textContent = act.desc;

    // モーダル開く
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    // Swiper初期化（すでに存在する場合は破棄して再作成）
    if (swiper) swiper.destroy();
    swiper = new Swiper("#modalSwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
});

// モーダル閉じる
modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
});

// 背景クリックでも閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});
