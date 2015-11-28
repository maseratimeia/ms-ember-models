import DS from 'ember-data';

export default DS.Model.extend({

	first_name: DS.attr('string'),

	last_name: DS.attr('string'),

	phone: DS.attr('string'),

	email: DS.attr('string'),

	current_model: DS.attr('string'),

	model: DS.belongsTo('model', { async: true }),

	location: DS.belongsTo('location', { async: true }),

	date: DS.attr('string'),

	title: DS.attr('string'),

	utm_campaign : DS.attr('string'),

	utm_source : DS.attr('string'),

	utm_term : DS.attr('string'),

	utm_medium : DS.attr('string'),

	utm_content : DS.attr('string'),

	domain : DS.attr('string'),

});
