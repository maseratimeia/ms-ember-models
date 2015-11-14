import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),

	en: DS.attr('string'),
	ar: DS.attr('string'),
	fr: DS.attr('string'),
	af: DS.attr('string'),

});
