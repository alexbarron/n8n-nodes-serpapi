import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleImagesFields: INodeProperties[] = [
	{
		displayName: '`q` Search Query',
		name: 'q',
		description:
			'Parameter defines the query you want to search. You can use anything that you would use in a regular Google Images search. e.g. inurl:, site:, intitle:.',
		default: 'coffee',
		routing: {
			request: {
				qs: {
					q: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['google_images'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['google_images'],
			},
		},
		options: [
			{
				displayName: '`location` Location',
				name: 'location',
				description:
					"Parameter defines from where you want the search to originate. If several locations match the location requested, we'll pick the most popular one. Head to the /locations.JSON API if you need more precise control. The location and uule parameters can't be used together. It is recommended to specify location at the city level in order to simulate a real user's search. If location is omitted, the search may take on the location of the proxy.",
				default: '',
				routing: {
					request: {
						qs: {
							location: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`uule` Encoded Location',
				name: 'uule',
				description:
					"Parameter is the Google encoded location you want to use for the search. uule and location parameters can't be used together.",
				default: '',
				routing: {
					request: {
						qs: {
							uule: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`google_domain` Domain',
				name: 'google_domain',
				description:
					'Parameter defines the Google domain to use. It defaults to google.com. Head to the Google domains for a full list of supported Google domains.',
				default: 'google.com',
				routing: {
					request: {
						qs: {
							google_domain: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'google.com',
						value: 'google.com',
					},
					{
						name: 'google.ad',
						value: 'google.ad',
					},
					{
						name: 'google.ae',
						value: 'google.ae',
					},
					{
						name: 'google.com.af',
						value: 'google.com.af',
					},
					{
						name: 'google.com.ag',
						value: 'google.com.ag',
					},
					{
						name: 'google.com.ai',
						value: 'google.com.ai',
					},
					{
						name: 'google.al',
						value: 'google.al',
					},
					{
						name: 'google.am',
						value: 'google.am',
					},
					{
						name: 'google.co.ao',
						value: 'google.co.ao',
					},
					{
						name: 'google.com.ar',
						value: 'google.com.ar',
					},
					{
						name: 'google.as',
						value: 'google.as',
					},
					{
						name: 'google.at',
						value: 'google.at',
					},
					{
						name: 'google.com.au',
						value: 'google.com.au',
					},
					{
						name: 'google.az',
						value: 'google.az',
					},
					{
						name: 'google.ba',
						value: 'google.ba',
					},
					{
						name: 'google.com.bd',
						value: 'google.com.bd',
					},
					{
						name: 'google.be',
						value: 'google.be',
					},
					{
						name: 'google.bf',
						value: 'google.bf',
					},
					{
						name: 'google.bg',
						value: 'google.bg',
					},
					{
						name: 'google.com.bh',
						value: 'google.com.bh',
					},
					{
						name: 'google.bi',
						value: 'google.bi',
					},
					{
						name: 'google.bj',
						value: 'google.bj',
					},
					{
						name: 'google.com.bn',
						value: 'google.com.bn',
					},
					{
						name: 'google.com.bo',
						value: 'google.com.bo',
					},
					{
						name: 'google.com.br',
						value: 'google.com.br',
					},
					{
						name: 'google.bs',
						value: 'google.bs',
					},
					{
						name: 'google.bt',
						value: 'google.bt',
					},
					{
						name: 'google.co.bw',
						value: 'google.co.bw',
					},
					{
						name: 'google.by',
						value: 'google.by',
					},
					{
						name: 'google.com.bz',
						value: 'google.com.bz',
					},
					{
						name: 'google.ca',
						value: 'google.ca',
					},
					{
						name: 'google.com.kh',
						value: 'google.com.kh',
					},
					{
						name: 'google.cd',
						value: 'google.cd',
					},
					{
						name: 'google.cf',
						value: 'google.cf',
					},
					{
						name: 'google.cg',
						value: 'google.cg',
					},
					{
						name: 'google.ch',
						value: 'google.ch',
					},
					{
						name: 'google.ci',
						value: 'google.ci',
					},
					{
						name: 'google.co.ck',
						value: 'google.co.ck',
					},
					{
						name: 'google.cl',
						value: 'google.cl',
					},
					{
						name: 'google.cm',
						value: 'google.cm',
					},
					{
						name: 'google.com.co',
						value: 'google.com.co',
					},
					{
						name: 'google.co.cr',
						value: 'google.co.cr',
					},
					{
						name: 'google.com.cu',
						value: 'google.com.cu',
					},
					{
						name: 'google.cv',
						value: 'google.cv',
					},
					{
						name: 'google.com.cy',
						value: 'google.com.cy',
					},
					{
						name: 'google.cz',
						value: 'google.cz',
					},
					{
						name: 'google.de',
						value: 'google.de',
					},
					{
						name: 'google.dj',
						value: 'google.dj',
					},
					{
						name: 'google.dk',
						value: 'google.dk',
					},
					{
						name: 'google.dm',
						value: 'google.dm',
					},
					{
						name: 'google.com.do',
						value: 'google.com.do',
					},
					{
						name: 'google.dz',
						value: 'google.dz',
					},
					{
						name: 'google.com.ec',
						value: 'google.com.ec',
					},
					{
						name: 'google.ee',
						value: 'google.ee',
					},
					{
						name: 'google.com.eg',
						value: 'google.com.eg',
					},
					{
						name: 'google.es',
						value: 'google.es',
					},
					{
						name: 'google.com.et',
						value: 'google.com.et',
					},
					{
						name: 'google.fi',
						value: 'google.fi',
					},
					{
						name: 'google.fm',
						value: 'google.fm',
					},
					{
						name: 'google.com.fj',
						value: 'google.com.fj',
					},
					{
						name: 'google.fr',
						value: 'google.fr',
					},
					{
						name: 'google.ga',
						value: 'google.ga',
					},
					{
						name: 'google.ge',
						value: 'google.ge',
					},
					{
						name: 'google.com.gh',
						value: 'google.com.gh',
					},
					{
						name: 'google.com.gi',
						value: 'google.com.gi',
					},
					{
						name: 'google.gl',
						value: 'google.gl',
					},
					{
						name: 'google.gm',
						value: 'google.gm',
					},
					{
						name: 'google.gp',
						value: 'google.gp',
					},
					{
						name: 'google.gr',
						value: 'google.gr',
					},
					{
						name: 'google.com.gt',
						value: 'google.com.gt',
					},
					{
						name: 'google.gy',
						value: 'google.gy',
					},
					{
						name: 'google.com.hk',
						value: 'google.com.hk',
					},
					{
						name: 'google.hn',
						value: 'google.hn',
					},
					{
						name: 'google.hr',
						value: 'google.hr',
					},
					{
						name: 'google.ht',
						value: 'google.ht',
					},
					{
						name: 'google.hu',
						value: 'google.hu',
					},
					{
						name: 'google.co.id',
						value: 'google.co.id',
					},
					{
						name: 'google.iq',
						value: 'google.iq',
					},
					{
						name: 'google.ie',
						value: 'google.ie',
					},
					{
						name: 'google.co.il',
						value: 'google.co.il',
					},
					{
						name: 'google.co.in',
						value: 'google.co.in',
					},
					{
						name: 'google.is',
						value: 'google.is',
					},
					{
						name: 'google.it',
						value: 'google.it',
					},
					{
						name: 'google.je',
						value: 'google.je',
					},
					{
						name: 'google.com.jm',
						value: 'google.com.jm',
					},
					{
						name: 'google.jo',
						value: 'google.jo',
					},
					{
						name: 'google.co.jp',
						value: 'google.co.jp',
					},
					{
						name: 'google.co.ke',
						value: 'google.co.ke',
					},
					{
						name: 'google.ki',
						value: 'google.ki',
					},
					{
						name: 'google.kg',
						value: 'google.kg',
					},
					{
						name: 'google.co.kr',
						value: 'google.co.kr',
					},
					{
						name: 'google.com.kw',
						value: 'google.com.kw',
					},
					{
						name: 'google.kz',
						value: 'google.kz',
					},
					{
						name: 'google.la',
						value: 'google.la',
					},
					{
						name: 'google.com.lb',
						value: 'google.com.lb',
					},
					{
						name: 'google.li',
						value: 'google.li',
					},
					{
						name: 'google.lk',
						value: 'google.lk',
					},
					{
						name: 'google.co.ls',
						value: 'google.co.ls',
					},
					{
						name: 'google.lt',
						value: 'google.lt',
					},
					{
						name: 'google.lu',
						value: 'google.lu',
					},
					{
						name: 'google.lv',
						value: 'google.lv',
					},
					{
						name: 'google.com.ly',
						value: 'google.com.ly',
					},
					{
						name: 'google.co.ma',
						value: 'google.co.ma',
					},
					{
						name: 'google.md',
						value: 'google.md',
					},
					{
						name: 'google.mg',
						value: 'google.mg',
					},
					{
						name: 'google.mk',
						value: 'google.mk',
					},
					{
						name: 'google.ml',
						value: 'google.ml',
					},
					{
						name: 'google.com.mm',
						value: 'google.com.mm',
					},
					{
						name: 'google.mn',
						value: 'google.mn',
					},
					{
						name: 'google.ms',
						value: 'google.ms',
					},
					{
						name: 'google.com.mt',
						value: 'google.com.mt',
					},
					{
						name: 'google.mu',
						value: 'google.mu',
					},
					{
						name: 'google.mv',
						value: 'google.mv',
					},
					{
						name: 'google.mw',
						value: 'google.mw',
					},
					{
						name: 'google.com.mx',
						value: 'google.com.mx',
					},
					{
						name: 'google.com.my',
						value: 'google.com.my',
					},
					{
						name: 'google.co.mz',
						value: 'google.co.mz',
					},
					{
						name: 'google.com.na',
						value: 'google.com.na',
					},
					{
						name: 'google.ne',
						value: 'google.ne',
					},
					{
						name: 'google.com.ng',
						value: 'google.com.ng',
					},
					{
						name: 'google.com.ni',
						value: 'google.com.ni',
					},
					{
						name: 'google.nl',
						value: 'google.nl',
					},
					{
						name: 'google.no',
						value: 'google.no',
					},
					{
						name: 'google.com.np',
						value: 'google.com.np',
					},
					{
						name: 'google.nr',
						value: 'google.nr',
					},
					{
						name: 'google.nu',
						value: 'google.nu',
					},
					{
						name: 'google.co.nz',
						value: 'google.co.nz',
					},
					{
						name: 'google.com.om',
						value: 'google.com.om',
					},
					{
						name: 'google.com.pk',
						value: 'google.com.pk',
					},
					{
						name: 'google.com.pa',
						value: 'google.com.pa',
					},
					{
						name: 'google.com.pe',
						value: 'google.com.pe',
					},
					{
						name: 'google.com.ph',
						value: 'google.com.ph',
					},
					{
						name: 'google.pl',
						value: 'google.pl',
					},
					{
						name: 'google.com.pg',
						value: 'google.com.pg',
					},
					{
						name: 'google.com.pr',
						value: 'google.com.pr',
					},
					{
						name: 'google.ps',
						value: 'google.ps',
					},
					{
						name: 'google.pt',
						value: 'google.pt',
					},
					{
						name: 'google.com.py',
						value: 'google.com.py',
					},
					{
						name: 'google.com.qa',
						value: 'google.com.qa',
					},
					{
						name: 'google.ro',
						value: 'google.ro',
					},
					{
						name: 'google.rs',
						value: 'google.rs',
					},
					{
						name: 'google.ru',
						value: 'google.ru',
					},
					{
						name: 'google.rw',
						value: 'google.rw',
					},
					{
						name: 'google.com.sa',
						value: 'google.com.sa',
					},
					{
						name: 'google.com.sb',
						value: 'google.com.sb',
					},
					{
						name: 'google.sc',
						value: 'google.sc',
					},
					{
						name: 'google.se',
						value: 'google.se',
					},
					{
						name: 'google.com.sg',
						value: 'google.com.sg',
					},
					{
						name: 'google.sh',
						value: 'google.sh',
					},
					{
						name: 'google.si',
						value: 'google.si',
					},
					{
						name: 'google.sk',
						value: 'google.sk',
					},
					{
						name: 'google.com.sl',
						value: 'google.com.sl',
					},
					{
						name: 'google.sn',
						value: 'google.sn',
					},
					{
						name: 'google.sm',
						value: 'google.sm',
					},
					{
						name: 'google.so',
						value: 'google.so',
					},
					{
						name: 'google.sr',
						value: 'google.sr',
					},
					{
						name: 'google.com.sv',
						value: 'google.com.sv',
					},
					{
						name: 'google.td',
						value: 'google.td',
					},
					{
						name: 'google.tg',
						value: 'google.tg',
					},
					{
						name: 'google.co.th',
						value: 'google.co.th',
					},
					{
						name: 'google.com.tj',
						value: 'google.com.tj',
					},
					{
						name: 'google.tk',
						value: 'google.tk',
					},
					{
						name: 'google.tl',
						value: 'google.tl',
					},
					{
						name: 'google.tm',
						value: 'google.tm',
					},
					{
						name: 'google.to',
						value: 'google.to',
					},
					{
						name: 'google.tn',
						value: 'google.tn',
					},
					{
						name: 'google.com.tr',
						value: 'google.com.tr',
					},
					{
						name: 'google.tt',
						value: 'google.tt',
					},
					{
						name: 'google.com.tw',
						value: 'google.com.tw',
					},
					{
						name: 'google.co.tz',
						value: 'google.co.tz',
					},
					{
						name: 'google.com.ua',
						value: 'google.com.ua',
					},
					{
						name: 'google.co.ug',
						value: 'google.co.ug',
					},
					{
						name: 'google.co.uk',
						value: 'google.co.uk',
					},
					{
						name: 'google.com.uy',
						value: 'google.com.uy',
					},
					{
						name: 'google.co.uz',
						value: 'google.co.uz',
					},
					{
						name: 'google.com.vc',
						value: 'google.com.vc',
					},
					{
						name: 'google.co.ve',
						value: 'google.co.ve',
					},
					{
						name: 'google.vg',
						value: 'google.vg',
					},
					{
						name: 'google.co.vi',
						value: 'google.co.vi',
					},
					{
						name: 'google.com.vn',
						value: 'google.com.vn',
					},
					{
						name: 'google.vu',
						value: 'google.vu',
					},
					{
						name: 'google.ws',
						value: 'google.ws',
					},
					{
						name: 'google.co.za',
						value: 'google.co.za',
					},
					{
						name: 'google.co.zm',
						value: 'google.co.zm',
					},
					{
						name: 'google.co.zw',
						value: 'google.co.zw',
					},
				],
			},
			{
				displayName: '`gl` Country',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google Images search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries for a full list of supported Google countries.",
				default: 'us',
				routing: {
					request: {
						qs: {
							gl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Afghanistan - af',
						value: 'af',
					},
					{
						name: 'Albania - al',
						value: 'al',
					},
					{
						name: 'Algeria - dz',
						value: 'dz',
					},
					{
						name: 'American Samoa - as',
						value: 'as',
					},
					{
						name: 'Andorra - ad',
						value: 'ad',
					},
					{
						name: 'Angola - ao',
						value: 'ao',
					},
					{
						name: 'Anguilla - ai',
						value: 'ai',
					},
					{
						name: 'Antarctica - aq',
						value: 'aq',
					},
					{
						name: 'Antigua and Barbuda - ag',
						value: 'ag',
					},
					{
						name: 'Argentina - ar',
						value: 'ar',
					},
					{
						name: 'Armenia - am',
						value: 'am',
					},
					{
						name: 'Aruba - aw',
						value: 'aw',
					},
					{
						name: 'Australia - au',
						value: 'au',
					},
					{
						name: 'Austria - at',
						value: 'at',
					},
					{
						name: 'Azerbaijan - az',
						value: 'az',
					},
					{
						name: 'Bahamas - bs',
						value: 'bs',
					},
					{
						name: 'Bahrain - bh',
						value: 'bh',
					},
					{
						name: 'Bangladesh - bd',
						value: 'bd',
					},
					{
						name: 'Barbados - bb',
						value: 'bb',
					},
					{
						name: 'Belarus - by',
						value: 'by',
					},
					{
						name: 'Belgium - be',
						value: 'be',
					},
					{
						name: 'Belize - bz',
						value: 'bz',
					},
					{
						name: 'Benin - bj',
						value: 'bj',
					},
					{
						name: 'Bermuda - bm',
						value: 'bm',
					},
					{
						name: 'Bhutan - bt',
						value: 'bt',
					},
					{
						name: 'Bolivia - bo',
						value: 'bo',
					},
					{
						name: 'Bosnia and Herzegovina - ba',
						value: 'ba',
					},
					{
						name: 'Botswana - bw',
						value: 'bw',
					},
					{
						name: 'Bouvet Island - bv',
						value: 'bv',
					},
					{
						name: 'Brazil - br',
						value: 'br',
					},
					{
						name: 'British Indian Ocean Territory - io',
						value: 'io',
					},
					{
						name: 'Brunei Darussalam - bn',
						value: 'bn',
					},
					{
						name: 'Bulgaria - bg',
						value: 'bg',
					},
					{
						name: 'Burkina Faso - bf',
						value: 'bf',
					},
					{
						name: 'Burundi - bi',
						value: 'bi',
					},
					{
						name: 'Cambodia - kh',
						value: 'kh',
					},
					{
						name: 'Cameroon - cm',
						value: 'cm',
					},
					{
						name: 'Canada - ca',
						value: 'ca',
					},
					{
						name: 'Cape Verde - cv',
						value: 'cv',
					},
					{
						name: 'Cayman Islands - ky',
						value: 'ky',
					},
					{
						name: 'Central African Republic - cf',
						value: 'cf',
					},
					{
						name: 'Chad - td',
						value: 'td',
					},
					{
						name: 'Chile - cl',
						value: 'cl',
					},
					{
						name: 'China - cn',
						value: 'cn',
					},
					{
						name: 'Christmas Island - cx',
						value: 'cx',
					},
					{
						name: 'Cocos (Keeling) Islands - cc',
						value: 'cc',
					},
					{
						name: 'Colombia - co',
						value: 'co',
					},
					{
						name: 'Comoros - km',
						value: 'km',
					},
					{
						name: 'Congo - cg',
						value: 'cg',
					},
					{
						name: 'Congo, the Democratic Republic of the - cd',
						value: 'cd',
					},
					{
						name: 'Cook Islands - ck',
						value: 'ck',
					},
					{
						name: 'Costa Rica - cr',
						value: 'cr',
					},
					{
						name: "Cote D'ivoire - ci",
						value: 'ci',
					},
					{
						name: 'Croatia - hr',
						value: 'hr',
					},
					{
						name: 'Cuba - cu',
						value: 'cu',
					},
					{
						name: 'Cyprus - cy',
						value: 'cy',
					},
					{
						name: 'Czech Republic - cz',
						value: 'cz',
					},
					{
						name: 'Denmark - dk',
						value: 'dk',
					},
					{
						name: 'Djibouti - dj',
						value: 'dj',
					},
					{
						name: 'Dominica - dm',
						value: 'dm',
					},
					{
						name: 'Dominican Republic - do',
						value: 'do',
					},
					{
						name: 'Ecuador - ec',
						value: 'ec',
					},
					{
						name: 'Egypt - eg',
						value: 'eg',
					},
					{
						name: 'El Salvador - sv',
						value: 'sv',
					},
					{
						name: 'Equatorial Guinea - gq',
						value: 'gq',
					},
					{
						name: 'Eritrea - er',
						value: 'er',
					},
					{
						name: 'Estonia - ee',
						value: 'ee',
					},
					{
						name: 'Ethiopia - et',
						value: 'et',
					},
					{
						name: 'Falkland Islands (Malvinas) - fk',
						value: 'fk',
					},
					{
						name: 'Faroe Islands - fo',
						value: 'fo',
					},
					{
						name: 'Fiji - fj',
						value: 'fj',
					},
					{
						name: 'Finland - fi',
						value: 'fi',
					},
					{
						name: 'France - fr',
						value: 'fr',
					},
					{
						name: 'French Guiana - gf',
						value: 'gf',
					},
					{
						name: 'French Polynesia - pf',
						value: 'pf',
					},
					{
						name: 'French Southern Territories - tf',
						value: 'tf',
					},
					{
						name: 'Gabon - ga',
						value: 'ga',
					},
					{
						name: 'Gambia - gm',
						value: 'gm',
					},
					{
						name: 'Georgia - ge',
						value: 'ge',
					},
					{
						name: 'Germany - de',
						value: 'de',
					},
					{
						name: 'Ghana - gh',
						value: 'gh',
					},
					{
						name: 'Gibraltar - gi',
						value: 'gi',
					},
					{
						name: 'Greece - gr',
						value: 'gr',
					},
					{
						name: 'Greenland - gl',
						value: 'gl',
					},
					{
						name: 'Grenada - gd',
						value: 'gd',
					},
					{
						name: 'Guadeloupe - gp',
						value: 'gp',
					},
					{
						name: 'Guam - gu',
						value: 'gu',
					},
					{
						name: 'Guatemala - gt',
						value: 'gt',
					},
					{
						name: 'Guernsey - gg',
						value: 'gg',
					},
					{
						name: 'Guinea - gn',
						value: 'gn',
					},
					{
						name: 'Guinea-Bissau - gw',
						value: 'gw',
					},
					{
						name: 'Guyana - gy',
						value: 'gy',
					},
					{
						name: 'Haiti - ht',
						value: 'ht',
					},
					{
						name: 'Heard Island and Mcdonald Islands - hm',
						value: 'hm',
					},
					{
						name: 'Holy See (Vatican City State) - va',
						value: 'va',
					},
					{
						name: 'Honduras - hn',
						value: 'hn',
					},
					{
						name: 'Hong Kong - hk',
						value: 'hk',
					},
					{
						name: 'Hungary - hu',
						value: 'hu',
					},
					{
						name: 'Iceland - is',
						value: 'is',
					},
					{
						name: 'India - in',
						value: 'in',
					},
					{
						name: 'Indonesia - id',
						value: 'id',
					},
					{
						name: 'Iran, Islamic Republic of - ir',
						value: 'ir',
					},
					{
						name: 'Iraq - iq',
						value: 'iq',
					},
					{
						name: 'Ireland - ie',
						value: 'ie',
					},
					{
						name: 'Isle of Man - im',
						value: 'im',
					},
					{
						name: 'Israel - il',
						value: 'il',
					},
					{
						name: 'Italy - it',
						value: 'it',
					},
					{
						name: 'Jersey - je',
						value: 'je',
					},
					{
						name: 'Jamaica - jm',
						value: 'jm',
					},
					{
						name: 'Japan - jp',
						value: 'jp',
					},
					{
						name: 'Jordan - jo',
						value: 'jo',
					},
					{
						name: 'Kazakhstan - kz',
						value: 'kz',
					},
					{
						name: 'Kenya - ke',
						value: 'ke',
					},
					{
						name: 'Kiribati - ki',
						value: 'ki',
					},
					{
						name: "Korea, Democratic People's Republic of - kp",
						value: 'kp',
					},
					{
						name: 'Korea, Republic of - kr',
						value: 'kr',
					},
					{
						name: 'Kuwait - kw',
						value: 'kw',
					},
					{
						name: 'Kyrgyzstan - kg',
						value: 'kg',
					},
					{
						name: "Lao People's Democratic Republic - la",
						value: 'la',
					},
					{
						name: 'Latvia - lv',
						value: 'lv',
					},
					{
						name: 'Lebanon - lb',
						value: 'lb',
					},
					{
						name: 'Lesotho - ls',
						value: 'ls',
					},
					{
						name: 'Liberia - lr',
						value: 'lr',
					},
					{
						name: 'Libyan Arab Jamahiriya - ly',
						value: 'ly',
					},
					{
						name: 'Liechtenstein - li',
						value: 'li',
					},
					{
						name: 'Lithuania - lt',
						value: 'lt',
					},
					{
						name: 'Luxembourg - lu',
						value: 'lu',
					},
					{
						name: 'Macao - mo',
						value: 'mo',
					},
					{
						name: 'Macedonia, the Former Yugosalv Republic of - mk',
						value: 'mk',
					},
					{
						name: 'Madagascar - mg',
						value: 'mg',
					},
					{
						name: 'Malawi - mw',
						value: 'mw',
					},
					{
						name: 'Malaysia - my',
						value: 'my',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Mali - ml',
						value: 'ml',
					},
					{
						name: 'Malta - mt',
						value: 'mt',
					},
					{
						name: 'Marshall Islands - mh',
						value: 'mh',
					},
					{
						name: 'Martinique - mq',
						value: 'mq',
					},
					{
						name: 'Mauritania - mr',
						value: 'mr',
					},
					{
						name: 'Mauritius - mu',
						value: 'mu',
					},
					{
						name: 'Mayotte - yt',
						value: 'yt',
					},
					{
						name: 'Mexico - mx',
						value: 'mx',
					},
					{
						name: 'Micronesia, Federated States of - fm',
						value: 'fm',
					},
					{
						name: 'Moldova, Republic of - md',
						value: 'md',
					},
					{
						name: 'Monaco - mc',
						value: 'mc',
					},
					{
						name: 'Mongolia - mn',
						value: 'mn',
					},
					{
						name: 'Montenegro - me',
						value: 'me',
					},
					{
						name: 'Montserrat - ms',
						value: 'ms',
					},
					{
						name: 'Morocco - ma',
						value: 'ma',
					},
					{
						name: 'Mozambique - mz',
						value: 'mz',
					},
					{
						name: 'Myanmar - mm',
						value: 'mm',
					},
					{
						name: 'Namibia - na',
						value: 'na',
					},
					{
						name: 'Nauru - nr',
						value: 'nr',
					},
					{
						name: 'Nepal - np',
						value: 'np',
					},
					{
						name: 'Netherlands - nl',
						value: 'nl',
					},
					{
						name: 'Netherlands Antilles - an',
						value: 'an',
					},
					{
						name: 'New Caledonia - nc',
						value: 'nc',
					},
					{
						name: 'New Zealand - nz',
						value: 'nz',
					},
					{
						name: 'Nicaragua - ni',
						value: 'ni',
					},
					{
						name: 'Niger - ne',
						value: 'ne',
					},
					{
						name: 'Nigeria - ng',
						value: 'ng',
					},
					{
						name: 'Niue - nu',
						value: 'nu',
					},
					{
						name: 'Norfolk Island - nf',
						value: 'nf',
					},
					{
						name: 'Northern Mariana Islands - mp',
						value: 'mp',
					},
					{
						name: 'Norway - no',
						value: 'no',
					},
					{
						name: 'Oman - om',
						value: 'om',
					},
					{
						name: 'Pakistan - pk',
						value: 'pk',
					},
					{
						name: 'Palau - pw',
						value: 'pw',
					},
					{
						name: 'Palestinian Territory, Occupied - ps',
						value: 'ps',
					},
					{
						name: 'Panama - pa',
						value: 'pa',
					},
					{
						name: 'Papua New Guinea - pg',
						value: 'pg',
					},
					{
						name: 'Paraguay - py',
						value: 'py',
					},
					{
						name: 'Peru - pe',
						value: 'pe',
					},
					{
						name: 'Philippines - ph',
						value: 'ph',
					},
					{
						name: 'Pitcairn - pn',
						value: 'pn',
					},
					{
						name: 'Poland - pl',
						value: 'pl',
					},
					{
						name: 'Portugal - pt',
						value: 'pt',
					},
					{
						name: 'Puerto Rico - pr',
						value: 'pr',
					},
					{
						name: 'Qatar - qa',
						value: 'qa',
					},
					{
						name: 'Reunion - re',
						value: 're',
					},
					{
						name: 'Romania - ro',
						value: 'ro',
					},
					{
						name: 'Russian Federation - ru',
						value: 'ru',
					},
					{
						name: 'Rwanda - rw',
						value: 'rw',
					},
					{
						name: 'Saint Helena - sh',
						value: 'sh',
					},
					{
						name: 'Saint Kitts and Nevis - kn',
						value: 'kn',
					},
					{
						name: 'Saint Lucia - lc',
						value: 'lc',
					},
					{
						name: 'Saint Pierre and Miquelon - pm',
						value: 'pm',
					},
					{
						name: 'Saint Vincent and the Grenadines - vc',
						value: 'vc',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
					},
					{
						name: 'San Marino - sm',
						value: 'sm',
					},
					{
						name: 'Sao Tome and Principe - st',
						value: 'st',
					},
					{
						name: 'Saudi Arabia - sa',
						value: 'sa',
					},
					{
						name: 'Senegal - sn',
						value: 'sn',
					},
					{
						name: 'Serbia - rs',
						value: 'rs',
					},
					{
						name: 'Seychelles - sc',
						value: 'sc',
					},
					{
						name: 'Sierra Leone - sl',
						value: 'sl',
					},
					{
						name: 'Singapore - sg',
						value: 'sg',
					},
					{
						name: 'Slovakia - sk',
						value: 'sk',
					},
					{
						name: 'Slovenia - si',
						value: 'si',
					},
					{
						name: 'Solomon Islands - sb',
						value: 'sb',
					},
					{
						name: 'Somalia - so',
						value: 'so',
					},
					{
						name: 'South Africa - za',
						value: 'za',
					},
					{
						name: 'South Georgia and the South Sandwich Islands - gs',
						value: 'gs',
					},
					{
						name: 'Spain - es',
						value: 'es',
					},
					{
						name: 'Sri Lanka - lk',
						value: 'lk',
					},
					{
						name: 'Sudan - sd',
						value: 'sd',
					},
					{
						name: 'Suriname - sr',
						value: 'sr',
					},
					{
						name: 'Svalbard and Jan Mayen - sj',
						value: 'sj',
					},
					{
						name: 'Swaziland - sz',
						value: 'sz',
					},
					{
						name: 'Sweden - se',
						value: 'se',
					},
					{
						name: 'Switzerland - ch',
						value: 'ch',
					},
					{
						name: 'Syrian Arab Republic - sy',
						value: 'sy',
					},
					{
						name: 'Taiwan, Province of China - tw',
						value: 'tw',
					},
					{
						name: 'Tajikistan - tj',
						value: 'tj',
					},
					{
						name: 'Tanzania, United Republic of - tz',
						value: 'tz',
					},
					{
						name: 'Thailand - th',
						value: 'th',
					},
					{
						name: 'Timor-Leste - tl',
						value: 'tl',
					},
					{
						name: 'Togo - tg',
						value: 'tg',
					},
					{
						name: 'Tokelau - tk',
						value: 'tk',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Trinidad and Tobago - tt',
						value: 'tt',
					},
					{
						name: 'Tunisia - tn',
						value: 'tn',
					},
					{
						name: 'Turkiye - tr',
						value: 'tr',
					},
					{
						name: 'Turkmenistan - tm',
						value: 'tm',
					},
					{
						name: 'Turks and Caicos Islands - tc',
						value: 'tc',
					},
					{
						name: 'Tuvalu - tv',
						value: 'tv',
					},
					{
						name: 'Uganda - ug',
						value: 'ug',
					},
					{
						name: 'Ukraine - ua',
						value: 'ua',
					},
					{
						name: 'United Arab Emirates - ae',
						value: 'ae',
					},
					{
						name: 'United Kingdom - uk',
						value: 'uk',
					},
					{
						name: 'United Kingdom - gb',
						value: 'gb',
					},
					{
						name: 'United States - us',
						value: 'us',
					},
					{
						name: 'United States Minor Outlying Islands - um',
						value: 'um',
					},
					{
						name: 'Uruguay - uy',
						value: 'uy',
					},
					{
						name: 'Uzbekistan - uz',
						value: 'uz',
					},
					{
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Venezuela - ve',
						value: 've',
					},
					{
						name: 'Viet Nam - vn',
						value: 'vn',
					},
					{
						name: 'Virgin Islands, British - vg',
						value: 'vg',
					},
					{
						name: 'Virgin Islands, U.S. - vi',
						value: 'vi',
					},
					{
						name: 'Wallis and Futuna - wf',
						value: 'wf',
					},
					{
						name: 'Western Sahara - eh',
						value: 'eh',
					},
					{
						name: 'Yemen - ye',
						value: 'ye',
					},
					{
						name: 'Zambia - zm',
						value: 'zm',
					},
					{
						name: 'Zimbabwe - zw',
						value: 'zw',
					},
				],
			},
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Images search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French) Head to the Google languages for a full list of supported Google languages.",
				default: 'en',
				routing: {
					request: {
						qs: {
							hl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Afrikaans - af',
						value: 'af',
					},
					{
						name: 'Akan - ak',
						value: 'ak',
					},
					{
						name: 'Albanian - sq',
						value: 'sq',
					},
					{
						name: 'Samoa - ws',
						value: 'ws',
					},
					{
						name: 'Amharic - am',
						value: 'am',
					},
					{
						name: 'Arabic - ar',
						value: 'ar',
					},
					{
						name: 'Armenian - hy',
						value: 'hy',
					},
					{
						name: 'Azerbaijani - az',
						value: 'az',
					},
					{
						name: 'Basque - eu',
						value: 'eu',
					},
					{
						name: 'Belarusian - be',
						value: 'be',
					},
					{
						name: 'Bemba - bem',
						value: 'bem',
					},
					{
						name: 'Bengali - bn',
						value: 'bn',
					},
					{
						name: 'Bihari - bh',
						value: 'bh',
					},
					{
						name: 'Bork, bork, bork! - xx-bork',
						value: 'xx-bork',
					},
					{
						name: 'Bosnian - bs',
						value: 'bs',
					},
					{
						name: 'Breton - br',
						value: 'br',
					},
					{
						name: 'Bulgarian - bg',
						value: 'bg',
					},
					{
						name: 'Bhutanese - bt',
						value: 'bt',
					},
					{
						name: 'Cambodian - km',
						value: 'km',
					},
					{
						name: 'Catalan - ca',
						value: 'ca',
					},
					{
						name: 'Cherokee - chr',
						value: 'chr',
					},
					{
						name: 'Chichewa - ny',
						value: 'ny',
					},
					{
						name: 'Chinese (Simplified) - zh-cn',
						value: 'zh-cn',
					},
					{
						name: 'Chinese (Traditional) - zh-tw',
						value: 'zh-tw',
					},
					{
						name: 'Corsican - co',
						value: 'co',
					},
					{
						name: 'Croatian - hr',
						value: 'hr',
					},
					{
						name: 'Czech - cs',
						value: 'cs',
					},
					{
						name: 'Danish - da',
						value: 'da',
					},
					{
						name: 'Dutch - nl',
						value: 'nl',
					},
					{
						name: 'Elmer Fudd - xx-elmer',
						value: 'xx-elmer',
					},
					{
						name: 'English - en',
						value: 'en',
					},
					{
						name: 'Esperanto - eo',
						value: 'eo',
					},
					{
						name: 'Estonian - et',
						value: 'et',
					},
					{
						name: 'Ewe - ee',
						value: 'ee',
					},
					{
						name: 'Faroese - fo',
						value: 'fo',
					},
					{
						name: 'Filipino - tl',
						value: 'tl',
					},
					{
						name: 'Finnish - fi',
						value: 'fi',
					},
					{
						name: 'French - fr',
						value: 'fr',
					},
					{
						name: 'Frisian - fy',
						value: 'fy',
					},
					{
						name: 'Ga - gaa',
						value: 'gaa',
					},
					{
						name: 'Galician - gl',
						value: 'gl',
					},
					{
						name: 'Georgian - ka',
						value: 'ka',
					},
					{
						name: 'German - de',
						value: 'de',
					},
					{
						name: 'Greek - el',
						value: 'el',
					},
					{
						name: 'Greenlandic - kl',
						value: 'kl',
					},
					{
						name: 'Guarani - gn',
						value: 'gn',
					},
					{
						name: 'Gujarati - gu',
						value: 'gu',
					},
					{
						name: 'Hacker - xx-hacker',
						value: 'xx-hacker',
					},
					{
						name: 'Haitian Creole - ht',
						value: 'ht',
					},
					{
						name: 'Hausa - ha',
						value: 'ha',
					},
					{
						name: 'Hawaiian - haw',
						value: 'haw',
					},
					{
						name: 'Hebrew - iw',
						value: 'iw',
					},
					{
						name: 'Hebrew - he',
						value: 'he',
					},
					{
						name: 'Hindi - hi',
						value: 'hi',
					},
					{
						name: 'Hungarian - hu',
						value: 'hu',
					},
					{
						name: 'Icelandic - is',
						value: 'is',
					},
					{
						name: 'Igbo - ig',
						value: 'ig',
					},
					{
						name: 'Indonesian - id',
						value: 'id',
					},
					{
						name: 'Interlingua - ia',
						value: 'ia',
					},
					{
						name: 'Irish - ga',
						value: 'ga',
					},
					{
						name: 'Italian - it',
						value: 'it',
					},
					{
						name: 'Japanese - ja',
						value: 'ja',
					},
					{
						name: 'Javanese - jw',
						value: 'jw',
					},
					{
						name: 'Kannada - kn',
						value: 'kn',
					},
					{
						name: 'Kazakh - kk',
						value: 'kk',
					},
					{
						name: 'Kinyarwanda - rw',
						value: 'rw',
					},
					{
						name: 'Kirundi - rn',
						value: 'rn',
					},
					{
						name: 'Klingon - xx-klingon',
						value: 'xx-klingon',
					},
					{
						name: 'Kongo - kg',
						value: 'kg',
					},
					{
						name: 'Korean - ko',
						value: 'ko',
					},
					{
						name: 'Krio (Sierra Leone) - kri',
						value: 'kri',
					},
					{
						name: 'Kurdish - ku',
						value: 'ku',
					},
					{
						name: 'Kurdish (Soranî) - ckb',
						value: 'ckb',
					},
					{
						name: 'Kyrgyz - ky',
						value: 'ky',
					},
					{
						name: 'Laothian - lo',
						value: 'lo',
					},
					{
						name: 'Latin - la',
						value: 'la',
					},
					{
						name: 'Latvian - lv',
						value: 'lv',
					},
					{
						name: 'Lingala - ln',
						value: 'ln',
					},
					{
						name: 'Lithuanian - lt',
						value: 'lt',
					},
					{
						name: 'Lozi - loz',
						value: 'loz',
					},
					{
						name: 'Luganda - lg',
						value: 'lg',
					},
					{
						name: 'Luo - ach',
						value: 'ach',
					},
					{
						name: 'Macedonian - mk',
						value: 'mk',
					},
					{
						name: 'Malagasy - mg',
						value: 'mg',
					},
					{
						name: 'Malay - ms',
						value: 'ms',
					},
					{
						name: 'Malayalam - ml',
						value: 'ml',
					},
					{
						name: 'Maltese - mt',
						value: 'mt',
					},
					{
						name: 'Maldives - mv',
						value: 'mv',
					},
					{
						name: 'Maori - mi',
						value: 'mi',
					},
					{
						name: 'Marathi - mr',
						value: 'mr',
					},
					{
						name: 'Mauritian Creole - mfe',
						value: 'mfe',
					},
					{
						name: 'Moldavian - mo',
						value: 'mo',
					},
					{
						name: 'Mongolian - mn',
						value: 'mn',
					},
					{
						name: 'Montenegrin - sr-me',
						value: 'sr-me',
					},
					{
						name: 'Myanmar - my',
						value: 'my',
					},
					{
						name: 'Nepali - ne',
						value: 'ne',
					},
					{
						name: 'Nigerian Pidgin - pcm',
						value: 'pcm',
					},
					{
						name: 'Northern Sotho - nso',
						value: 'nso',
					},
					{
						name: 'Norwegian - no',
						value: 'no',
					},
					{
						name: 'Norwegian (Nynorsk) - nn',
						value: 'nn',
					},
					{
						name: 'Occitan - oc',
						value: 'oc',
					},
					{
						name: 'Oriya - or',
						value: 'or',
					},
					{
						name: 'Oromo - om',
						value: 'om',
					},
					{
						name: 'Pashto - ps',
						value: 'ps',
					},
					{
						name: 'Persian - fa',
						value: 'fa',
					},
					{
						name: 'Pirate - xx-pirate',
						value: 'xx-pirate',
					},
					{
						name: 'Polish - pl',
						value: 'pl',
					},
					{
						name: 'Portuguese - pt',
						value: 'pt',
					},
					{
						name: 'Portuguese (Brazil) - pt-br',
						value: 'pt-br',
					},
					{
						name: 'Portuguese (Portugal) - pt-pt',
						value: 'pt-pt',
					},
					{
						name: 'Punjabi - pa',
						value: 'pa',
					},
					{
						name: 'Quechua - qu',
						value: 'qu',
					},
					{
						name: 'Romanian - ro',
						value: 'ro',
					},
					{
						name: 'Romansh - rm',
						value: 'rm',
					},
					{
						name: 'Runyakitara - nyn',
						value: 'nyn',
					},
					{
						name: 'Russian - ru',
						value: 'ru',
					},
					{
						name: 'Scots Gaelic - gd',
						value: 'gd',
					},
					{
						name: 'Serbian - sr',
						value: 'sr',
					},
					{
						name: 'Serbo-Croatian - sh',
						value: 'sh',
					},
					{
						name: 'Sesotho - st',
						value: 'st',
					},
					{
						name: 'Setswana - tn',
						value: 'tn',
					},
					{
						name: 'Seychellois Creole - crs',
						value: 'crs',
					},
					{
						name: 'Shona - sn',
						value: 'sn',
					},
					{
						name: 'Sindhi - sd',
						value: 'sd',
					},
					{
						name: 'Sinhalese - si',
						value: 'si',
					},
					{
						name: 'Slovak - sk',
						value: 'sk',
					},
					{
						name: 'Slovenian - sl',
						value: 'sl',
					},
					{
						name: 'Somali - so',
						value: 'so',
					},
					{
						name: 'Spanish - es',
						value: 'es',
					},
					{
						name: 'Spanish (Latin American) - es-419',
						value: 'es-419',
					},
					{
						name: 'Sundanese - su',
						value: 'su',
					},
					{
						name: 'Swahili - sw',
						value: 'sw',
					},
					{
						name: 'Swedish - sv',
						value: 'sv',
					},
					{
						name: 'Tajik - tg',
						value: 'tg',
					},
					{
						name: 'Tamil - ta',
						value: 'ta',
					},
					{
						name: 'Tatar - tt',
						value: 'tt',
					},
					{
						name: 'Telugu - te',
						value: 'te',
					},
					{
						name: 'Thai - th',
						value: 'th',
					},
					{
						name: 'Tigrinya - ti',
						value: 'ti',
					},
					{
						name: 'Tonga - to',
						value: 'to',
					},
					{
						name: 'Tshiluba - lua',
						value: 'lua',
					},
					{
						name: 'Tumbuka - tum',
						value: 'tum',
					},
					{
						name: 'Turkish - tr',
						value: 'tr',
					},
					{
						name: 'Turkmen - tk',
						value: 'tk',
					},
					{
						name: 'Twi - tw',
						value: 'tw',
					},
					{
						name: 'Uighur - ug',
						value: 'ug',
					},
					{
						name: 'Ukrainian - uk',
						value: 'uk',
					},
					{
						name: 'Urdu - ur',
						value: 'ur',
					},
					{
						name: 'Uzbek - uz',
						value: 'uz',
					},
					{
						name: 'Vanuatu - vu',
						value: 'vu',
					},
					{
						name: 'Vietnamese - vi',
						value: 'vi',
					},
					{
						name: 'Welsh - cy',
						value: 'cy',
					},
					{
						name: 'Wolof - wo',
						value: 'wo',
					},
					{
						name: 'Xhosa - xh',
						value: 'xh',
					},
					{
						name: 'Yiddish - yi',
						value: 'yi',
					},
					{
						name: 'Yoruba - yo',
						value: 'yo',
					},
					{
						name: 'Zulu - zu',
						value: 'zu',
					},
				],
			},
			{
				displayName: '`cr` Set Multiple Countries',
				name: 'cr',
				description:
					'Parameter defines one or multiple countries to limit the search to. It uses country{two-letter upper-case country code} to specify countries and | as a delimiter. (e.g., countryFR|countryDE will only search French and German pages). Head to the Google cr countries page for a full list of supported countries.',
				default: '',
				routing: {
					request: {
						qs: {
							cr: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_dt',
				name: 'as_dt',
				description:
					'Parameter controls whether to include or exclude results from the site named in the as_sitesearch parameter',
				default: '',
				routing: {
					request: {
						qs: {
							as_dt: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_epq',
				name: 'as_epq',
				description:
					'Parameter identifies a phrase that all documents in the search results must contain. You can also use the phrase search query term to search for a phrase.',
				default: '',
				routing: {
					request: {
						qs: {
							as_epq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_eq',
				name: 'as_eq',
				description:
					'Parameter identifies a word or phrase that should not appear in any documents in the search results. You can also use the exclude query term to ensure that a particular word or phrase will not appear in the documents in a set of search results.',
				default: '',
				routing: {
					request: {
						qs: {
							as_eq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_lq',
				name: 'as_lq',
				description:
					'Parameter specifies that all search results should contain a link to a particular URL. You can also use the link: query term for this type of query.',
				default: '',
				routing: {
					request: {
						qs: {
							as_lq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_nlo',
				name: 'as_nlo',
				description:
					'Parameter specifies the starting value for a search range. Use as_nlo and as_nhi to append an inclusive search range.',
				default: '',
				routing: {
					request: {
						qs: {
							as_nlo: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_nhi',
				name: 'as_nhi',
				description:
					'Parameter specifies the ending value for a search range. Use as_nlo and as_nhi to append an inclusive search range.',
				default: '',
				routing: {
					request: {
						qs: {
							as_nhi: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_oq',
				name: 'as_oq',
				description:
					'Parameter provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the Boolean OR query term for this type of query.',
				default: '',
				routing: {
					request: {
						qs: {
							as_oq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_q',
				name: 'as_q',
				description:
					'Parameter provides search terms to check for in a document. This parameter is also commonly used to allow users to specify additional terms to search for within a set of search results.',
				default: '',
				routing: {
					request: {
						qs: {
							as_q: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_qdr',
				name: 'as_qdr',
				description:
					'Parameter requests search results from a specified time period (quick date range). The following values are supported:d[number]: requests results from the specified number of past days. Example for the past 10 days: as_qdr=d10w[number]: requests results from the specified number of past weeks.m[number]: requests results from the specified number of past months.y[number]: requests results from the specified number of past years. Example for the past year: as_qdr=y',
				default: '',
				routing: {
					request: {
						qs: {
							as_qdr: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_rq',
				name: 'as_rq',
				description:
					'Parameter specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. You can also use the related: query term for this type of query.',
				default: '',
				routing: {
					request: {
						qs: {
							as_rq: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'as_sitesearch',
				name: 'as_sitesearch',
				description:
					'Parameter allows you to specify that all search results should be pages from a given site. By setting the as_dt parameter, you can also use it to exclude pages from a given site from your search resutls.',
				default: '',
				routing: {
					request: {
						qs: {
							as_sitesearch: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`period_unit` Time Period Unit',
				name: 'period_unit',
				description:
					"Parameter defines the time period unit to search for the recent images, e.g. from past minute, hour, day etc. Options: s - Secondn - Minuteh - Hourd - Dayw - Weekm - Monthy - Year. This parameter can't be used with start_date/end_date parameters.This parameter overrides qdr component of tbs parameter.",
				default: 'y',
				routing: {
					request: {
						qs: {
							period_unit: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Second',
						value: 's',
					},
					{
						name: 'Minute',
						value: 'n',
					},
					{
						name: 'Hour',
						value: 'h',
					},
					{
						name: 'Day',
						value: 'd',
					},
					{
						name: 'Week',
						value: 'w',
					},
					{
						name: 'Month',
						value: 'm',
					},
					{
						name: 'Year',
						value: 'y',
					},
				],
			},
			{
				displayName: '`period_value` Time Period Value',
				name: 'period_value',
				description:
					'Parameter defines an optional time period value that can be used with period_unit to describe time periods like 15 seconds, 42 hours, 178 days etc.Default value: 1Value range: 1..2147483647',
				default: '',
				routing: {
					request: {
						qs: {
							period_value: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`start_date` Start Date',
				name: 'start_date',
				description:
					"Parameter defines the start date of time period you want to limit the image search to. Format: YYYYMMDD Example: 20241201 - This parameter can't be used with period_unit/period_value parameters.start_date with blank end_date produces date range FROM start_date TO today.This parameter overrides cdr and cd_min components of tbs parameter.",
				default: '',
				routing: {
					request: {
						qs: {
							start_date: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`end_date` End Date',
				name: 'end_date',
				description:
					"Parameter defines the end date of time period you want to limit the image search to. Format: YYYYMMDD Example: 20241231 - This parameter can't be used with period_unit/period_value parameters.end_date with blank start_date produces date range BEFORE end_date.This parameter overrides cdr and cd_max components of tbs parameter.",
				default: '',
				routing: {
					request: {
						qs: {
							end_date: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`chips` Image search filter (alternative)',
				name: 'chips',
				description:
					"Parameter enables to filter image search. It's a string provided by Google as suggested search, like: red apple. Chips are provided under the section: suggested_searches when ijn = 0. Both chips and serpapi_link values are provided for each suggested search.",
				default: '',
				routing: {
					request: {
						qs: {
							chips: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`tbs` Advanced Search Parameter',
				name: 'tbs',
				description:
					"(to be searched) parameter defines advanced search parameters that aren't possible in the regular query field",
				default: '',
				routing: {
					request: {
						qs: {
							tbs: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`imgar` Aspect Ratio Filtering',
				name: 'imgar',
				description:
					'Parameter defines the set aspect ratio of images.Options: s - Squaret - Tallw - Widexw - Panoramic',
				default: 's',
				routing: {
					request: {
						qs: {
							imgar: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Square',
						value: 's',
					},
					{
						name: 'Tall',
						value: 't',
					},
					{
						name: 'Wide',
						value: 'w',
					},
					{
						name: 'Panoramic',
						value: 'xw',
					},
				],
			},
			{
				displayName: '`imgsz` Image Size Filtering',
				name: 'imgsz',
				description:
					'Parameter defines the size of images.Options: l - Largem - Mediumi - Iconqsvga - Larger than 400×300vga - Larger than 640×480svga - Larger than 800×600xga - Larger than 1024×7682mp - Larger than 2 MP4mp - Larger than 4 MP6mp - Larger than 6 MP8mp - Larger than 8 MP10mp - Larger than 10 MP12mp - Larger than 12 MP15mp - Larger than 15 MP20mp - Larger than 20 MP40mp - Larger than 40 MP70mp - Larger than 70 MP',
				default: 'l',
				routing: {
					request: {
						qs: {
							imgsz: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Large',
						value: 'l',
					},
					{
						name: 'Medium',
						value: 'm',
					},
					{
						name: 'Icon',
						value: 'i',
					},
					{
						name: 'Larger than 400×300',
						value: 'qsvga',
					},
					{
						name: 'Larger than 640×480',
						value: 'vga',
					},
					{
						name: 'Larger than 800×600',
						value: 'svga',
					},
					{
						name: 'Larger than 1024×768',
						value: 'xga',
					},
					{
						name: 'Larger than 2 MP',
						value: '2mp',
					},
					{
						name: 'Larger than 4 MP',
						value: '4mp',
					},
					{
						name: 'Larger than 6 MP',
						value: '6mp',
					},
					{
						name: 'Larger than 8 MP',
						value: '8mp',
					},
					{
						name: 'Larger than 10 MP',
						value: '10mp',
					},
					{
						name: 'Larger than 12 MP',
						value: '12mp',
					},
					{
						name: 'Larger than 15 MP',
						value: '15mp',
					},
					{
						name: 'Larger than 20 MP',
						value: '20mp',
					},
					{
						name: 'Larger than 40 MP',
						value: '40mp',
					},
					{
						name: 'Larger than 70 MP',
						value: '70mp',
					},
				],
			},
			{
				displayName: '`image_color` Image Color Filtering',
				name: 'image_color',
				description:
					'Parameter defines the color of images.Options: bw - Black and whitetrans - Transparentred - Redorange - Orangeyellow - Yellowgreen - Greenteal - Tealblue - Bluepurple - Purplepink - Pinkwhite - Whitegray - Grayblack - Blackbrown - BrownThis parameter overrides ic and isc components of tbs parameter',
				default: 'bw',
				routing: {
					request: {
						qs: {
							image_color: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Black and white',
						value: 'bw',
					},
					{
						name: 'Transparent',
						value: 'trans',
					},
					{
						name: 'Red',
						value: 'red',
					},
					{
						name: 'Orange',
						value: 'orange',
					},
					{
						name: 'Yellow',
						value: 'yellow',
					},
					{
						name: 'Green',
						value: 'green',
					},
					{
						name: 'Teal',
						value: 'teal',
					},
					{
						name: 'Blue',
						value: 'blue',
					},
					{
						name: 'Purple',
						value: 'purple',
					},
					{
						name: 'Pink',
						value: 'pink',
					},
					{
						name: 'White',
						value: 'white',
					},
					{
						name: 'Gray',
						value: 'gray',
					},
					{
						name: 'Black',
						value: 'black',
					},
					{
						name: 'Brown',
						value: 'brown',
					},
				],
			},
			{
				displayName: '`image_type` Image Type Filtering',
				name: 'image_type',
				description:
					'Parameter defines the type of images.Options: face - Facephoto - Photoclipart - Clip artlineart - Line drawinganimated - AnimatedThis parameter overrides itp component of tbs parameter',
				default: 'photo',
				routing: {
					request: {
						qs: {
							image_type: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Face',
						value: 'face',
					},
					{
						name: 'Photo',
						value: 'photo',
					},
					{
						name: 'Clip art',
						value: 'clipart',
					},
					{
						name: 'Line drawing',
						value: 'lineart',
					},
					{
						name: 'Animated',
						value: 'animated',
					},
				],
			},
			{
				displayName: '`licenses` Usage Rights Filtering',
				name: 'licenses',
				description:
					'Parameter defines the scope of licenses of images. Options: f - Free to use or sharefc - Free to use or share, even commerciallyfm - Free to use, share or modifyfmc - Free to use, share or modify, even commerciallycl - Creative Commons licensesol - Commercial and other licensesThis parameter overrides sur component of tbs parameter.',
				default: 'f',
				routing: {
					request: {
						qs: {
							licenses: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Free to use or share',
						value: 'f',
					},
					{
						name: 'Free to use or share, even commercially',
						value: 'fc',
					},
					{
						name: 'Free to use, share or modify',
						value: 'fm',
					},
					{
						name: 'Free to use, share or modify, even commercially',
						value: 'fmc',
					},
					{
						name: 'Creative Commons licenses',
						value: 'cl',
					},
					{
						name: 'Commercial and other licenses',
						value: 'ol',
					},
				],
			},
			{
				displayName: '`safe` Adult Content Filtering',
				name: 'safe',
				description:
					'Parameter defines the level of filtering for adult content. It can be set to active or off, by default Google will blur explicit content.',
				default: 'active',
				routing: {
					request: {
						qs: {
							safe: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Off',
						value: 'off',
					},
				],
			},
			{
				displayName: '`nfpr` Exclude Auto-corrected Results',
				name: 'nfpr',
				description:
					'Whether to exclude of results from an auto-corrected query when the original query is spelled wrong. It can be set to true to exclude these results, or false to include them (default). Note that this parameter may not prevent Google from returning results for an auto-corrected query if no other results are available.',
				default: false,
				routing: {
					request: {
						qs: {
							nfpr: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: '`filter` Results Filtering',
				name: 'filter',
				description:
					"Whether the filters for 'Similar Results' and 'Omitted Results' are on or off. It can be set to true (default) to enable these filters, or false to disable these filters.",
				default: true,
				routing: {
					request: {
						qs: {
							filter: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: '`ijn` Page Number (images)',
				name: 'ijn',
				description:
					'Parameter defines the page number for Google Images. There are 100 images per page. This parameter is equivalent to start (offset) = ijn * 100.',
				default: '',
				routing: {
					request: {
						qs: {
							ijn: '={{$value}}',
						},
					},
				},
				type: 'number',
			},
			{
				displayName: '`device` Device',
				name: 'device',
				description:
					'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser.',
				default: '',
				routing: {
					request: {
						qs: {
							device: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
