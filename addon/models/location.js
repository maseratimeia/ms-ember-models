import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),

	title: DS.attr('string'),
	address: DS.attr('string'),
	phone: DS.attr('string'),
	email: DS.attr('string'),
	google_maps: DS.attr('string'),

	primary_notification_email: DS.attr('string'),
	secondary_notification_email: DS.attr('string'),
	tertiary_notification_email: DS.attr('string'),
	quaternary_notification_email: DS.attr('string'),

	analytics: DS.attr('string'),

	country_code: DS.attr('string'),

	default_model: DS.belongsTo('model', { async: true }),

	default_language: DS.attr('string'),

	secondary_language: DS.attr('string'),

	country: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	dealer: DS.attr('string'),

});
