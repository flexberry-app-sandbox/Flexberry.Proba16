import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba16ВакантДолжнLForm from './forms/i-i-s-proba16-вакант-должн-l';
import IISProba16ДолжнСотрLForm from './forms/i-i-s-proba16-должн-сотр-l';
import IISProba16ОрганизацияLForm from './forms/i-i-s-proba16-организация-l';
import IISProba16ПланирСобесLForm from './forms/i-i-s-proba16-планир-собес-l';
import IISProba16РегРезультLForm from './forms/i-i-s-proba16-рег-результ-l';
import IISProba16РегистАнкетыLForm from './forms/i-i-s-proba16-регист-анкеты-l';
import IISProba16СотрудникиLForm from './forms/i-i-s-proba16-сотрудники-l';
import IISProba16ВакантДолжнEForm from './forms/i-i-s-proba16-вакант-должн-e';
import IISProba16ДолжнСотрEForm from './forms/i-i-s-proba16-должн-сотр-e';
import IISProba16ОрганизацияEForm from './forms/i-i-s-proba16-организация-e';
import IISProba16ПланирСобесEForm from './forms/i-i-s-proba16-планир-собес-e';
import IISProba16РегРезультEForm from './forms/i-i-s-proba16-рег-результ-e';
import IISProba16РегистАнкетыEForm from './forms/i-i-s-proba16-регист-анкеты-e';
import IISProba16СотрудникиEForm from './forms/i-i-s-proba16-сотрудники-e';
import IISProba16ВакантДолжнModel from './models/i-i-s-proba16-вакант-должн';
import IISProba16ДолжнСотрModel from './models/i-i-s-proba16-должн-сотр';
import IISProba16ОрганизацияModel from './models/i-i-s-proba16-организация';
import IISProba16ПланирСобесModel from './models/i-i-s-proba16-планир-собес';
import IISProba16РегРезультModel from './models/i-i-s-proba16-рег-результ';
import IISProba16РегистАнкетыModel from './models/i-i-s-proba16-регист-анкеты';
import IISProba16СотрудникиModel from './models/i-i-s-proba16-сотрудники';
import IISProba16ТЧРегРезультModel from './models/i-i-s-proba16-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba16-вакант-должн': IISProba16ВакантДолжнModel,
    'i-i-s-proba16-должн-сотр': IISProba16ДолжнСотрModel,
    'i-i-s-proba16-организация': IISProba16ОрганизацияModel,
    'i-i-s-proba16-планир-собес': IISProba16ПланирСобесModel,
    'i-i-s-proba16-рег-результ': IISProba16РегРезультModel,
    'i-i-s-proba16-регист-анкеты': IISProba16РегистАнкетыModel,
    'i-i-s-proba16-сотрудники': IISProba16СотрудникиModel,
    'i-i-s-proba16-т-ч-рег-результ': IISProba16ТЧРегРезультModel
  },

  'application-name': 'Proba16',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba16',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba16',
          title: 'Proba16'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba16: {
          caption: 'Proba16',
          title: 'Proba16',
          'i-i-s-proba16-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba16-должн-сотр-l': {
            caption: 'Должн сотр',
            title: ''
          },
          'i-i-s-proba16-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba16-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba16-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba16-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba16-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba16-вакант-должн-l': IISProba16ВакантДолжнLForm,
    'i-i-s-proba16-должн-сотр-l': IISProba16ДолжнСотрLForm,
    'i-i-s-proba16-организация-l': IISProba16ОрганизацияLForm,
    'i-i-s-proba16-планир-собес-l': IISProba16ПланирСобесLForm,
    'i-i-s-proba16-рег-результ-l': IISProba16РегРезультLForm,
    'i-i-s-proba16-регист-анкеты-l': IISProba16РегистАнкетыLForm,
    'i-i-s-proba16-сотрудники-l': IISProba16СотрудникиLForm,
    'i-i-s-proba16-вакант-должн-e': IISProba16ВакантДолжнEForm,
    'i-i-s-proba16-должн-сотр-e': IISProba16ДолжнСотрEForm,
    'i-i-s-proba16-организация-e': IISProba16ОрганизацияEForm,
    'i-i-s-proba16-планир-собес-e': IISProba16ПланирСобесEForm,
    'i-i-s-proba16-рег-результ-e': IISProba16РегРезультEForm,
    'i-i-s-proba16-регист-анкеты-e': IISProba16РегистАнкетыEForm,
    'i-i-s-proba16-сотрудники-e': IISProba16СотрудникиEForm
  },

});

export default translations;
