import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba16.caption'),
          title: i18n.t('forms.application.sitemap.proba16.title'),
          children: [{
            link: 'i-i-s-proba16-организация-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-организация-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proba16-должн-сотр-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-должн-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-должн-сотр-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-proba16-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-регист-анкеты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proba16-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-рег-результ-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proba16-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-планир-собес-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proba16-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proba16-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.proba16.i-i-s-proba16-вакант-должн-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})