import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

	name: DS.attr('string'),

	email: DS.attr('string'),

	password: DS.attr('string'),

	role: DS.attr('string'),

	isShowroom: Ember.computed('role', function() {

		if ( this.get('role') === 'showroom' ) {
			return true;
		} else {
			return false;
		}

	}),

});
