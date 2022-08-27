interface IItemList {
  name: string;
  link: string;
}

const listItem: IItemList[] = [
  { name: 'Главная', link: '/' },
  { name: 'Объявления', link: '/ads' },
  { name: 'Стол заявок', link: '/applications' },
  { name: 'Мероприятия', link: '/event' },
];

export { listItem };
