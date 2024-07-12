const headerContent = document.querySelector(".header__content");

const headerMover = () => {
  headerContent.style.top = `${newNumb(0, 700)}px`;
  headerContent.style.left = `${newNumb(0, 1400)}px`;
  console.log("hello");
};

headerContent.addEventListener("mouseover", headerMover);

const newNumb = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};


