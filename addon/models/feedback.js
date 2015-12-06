import DS from 'ember-data';
import Timestamps from 'sq-ember-authentication/mixins/timestamps';

export default DS.Model.extend(Timestamps, {

	test_drive: DS.belongsTo('test_drive'),

    experience: DS.attr('number'),

	purchase: DS.attr('number'),

    comment: DS.attr('string'),

});
