
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg",
      barClass: "reaction-bar",
      txtClass: "reaction-txt",
      scoreClass: "reaction-score"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg",
      barClass: "memory-bar",
      txtClass: "memory-txt",
      scoreClass: "memory-score"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg",
      barClass: "verbal-bar",
      txtClass: "verbal-txt",
      scoreClass: "verbal-score"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg",
      barClass: "visual-bar",
      txtClass: "visual-txt",
      scoreClass: "visual-score"
    }
  ];

  const container = document.getElementById("summary-bars");

  data.forEach(item => {
    const bar = document.createElement("div");
    bar.className = item.barClass;

    bar.innerHTML = `
      <img src="${item.icon}" alt="${item.category} icon">
      <p class="${item.txtClass}">${item.category}</p>
      <p class="${item.scoreClass}">${item.score} / 100</p>
    `;

    container.appendChild(bar);
  });

