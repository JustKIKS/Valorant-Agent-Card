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

const initiatorsArray = [
  {
    img: "./img/Kayo.png",
    agentName: "Kay/o",
    agentClass: "initiators",
    linkLore: "https://valorant-lore.fandom.com/wiki/KAY/O",
  },
  {
    img: "./img/Breach_v2.png",
    agentName: "Breach",
    agentClass: "initiators",
    linkLore: "https://valorant-lore.fandom.com/wiki/Brimstone",
  },
  {
    img: "./img/Sova.png",
    agentName: "Sova",
    agentClass: "initiators",
    linkLore: "https://valorant-lore.fandom.com/wiki/Sova",
  },
  {
    img: "./img/Skye_v2.png",
    agentName: "Skye",
    agentClass: "initiators",
    linkLore: "https://valorant-lore.fandom.com/wiki/Skye",
  },
  {
    img: "./img/Fade.png",
    agentName: "Fade",
    agentClass: "initiators",
    linkLore: "https://valorant-lore.fandom.com/wiki/Fade",
  },
];

const sentinelsArray = [
  {
    img: "./img/Killjoy_v2.png",
    agentName: "Killjoy",
    agentClass: "sentinels",
    linkLore: "https://valorant-lore.fandom.com/wiki/Killjoy",
  },
  {
    img: "./img/Cypher_v2.png",
    agentName: "Cypher",
    agentClass: "sentinels",
    linkLore: "https://valorant-lore.fandom.com/wiki/Cypher",
  },
  {
    img: "./img/Sage_v2.png",
    agentName: "Sage",
    agentClass: "sentinels",
    linkLore: "https://valorant-lore.fandom.com/wiki/Sage",
  },
  {
    img: "./img/Chamber.jpeg",
    agentName: "Chamber",
    agentClass: "sentinels",
    linkLore: "https://valorant-lore.fandom.com/wiki/Chamber",
  },
];

// #############
// ## Section ##
// #############

const duellistsSection = {
  title: "Duellist",
  agents: duellistArray,
};

const controllersSection = {
  title: "Controllers",
  agents: controllersArray,
};

const initiatorsSection = {
  title: "Initiators",
  agents: initiatorsArray,
};

const sentinelsSection = {
  title: "Sentinels",
  agents: sentinelsArray,
};

// ##########
// ## Table-Loop ##
// ##########

const sections = [
  duellistsSection,
  controllersSection,
  initiatorsSection,
  sentinelsSection,
];

for (let h = 0; h < sections.length; h++) {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("home");

  const agentTitleElement = document.createElement("h2");
  agentTitleElement.classList.add("class-valorant");
  agentTitleElement.textContent = sections[h].title;

  sectionElement.appendChild(agentTitleElement);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("container");

  const agents = sections[h].agents;
  for (let i = 0; i < agents.length; i++) {
    const agent = agents[i];
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

    const div = document.getElementById("content");
    div.appendChild(sectionElement);
  }
}
