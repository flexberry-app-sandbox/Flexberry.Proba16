import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba16-планир-собес', 'Unit | Model | i-i-s-proba16-планир-собес', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba16-вакант-должн',
    'model:i-i-s-proba16-должн-сотр',
    'model:i-i-s-proba16-организация',
    'model:i-i-s-proba16-планир-собес',
    'model:i-i-s-proba16-рег-результ',
    'model:i-i-s-proba16-регист-анкеты',
    'model:i-i-s-proba16-сотрудники',
    'model:i-i-s-proba16-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
