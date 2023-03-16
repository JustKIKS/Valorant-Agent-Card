// ##########
// ## Data ##
// ##########

const duellistArray = [
  {
    img: "./img/Jett 2.png",
    agentName: "Jett",
    agentClass: "Duellist",
    linkLore: "https://valorant-lore.fandom.com/wiki/Jett",
  },
  {
    img: "./img/Raze.png",
    agentName: "Raze 2",
    agentClass: "Duellist 2",
    linkLore: "https://valorant-lore.fandom.com/wiki/Raze",
  },
  {
    img: "./img/Phoenix.png",
    agentName: "Phoenix",
    agentClass: "Duellist",
    linkLore: "https://valorant-lore.fandom.com/wiki/Phoenix",
  },
  {
    img: "./img/Yoru.png",
    agentName: "Yoru",
    agentClass: "Duellist",
    linkLore: "https://valorant-lore.fandom.com/wiki/Yoru",
  },
  {
    img: "./img/Reyna.png",
    agentName: "Reyna",
    agentClass: "Duellist",
    linkLore: "https://valorant-lore.fandom.com/wiki/Reyna",
  },
];

// ##############################
// ## SECTION TITLE GENERATION ##
// ##############################

const sectionCard = document.createElement("section");
sectionCard.classList.add("home");

const listClassOl = document.createElement("ol");
sectionCard.classList.add("class-list");

const listClassLi = document.createElement("li");

const agentClass = document.createElement("h2");
agentClass.classList.add("class-valorant");
agentClass.textContent = "Duellist";

listClassLi.appendChild(agentClass);
listClassOl.appendChild(listClassLi);
sectionCard.appendChild(listClassOl);

// ######################
// ## CARDS GENERATION ##
// ######################

const cardContainer = document.createElement("div");
cardContainer.classList.add("container");

for (let i = 0; i < 5; i++) {
  console.log(duellistArray[i]);
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.src = duellistArray[i].img;

  const agentInfosContainer = document.createElement("div");
  agentInfosContainer.classList.add("name-agent-and-agent-class-container");

  const agentName = document.createElement("p");
  agentName.classList.add("name-agent-and-agent-class");
  agentName.textContent = duellistArray[i].agentName + " - ";

  const agentNameSpan = document.createElement("span");
  agentNameSpan.textContent = duellistArray[i].agentClass;
  agentNameSpan.classList.add("color-duellist");

  const agentLink = document.createElement("a");
  agentLink.classList.add("description-under-name");
  agentLink.id = "link-agent";
  agentLink.href = duellistArray[i].linkLore;
  agentLink.textContent =
    "Découvrir l'histoire de " + duellistArray[i].agentName;
  agentLink.target = "_blank";

  agentName.appendChild(agentNameSpan);
  agentInfosContainer.appendChild(agentName);
  agentInfosContainer.appendChild(agentLink);
  cardElement.appendChild(cardImage);
  cardElement.appendChild(agentInfosContainer);
  cardContainer.appendChild(cardElement);
  sectionCard.appendChild(cardContainer);
}

document.body.appendChild(sectionCard);
