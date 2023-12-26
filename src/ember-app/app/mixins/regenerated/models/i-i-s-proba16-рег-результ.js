import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  неПринНаРаб: DS.attr('boolean'),
  принятНаРаб: DS.attr('boolean'),
  организация: DS.belongsTo('i-i-s-proba16-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba16-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba16-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba16-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  неПринНаРаб: {
    descriptionKey: 'models.i-i-s-proba16-рег-результ.validations.неПринНаРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  принятНаРаб: {
    descriptionKey: 'models.i-i-s-proba16-рег-результ.validations.принятНаРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba16-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba16-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba16-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba16-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    принятНаРаб: attr('Принят на раб', { index: 1 }),
    неПринНаРаб: attr('Не прин на раб', { index: 2 }),
    организация: belongsTo('i-i-s-proba16-организация', 'Организация', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    планирСобес: belongsTo('i-i-s-proba16-планир-собес', 'Планир собес', {
      иметьПриСебе: attr('Иметь при себе', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'иметьПриСебе' }),
    тЧРегРезульт: hasMany('i-i-s-proba16-т-ч-рег-результ', 'Т ч рег результ', {
      итогСобес: attr('Итог собес', { index: 0 }),
      оценкаКандид: attr('Оценка кандид', { index: 1 }),
      крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 2 }),
      сотрудники: belongsTo('i-i-s-proba16-сотрудники', 'Сотрудники', {
        фИОСотруд: attr('Ф и о сотруд', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фИОСотруд' })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba16-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    принятНаРаб: attr('Принят на раб', { index: 1 }),
    неПринНаРаб: attr('Не прин на раб', { index: 2 }),
    организация: belongsTo('i-i-s-proba16-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba16-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
