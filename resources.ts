import global from './global'
import home from './home'

export const resources = {
  en: {
    translation: {
      en: 'English',
      ...home.en
    }
  },
  zh: {
    translation: {
      zh: '简体中文',
      ...home.zh
    }
  },
  global
};