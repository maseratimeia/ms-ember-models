import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),

	url: DS.attr('string'),

	default_owner: DS.belongsTo('user', { async: true }),

	location: DS.belongsTo('location', { async: true }),

	locations: DS.hasMany('location', { async: true }),

	//

	content_photo_en: DS.attr('string'),

	content_title_en: DS.attr('string'),

	content_subtitle_en: DS.attr('string'),

	content_description_en: DS.attr('string'),

	content_footer_en: DS.attr('string'),

	//

	content_photo_ar: DS.attr('string'),

	content_title_ar: DS.attr('string'),

	content_subtitle_ar: DS.attr('string'),

	content_description_ar: DS.attr('string'),

	content_footer_ar: DS.attr('string'),

	//

	floodlight_1_id: DS.attr('string'),

	floodlight_1_cat: DS.attr('string'),

	floodlight_1_type: DS.attr('string'),

	floodlight_2_id: DS.attr('string'),

	floodlight_2_cat: DS.attr('string'),

	floodlight_2_type: DS.attr('string'),

	floodlight_3_id: DS.attr('string'),

	floodlight_3_cat: DS.attr('string'),

	floodlight_3_type: DS.attr('string'),

	floodlight_4_id: DS.attr('string'),

	floodlight_4_cat: DS.attr('string'),

	floodlight_4_type: DS.attr('string'),

	facebook_1_id: DS.attr('string'),

	facebook_1_action: DS.attr('string'),

	//

});
