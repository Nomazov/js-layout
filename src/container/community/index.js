import { createElement, createHeader } from "../../script/layout";

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

const createTabs = () => {
    const tabsDiv = createElement('div', 'tabs');

    const tab1 = createElement('button', 'tab', 'База знань');
    const tab2 = createElement('button', 'tab tab--active', 'Інформація');

    tabsDiv.append(tab1);
    tabsDiv.append(tab2);

    return tabsDiv;
};

const tabs = createTabs();
page.append(tabs);

const communityImage = createElement('img');
communityImage.src = '/img/community.png';
page.append(communityImage)

const infoDiv = createElement('div', 'info');
const infoTitle = createElement('h2', 'info__title', 'Що таке база знань?');
const infoText = createElement('p', 'info__text', 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.');
const infoActionBtn = createElement('button', 'info__action', "Перейти до ком'юніті у Телеграм");

infoDiv.appendChild(infoTitle);
infoDiv.appendChild(infoText);
infoDiv.appendChild(infoActionBtn);
page.appendChild(infoDiv);

