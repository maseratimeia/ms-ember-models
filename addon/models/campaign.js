import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),

	url: DS.attr('string'),

	default_owner: DS.belongsTo('user', { async: true }),

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

});
