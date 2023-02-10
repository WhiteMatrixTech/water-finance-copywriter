import global from './global'
import home from './home'
import notification from './notification'
import product from './product'

export const resources = {
  en: {
    translation: {
      en: 'English',
      ...home.en,
      ...product.en,
      ...notification.en
    }
  },
  zh: {
    translation: {
      zh: '简体中文',
      ...home.zh,
      ...product.zh,
      ...notification.zh
    }
  },
  global
};