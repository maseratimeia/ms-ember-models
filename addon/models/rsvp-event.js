import DS from 'ember-data';

export default DS.Model.extend({

	title_en: DS.attr('string'),

    title_ar: DS.attr('string'),

	//

	complete_copy_en: DS.attr('string'),

	complete_copy_ar: DS.attr('string'),

    //

    subtitle_en: DS.attr('string'),

    subtitle_ar: DS.attr('string'),

	//

	salutations_en: DS.attr('string'),

	salutations_ar: DS.attr('string'),

    //

    date_en: DS.attr('string'),

    date_ar: DS.attr('string'),

    //

    location_en: DS.attr('string'),

    location_ar: DS.attr('string'),

    //

    cities_en: DS.attr('string'),

    cities_ar: DS.attr('string'),

    //

	url: DS.attr('string'),

	default_owner: DS.belongsTo('user', { async: true }),

	//

	photo_1: DS.attr('string'),

    photo_2: DS.attr('string'),

    photo_3: DS.attr('string'),

    photo_4: DS.attr('string'),

    photo_5: DS.attr('string'),

    photo_6: DS.attr('string'),

    photo_7: DS.attr('string'),

    photo_8: DS.attr('string'),

    photo_9: DS.attr('string'),

	//

	xls_leads: DS.attr('string'),

	guest: DS.attr('boolean'),

	valid: DS.attr('boolean'),

});
