import DS from 'ember-data';

export default DS.Model.extend({

	url: DS.attr('string'),

    campaigns: DS.hasMany('campaign'),
    
});
