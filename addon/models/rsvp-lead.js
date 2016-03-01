import DS from 'ember-data';

export default DS.Model.extend({

	event: DS.belongsTo('rsvp-event'),

	//

	first_name: DS.attr('string'),

    last_name: DS.attr('string'),

	//

	title: DS.attr('string'),

    //

    email: DS.attr('string'),

    mobile: DS.attr('string'),

});
