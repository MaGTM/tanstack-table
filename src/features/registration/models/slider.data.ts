import type { SliderItem } from './registration.types'

const mockDescription =
  'Создавайте портфолио, находите единомышленников, профессионалов, которые помогут вам добиться успеха, находите коммерческие и TFP проекты, развивайте свою карьеру и раскрывайте свой потенциал!'

export const sliderSpecialistData: SliderItem[] = [
  {
    title: 'Модели',
    img: '/assets/images/registration/1.jpg',
    description: mockDescription,
  },
  {
    title: 'Фотографы',
    img: '/assets/images/registration/2.jpg',
    description: mockDescription,
  },
  {
    title: 'Видеографы',
    img: '/assets/images/registration/3.jpg',
    description: mockDescription,
  },
  {
    title: 'Контент-мейкеры',
    img: '/assets/images/registration/2.jpg',
    description: mockDescription,
  },
  {
    title: 'Визажисты',
    img: '/assets/images/registration/4.jpg',
    description: mockDescription,
  },
  {
    title: 'Стилисты',
    img: '/assets/images/registration/5.jpg',
    description: mockDescription,
  },
]

export const sliderUserData: SliderItem[] = [
  {
    title: 'Пользователь',
    img: '/assets/images/registration/6.jpg',
    description: 'Запечатлите лучшие моменты вашей жизни вместе с профессионалами',
  },
  {
    title: 'Бизнес',
    img: '/assets/images/registration/7.jpg',
    description:
      'Находите профессиональных специалистов, которые будут создавать лучший контент для вашего бизнеса и продвигать его!',
  },
]
