import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),
	video: DS.attr('string'),
	photo_jpg : DS.attr('string'),
	photo_jpg_ar : DS.attr('string'),
	photo_jpg_fr : DS.attr('string'),
	video_mp4 : DS.attr('string'),
	video_webm : DS.attr('string'),
	cta_url : DS.attr('string'),
	logo_svg : DS.attr('string'),
	tagline_svg_en : DS.attr('string'),
	tagline_svg_ar : DS.attr('string'),
	tagline_svg_fr : DS.attr('string'),
	hasTagline : DS.attr('boolean', { defaultValue: false } ),
	listed: DS.attr('boolean', { defaultValue: true } ),

});
