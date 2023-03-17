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
    agentName: "Raze",
    agentClass: "Duellist",
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

const controllersArray = [
  {
    img: "./img/Omen_v2.png",
    agentName: "Omen",
    agentClass: "controllers",
    linkLore: "https://valorant-lore.fandom.com/wiki/Omen",
  },
  {
    img: "./img/Brimstone.png",
    agentName: "Brimstone",
    agentClass: "controllers",
    linkLore: "https://valorant-lore.fandom.com/wiki/Brimstone",
  },
  {
    img: "./img/Astra.jpeg",
    agentName: "Astra",
    agentClass: "controllers",
    linkLore: "https://valorant-lore.fandom.com/wiki/Astra",
  },
  {
    img: "./img/Viper.png",
    agentName: "Viper",
    agentClass: "controllers",
    linkLore: "https://valorant-lore.fandom.com/wiki/Viper",
  },
];

const duellistsSection = {
  title: "Duellist",
  agents: duellistArray,
};

const controllersSection = {
  title: "Controllers",
  agents: controllersArray,
};

const sections = [duellistsSection, controllersSection];

for (let h = 0; h < sections.length; h++) {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("home");

  const listClassOl = document.createElement("ol");
  listClassOl.classList.add("class-list");

  const listClassLi = document.createElement("li");

  const agentTitleElement = document.createElement("h2");
  agentTitleElement.classList.add("class-valorant");
  agentTitleElement.textContent = sections[h].title;

  listClassLi.appendChild(agentTitleElement);
  listClassOl.appendChild(listClassLi);
  sectionElement.appendChild(listClassOl);
  document.body.appendChild(sectionElement);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("container");

  const agents = sections[h].agents;
  for (let g = 0; g < agents.length; g++) {
    const agent = agents[g];
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = agent.img;

    const agentInfosContainer = document.createElement("div");
    agentInfosContainer.classList.add("name-agent-and-agent-class-container");

    const agentName = document.createElement("p");
    agentName.classList.add("name-agent-and-agent-class");
    agentName.textContent = agent.agentName + " - ";

    const agentNameSpan = document.createElement("span");
    agentNameSpan.textContent = agent.agentClass;
    agentNameSpan.classList.add("color-duellist");

    const agentLink = document.createElement("a");
    agentLink.classList.add("description-under-name");
    agentLink.id = "link-agent";
    agentLink.href = agent.linkLore;
    agentLink.textContent = "Découvrir l'histoire de " + agent.agentName;
    agentLink.target = "_blank";

    agentName.appendChild(agentNameSpan);
    agentInfosContainer.appendChild(agentName);
    agentInfosContainer.appendChild(agentLink);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(agentInfosContainer);
    cardContainer.appendChild(cardElement);
    sectionElement.appendChild(cardContainer);
  }
}
