const card = {
  init: () => {
    const card = document.querySelector(".card");
    if (!card) return;
    card.onclick = () => {
      alert(`card clicked`);
    };
  },
};

export default card;
