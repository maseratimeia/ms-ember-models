import DS from 'ember-data';
import Timestamps from 'ms-ember-authentication/mixins/timestamps';
import Ember from 'ember';

export default DS.Model.extend(Timestamps, {

	request: DS.belongsTo('request'),

	test_drive: DS.attr('boolean'),

    model: DS.belongsTo('model', { async: true }),

    rating: DS.attr('number'),

	purchase: DS.attr('number'),

    photo: DS.attr('string'),

	//

	photoSrc: Ember.computed('photo', function() {

		var config = this.container.lookupFactory('config:environment');
		var baseUrl = "/" + config.APP.api_namespace + "/files/photos/";

		if ( this.get('photo') ) {
			return baseUrl + this.get('photo');
		} else {
			return false;
		}

	}),

});
