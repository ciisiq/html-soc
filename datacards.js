const cardsLeft = [
  {
    id: "1",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/free_bootcamp.png",
    title: "Cost",
    description: "School of Code is completely free for the bootcampers!",
  },

  {
    id: "3",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/everyone_welcome.png",
    title: "Everyone Welcome",
    description:
      "They say one size fits all doesn't work, but School of Code truly is for everyone!",
  },

  {
    id: "5",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/mentors_2.png",
    title: "Mentors",
    description:
      "Each bootcamper is paired with a professional software expert!",
  },

  {
    id: "7",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/pair_programming.png",
    title: "Pair Programming",
    description:
      "Collaborate in pairs and teams to reach more creative solutions to inevitable coding roadblocks.",
  },

  {
    id: "9",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/real_world_projects.png",
    title: "Real-world Projects",
    description:
      "Solve a real-world business problem in School of Code's Live Project week!",
  },

  {
    id: "11",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/job_placement.png",
    title: "Job Placement",
    description:
      "It's your career, but we're here to help! Our Partnerships Team work tirelessly to bring as many opportunities from the big wide world of tech as we can through School of Code. We have dedicated recruitment advisors from Spinks to help you frame your CVs, portfolios, and prepare for interviews.",
  },
];

const cardsRight = [
  {
    id: "2",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/curriculum.png",
    title: "Curriculum",
    description:
      "Learn to code in a highly supportive and collaborative environment.",
  },

  {
    id: "4",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/workshops_noFade.png",
    title: "Hands-on Workshops",
    description: "Learn with hands-on help from the best in the business!",
  },

  {
    id: "6",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/soft_skills.png",
    title: "Soft Skills",
    description:
      "Improve communication, presentation skills, all-round confidence and more!",
  },

  {
    id: "8",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/industry_talks.png",
    title: "Industry Talks",
    description:
      "Learn from those in the know with weekly talks from industry professionals",
  },

  {
    id: "10",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/energisers2.png",
    title: "Energisers",
    description:
      "Coding can be draining. Stay on-point with daily energising activities to stay fresh when coding.",
  },

  {
    id: "12",
    image:
      "/wp-content/themes/website-soc-main/front-end/home-page/images/networking.png",
    title: "Networking",
    description:
      "With weekly events, meet the right people to kickstart your career in tech!",
  },
];

const cardsContainer = document.getElementById("card-container");
const cardsLeftCont = document.getElementById("left-card");
const cardsRightCont = document.getElementById("right-card");

cardsLeft.forEach((e) => {
  const createCard = document.createElement("div");
  createCard.classList = "card";

  const creatImage = document.createElement("img");
  creatImage.classList = "image-card";
  creatImage.src = e.image;

  const createTextContainer = document.createElement("div");
  createTextContainer.classList = "cont-text";

  const createTitle = document.createElement("h3");
  createTitle.innerText = e.title;

  const createDescription = document.createElement("p");
  createDescription.classList = "description-card";
  createDescription.innerText = e.description;

  //Inset in the page
  cardsLeftCont.appendChild(createCard);
  createCard.appendChild(creatImage);
  createCard.appendChild(createTextContainer);
  createTextContainer.appendChild(createTitle);
  createTextContainer.appendChild(createDescription);
});

//Rith side

cardsRight.forEach((e) => {
  const createCard = document.createElement("div");
  createCard.classList = "card";

  const creatImage = document.createElement("img");
  creatImage.classList = "image-card";
  creatImage.src = e.image;

  const createTextContainer = document.createElement("div");
  createTextContainer.classList = "cont-text";

  const createTitle = document.createElement("h3");
  createTitle.innerText = e.title;

  const createDescription = document.createElement("p");
  createDescription.classList = "description-card";
  createDescription.innerText = e.description;

  //Inset in the page
  cardsRightCont.appendChild(createCard);
  createCard.appendChild(creatImage);
  createCard.appendChild(createTextContainer);
  createTextContainer.appendChild(createTitle);
  createTextContainer.appendChild(createDescription);
});
