import global from './global'
import home from './home'
import notification from './notification'

export const resources = {
  en: {
    translation: {
      en: 'English',
      ...home.en,
      ...notification.en
    }
  },
  zh: {
    translation: {
      zh: '简体中文',
      ...home.zh,
      ...notification.zh
    }
  },
  global
};