import DS from 'ember-data';
import Timestamps from 'ms-ember-authentication/mixins/timestamps';

export default DS.Model.extend(Timestamps,{

	event: DS.belongsTo('rsvp-event'),

	//

	first_name: DS.attr('string'),

    last_name: DS.attr('string'),

	//

	title: DS.attr('string'),

	city: DS.attr('string'),

    //

    email: DS.attr('string'),

    mobile: DS.attr('string'),

    language: DS.attr('string', { defaultValue: 'en'} ),

	//

	primary_guest_first_name: DS.attr('string'),

	primary_guest_last_name: DS.attr('string'),

	secondary_guest_first_name: DS.attr('string'),

	secondary_guest_last_name: DS.attr('string'),

});
