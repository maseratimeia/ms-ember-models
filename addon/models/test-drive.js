import DS from 'ember-data';
import Timestamps from 'sq-ember-authentication/mixins/timestamps';

export default DS.Model.extend(Timestamps, {

	request: DS.belongsTo('request'),

	test_drive: DS.attr('boolean'),

    model: DS.belongsTo('model', { async: true }),

    rating: DS.attr('number'),

	purchase: DS.attr('number'),

    photo: DS.attr('string'),

});
