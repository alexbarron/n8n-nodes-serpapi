/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleMapsDirectionsFields: INodeProperties[] = [
	{
		displayName: '`start_addr` Starting point address',
		name: 'start_addr',
		description: 'Parameter defines the address of the starting point for the direction you want to search. You can use anything that you would use in a regular Google Maps Directions search.Alternatively, you can use start_data_id or start_coords.',
		default: null,
		routing: {
			request: {
				qs: {
					start_addr: '={{$value}}'
				}
			}
		},
		type: 'string',
		displayOptions: {
      show: {
        resource: [
          'google_maps_directions'
        ]
      }
    }
	},
	{
		displayName: '`end_addr` Ending point address',
		name: 'end_addr',
		description: 'Parameter defines the address of the ending point for the direction you want to search. You can use anything that you would use in a regular Google Maps Directions search.Alternatively, you can use end_data_id or end_coords.',
		default: null,
		routing: {
			request: {
				qs: {
					end_addr: '={{$value}}'
				}
			}
		},
		type: 'string',
		displayOptions: {
      show: {
        resource: [
          'google_maps_directions'
        ]
      }
    }
	},
	{
    displayName: 'Additional Fields',
    name: 'additionalFields',
    type: 'collection',
    default: {
    },
    placeholder: 'Add Field',
    displayOptions: {
      show: {
        resource: [
          'google_maps_directions'
        ]
      }
    },
    options: [
      {
        displayName: '`gl` Country',
        name: 'gl',
        description: "Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries page for a full list of supported Google countries.",
        default: 'us',
        routing: {
          request: {
            qs: {
              gl: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Afghanistan - af',
            value: 'af'
          },
          {
            name: 'Albania - al',
            value: 'al'
          },
          {
            name: 'Algeria - dz',
            value: 'dz'
          },
          {
            name: 'American Samoa - as',
            value: 'as'
          },
          {
            name: 'Andorra - ad',
            value: 'ad'
          },
          {
            name: 'Angola - ao',
            value: 'ao'
          },
          {
            name: 'Anguilla - ai',
            value: 'ai'
          },
          {
            name: 'Antarctica - aq',
            value: 'aq'
          },
          {
            name: 'Antigua and Barbuda - ag',
            value: 'ag'
          },
          {
            name: 'Argentina - ar',
            value: 'ar'
          },
          {
            name: 'Armenia - am',
            value: 'am'
          },
          {
            name: 'Aruba - aw',
            value: 'aw'
          },
          {
            name: 'Australia - au',
            value: 'au'
          },
          {
            name: 'Austria - at',
            value: 'at'
          },
          {
            name: 'Azerbaijan - az',
            value: 'az'
          },
          {
            name: 'Bahamas - bs',
            value: 'bs'
          },
          {
            name: 'Bahrain - bh',
            value: 'bh'
          },
          {
            name: 'Bangladesh - bd',
            value: 'bd'
          },
          {
            name: 'Barbados - bb',
            value: 'bb'
          },
          {
            name: 'Belarus - by',
            value: 'by'
          },
          {
            name: 'Belgium - be',
            value: 'be'
          },
          {
            name: 'Belize - bz',
            value: 'bz'
          },
          {
            name: 'Benin - bj',
            value: 'bj'
          },
          {
            name: 'Bermuda - bm',
            value: 'bm'
          },
          {
            name: 'Bhutan - bt',
            value: 'bt'
          },
          {
            name: 'Bolivia - bo',
            value: 'bo'
          },
          {
            name: 'Bosnia and Herzegovina - ba',
            value: 'ba'
          },
          {
            name: 'Botswana - bw',
            value: 'bw'
          },
          {
            name: 'Bouvet Island - bv',
            value: 'bv'
          },
          {
            name: 'Brazil - br',
            value: 'br'
          },
          {
            name: 'British Indian Ocean Territory - io',
            value: 'io'
          },
          {
            name: 'Brunei Darussalam - bn',
            value: 'bn'
          },
          {
            name: 'Bulgaria - bg',
            value: 'bg'
          },
          {
            name: 'Burkina Faso - bf',
            value: 'bf'
          },
          {
            name: 'Burundi - bi',
            value: 'bi'
          },
          {
            name: 'Cambodia - kh',
            value: 'kh'
          },
          {
            name: 'Cameroon - cm',
            value: 'cm'
          },
          {
            name: 'Canada - ca',
            value: 'ca'
          },
          {
            name: 'Cape Verde - cv',
            value: 'cv'
          },
          {
            name: 'Cayman Islands - ky',
            value: 'ky'
          },
          {
            name: 'Central African Republic - cf',
            value: 'cf'
          },
          {
            name: 'Chad - td',
            value: 'td'
          },
          {
            name: 'Chile - cl',
            value: 'cl'
          },
          {
            name: 'China - cn',
            value: 'cn'
          },
          {
            name: 'Christmas Island - cx',
            value: 'cx'
          },
          {
            name: 'Cocos (Keeling) Islands - cc',
            value: 'cc'
          },
          {
            name: 'Colombia - co',
            value: 'co'
          },
          {
            name: 'Comoros - km',
            value: 'km'
          },
          {
            name: 'Congo - cg',
            value: 'cg'
          },
          {
            name: 'Congo, the Democratic Republic of the - cd',
            value: 'cd'
          },
          {
            name: 'Cook Islands - ck',
            value: 'ck'
          },
          {
            name: 'Costa Rica - cr',
            value: 'cr'
          },
          {
            name: "Cote D'ivoire - ci",
            value: 'ci'
          },
          {
            name: 'Croatia - hr',
            value: 'hr'
          },
          {
            name: 'Cuba - cu',
            value: 'cu'
          },
          {
            name: 'Cyprus - cy',
            value: 'cy'
          },
          {
            name: 'Czech Republic - cz',
            value: 'cz'
          },
          {
            name: 'Denmark - dk',
            value: 'dk'
          },
          {
            name: 'Djibouti - dj',
            value: 'dj'
          },
          {
            name: 'Dominica - dm',
            value: 'dm'
          },
          {
            name: 'Dominican Republic - do',
            value: 'do'
          },
          {
            name: 'Ecuador - ec',
            value: 'ec'
          },
          {
            name: 'Egypt - eg',
            value: 'eg'
          },
          {
            name: 'El Salvador - sv',
            value: 'sv'
          },
          {
            name: 'Equatorial Guinea - gq',
            value: 'gq'
          },
          {
            name: 'Eritrea - er',
            value: 'er'
          },
          {
            name: 'Estonia - ee',
            value: 'ee'
          },
          {
            name: 'Ethiopia - et',
            value: 'et'
          },
          {
            name: 'Falkland Islands (Malvinas) - fk',
            value: 'fk'
          },
          {
            name: 'Faroe Islands - fo',
            value: 'fo'
          },
          {
            name: 'Fiji - fj',
            value: 'fj'
          },
          {
            name: 'Finland - fi',
            value: 'fi'
          },
          {
            name: 'France - fr',
            value: 'fr'
          },
          {
            name: 'French Guiana - gf',
            value: 'gf'
          },
          {
            name: 'French Polynesia - pf',
            value: 'pf'
          },
          {
            name: 'French Southern Territories - tf',
            value: 'tf'
          },
          {
            name: 'Gabon - ga',
            value: 'ga'
          },
          {
            name: 'Gambia - gm',
            value: 'gm'
          },
          {
            name: 'Georgia - ge',
            value: 'ge'
          },
          {
            name: 'Germany - de',
            value: 'de'
          },
          {
            name: 'Ghana - gh',
            value: 'gh'
          },
          {
            name: 'Gibraltar - gi',
            value: 'gi'
          },
          {
            name: 'Greece - gr',
            value: 'gr'
          },
          {
            name: 'Greenland - gl',
            value: 'gl'
          },
          {
            name: 'Grenada - gd',
            value: 'gd'
          },
          {
            name: 'Guadeloupe - gp',
            value: 'gp'
          },
          {
            name: 'Guam - gu',
            value: 'gu'
          },
          {
            name: 'Guatemala - gt',
            value: 'gt'
          },
          {
            name: 'Guernsey - gg',
            value: 'gg'
          },
          {
            name: 'Guinea - gn',
            value: 'gn'
          },
          {
            name: 'Guinea-Bissau - gw',
            value: 'gw'
          },
          {
            name: 'Guyana - gy',
            value: 'gy'
          },
          {
            name: 'Haiti - ht',
            value: 'ht'
          },
          {
            name: 'Heard Island and Mcdonald Islands - hm',
            value: 'hm'
          },
          {
            name: 'Holy See (Vatican City State) - va',
            value: 'va'
          },
          {
            name: 'Honduras - hn',
            value: 'hn'
          },
          {
            name: 'Hong Kong - hk',
            value: 'hk'
          },
          {
            name: 'Hungary - hu',
            value: 'hu'
          },
          {
            name: 'Iceland - is',
            value: 'is'
          },
          {
            name: 'India - in',
            value: 'in'
          },
          {
            name: 'Indonesia - id',
            value: 'id'
          },
          {
            name: 'Iran, Islamic Republic of - ir',
            value: 'ir'
          },
          {
            name: 'Iraq - iq',
            value: 'iq'
          },
          {
            name: 'Ireland - ie',
            value: 'ie'
          },
          {
            name: 'Isle of Man - im',
            value: 'im'
          },
          {
            name: 'Israel - il',
            value: 'il'
          },
          {
            name: 'Italy - it',
            value: 'it'
          },
          {
            name: 'Jersey - je',
            value: 'je'
          },
          {
            name: 'Jamaica - jm',
            value: 'jm'
          },
          {
            name: 'Japan - jp',
            value: 'jp'
          },
          {
            name: 'Jordan - jo',
            value: 'jo'
          },
          {
            name: 'Kazakhstan - kz',
            value: 'kz'
          },
          {
            name: 'Kenya - ke',
            value: 'ke'
          },
          {
            name: 'Kiribati - ki',
            value: 'ki'
          },
          {
            name: "Korea, Democratic People's Republic of - kp",
            value: 'kp'
          },
          {
            name: 'Korea, Republic of - kr',
            value: 'kr'
          },
          {
            name: 'Kuwait - kw',
            value: 'kw'
          },
          {
            name: 'Kyrgyzstan - kg',
            value: 'kg'
          },
          {
            name: "Lao People's Democratic Republic - la",
            value: 'la'
          },
          {
            name: 'Latvia - lv',
            value: 'lv'
          },
          {
            name: 'Lebanon - lb',
            value: 'lb'
          },
          {
            name: 'Lesotho - ls',
            value: 'ls'
          },
          {
            name: 'Liberia - lr',
            value: 'lr'
          },
          {
            name: 'Libyan Arab Jamahiriya - ly',
            value: 'ly'
          },
          {
            name: 'Liechtenstein - li',
            value: 'li'
          },
          {
            name: 'Lithuania - lt',
            value: 'lt'
          },
          {
            name: 'Luxembourg - lu',
            value: 'lu'
          },
          {
            name: 'Macao - mo',
            value: 'mo'
          },
          {
            name: 'Macedonia, the Former Yugosalv Republic of - mk',
            value: 'mk'
          },
          {
            name: 'Madagascar - mg',
            value: 'mg'
          },
          {
            name: 'Malawi - mw',
            value: 'mw'
          },
          {
            name: 'Malaysia - my',
            value: 'my'
          },
          {
            name: 'Maldives - mv',
            value: 'mv'
          },
          {
            name: 'Mali - ml',
            value: 'ml'
          },
          {
            name: 'Malta - mt',
            value: 'mt'
          },
          {
            name: 'Marshall Islands - mh',
            value: 'mh'
          },
          {
            name: 'Martinique - mq',
            value: 'mq'
          },
          {
            name: 'Mauritania - mr',
            value: 'mr'
          },
          {
            name: 'Mauritius - mu',
            value: 'mu'
          },
          {
            name: 'Mayotte - yt',
            value: 'yt'
          },
          {
            name: 'Mexico - mx',
            value: 'mx'
          },
          {
            name: 'Micronesia, Federated States of - fm',
            value: 'fm'
          },
          {
            name: 'Moldova, Republic of - md',
            value: 'md'
          },
          {
            name: 'Monaco - mc',
            value: 'mc'
          },
          {
            name: 'Mongolia - mn',
            value: 'mn'
          },
          {
            name: 'Montenegro - me',
            value: 'me'
          },
          {
            name: 'Montserrat - ms',
            value: 'ms'
          },
          {
            name: 'Morocco - ma',
            value: 'ma'
          },
          {
            name: 'Mozambique - mz',
            value: 'mz'
          },
          {
            name: 'Myanmar - mm',
            value: 'mm'
          },
          {
            name: 'Namibia - na',
            value: 'na'
          },
          {
            name: 'Nauru - nr',
            value: 'nr'
          },
          {
            name: 'Nepal - np',
            value: 'np'
          },
          {
            name: 'Netherlands - nl',
            value: 'nl'
          },
          {
            name: 'Netherlands Antilles - an',
            value: 'an'
          },
          {
            name: 'New Caledonia - nc',
            value: 'nc'
          },
          {
            name: 'New Zealand - nz',
            value: 'nz'
          },
          {
            name: 'Nicaragua - ni',
            value: 'ni'
          },
          {
            name: 'Niger - ne',
            value: 'ne'
          },
          {
            name: 'Nigeria - ng',
            value: 'ng'
          },
          {
            name: 'Niue - nu',
            value: 'nu'
          },
          {
            name: 'Norfolk Island - nf',
            value: 'nf'
          },
          {
            name: 'Northern Mariana Islands - mp',
            value: 'mp'
          },
          {
            name: 'Norway - no',
            value: 'no'
          },
          {
            name: 'Oman - om',
            value: 'om'
          },
          {
            name: 'Pakistan - pk',
            value: 'pk'
          },
          {
            name: 'Palau - pw',
            value: 'pw'
          },
          {
            name: 'Palestinian Territory, Occupied - ps',
            value: 'ps'
          },
          {
            name: 'Panama - pa',
            value: 'pa'
          },
          {
            name: 'Papua New Guinea - pg',
            value: 'pg'
          },
          {
            name: 'Paraguay - py',
            value: 'py'
          },
          {
            name: 'Peru - pe',
            value: 'pe'
          },
          {
            name: 'Philippines - ph',
            value: 'ph'
          },
          {
            name: 'Pitcairn - pn',
            value: 'pn'
          },
          {
            name: 'Poland - pl',
            value: 'pl'
          },
          {
            name: 'Portugal - pt',
            value: 'pt'
          },
          {
            name: 'Puerto Rico - pr',
            value: 'pr'
          },
          {
            name: 'Qatar - qa',
            value: 'qa'
          },
          {
            name: 'Reunion - re',
            value: 're'
          },
          {
            name: 'Romania - ro',
            value: 'ro'
          },
          {
            name: 'Russian Federation - ru',
            value: 'ru'
          },
          {
            name: 'Rwanda - rw',
            value: 'rw'
          },
          {
            name: 'Saint Helena - sh',
            value: 'sh'
          },
          {
            name: 'Saint Kitts and Nevis - kn',
            value: 'kn'
          },
          {
            name: 'Saint Lucia - lc',
            value: 'lc'
          },
          {
            name: 'Saint Pierre and Miquelon - pm',
            value: 'pm'
          },
          {
            name: 'Saint Vincent and the Grenadines - vc',
            value: 'vc'
          },
          {
            name: 'Samoa - ws',
            value: 'ws'
          },
          {
            name: 'San Marino - sm',
            value: 'sm'
          },
          {
            name: 'Sao Tome and Principe - st',
            value: 'st'
          },
          {
            name: 'Saudi Arabia - sa',
            value: 'sa'
          },
          {
            name: 'Senegal - sn',
            value: 'sn'
          },
          {
            name: 'Serbia - rs',
            value: 'rs'
          },
          {
            name: 'Seychelles - sc',
            value: 'sc'
          },
          {
            name: 'Sierra Leone - sl',
            value: 'sl'
          },
          {
            name: 'Singapore - sg',
            value: 'sg'
          },
          {
            name: 'Slovakia - sk',
            value: 'sk'
          },
          {
            name: 'Slovenia - si',
            value: 'si'
          },
          {
            name: 'Solomon Islands - sb',
            value: 'sb'
          },
          {
            name: 'Somalia - so',
            value: 'so'
          },
          {
            name: 'South Africa - za',
            value: 'za'
          },
          {
            name: 'South Georgia and the South Sandwich Islands - gs',
            value: 'gs'
          },
          {
            name: 'Spain - es',
            value: 'es'
          },
          {
            name: 'Sri Lanka - lk',
            value: 'lk'
          },
          {
            name: 'Sudan - sd',
            value: 'sd'
          },
          {
            name: 'Suriname - sr',
            value: 'sr'
          },
          {
            name: 'Svalbard and Jan Mayen - sj',
            value: 'sj'
          },
          {
            name: 'Swaziland - sz',
            value: 'sz'
          },
          {
            name: 'Sweden - se',
            value: 'se'
          },
          {
            name: 'Switzerland - ch',
            value: 'ch'
          },
          {
            name: 'Syrian Arab Republic - sy',
            value: 'sy'
          },
          {
            name: 'Taiwan, Province of China - tw',
            value: 'tw'
          },
          {
            name: 'Tajikistan - tj',
            value: 'tj'
          },
          {
            name: 'Tanzania, United Republic of - tz',
            value: 'tz'
          },
          {
            name: 'Thailand - th',
            value: 'th'
          },
          {
            name: 'Timor-Leste - tl',
            value: 'tl'
          },
          {
            name: 'Togo - tg',
            value: 'tg'
          },
          {
            name: 'Tokelau - tk',
            value: 'tk'
          },
          {
            name: 'Tonga - to',
            value: 'to'
          },
          {
            name: 'Trinidad and Tobago - tt',
            value: 'tt'
          },
          {
            name: 'Tunisia - tn',
            value: 'tn'
          },
          {
            name: 'Turkiye - tr',
            value: 'tr'
          },
          {
            name: 'Turkmenistan - tm',
            value: 'tm'
          },
          {
            name: 'Turks and Caicos Islands - tc',
            value: 'tc'
          },
          {
            name: 'Tuvalu - tv',
            value: 'tv'
          },
          {
            name: 'Uganda - ug',
            value: 'ug'
          },
          {
            name: 'Ukraine - ua',
            value: 'ua'
          },
          {
            name: 'United Arab Emirates - ae',
            value: 'ae'
          },
          {
            name: 'United Kingdom - uk',
            value: 'uk'
          },
          {
            name: 'United Kingdom - gb',
            value: 'gb'
          },
          {
            name: 'United States - us',
            value: 'us'
          },
          {
            name: 'United States Minor Outlying Islands - um',
            value: 'um'
          },
          {
            name: 'Uruguay - uy',
            value: 'uy'
          },
          {
            name: 'Uzbekistan - uz',
            value: 'uz'
          },
          {
            name: 'Vanuatu - vu',
            value: 'vu'
          },
          {
            name: 'Venezuela - ve',
            value: 've'
          },
          {
            name: 'Viet Nam - vn',
            value: 'vn'
          },
          {
            name: 'Virgin Islands, British - vg',
            value: 'vg'
          },
          {
            name: 'Virgin Islands, U.S. - vi',
            value: 'vi'
          },
          {
            name: 'Wallis and Futuna - wf',
            value: 'wf'
          },
          {
            name: 'Western Sahara - eh',
            value: 'eh'
          },
          {
            name: 'Yemen - ye',
            value: 'ye'
          },
          {
            name: 'Zambia - zm',
            value: 'zm'
          },
          {
            name: 'Zimbabwe - zw',
            value: 'zw'
          }
        ]
      },
      {
        displayName: '`hl` Language',
        name: 'hl',
        description: "Parameter defines the language to use for the Google Maps Directions search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
        default: 'en',
        routing: {
          request: {
            qs: {
              hl: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Afrikaans - af',
            value: 'af'
          },
          {
            name: 'Akan - ak',
            value: 'ak'
          },
          {
            name: 'Albanian - sq',
            value: 'sq'
          },
          {
            name: 'Samoa - ws',
            value: 'ws'
          },
          {
            name: 'Amharic - am',
            value: 'am'
          },
          {
            name: 'Arabic - ar',
            value: 'ar'
          },
          {
            name: 'Armenian - hy',
            value: 'hy'
          },
          {
            name: 'Azerbaijani - az',
            value: 'az'
          },
          {
            name: 'Basque - eu',
            value: 'eu'
          },
          {
            name: 'Belarusian - be',
            value: 'be'
          },
          {
            name: 'Bemba - bem',
            value: 'bem'
          },
          {
            name: 'Bengali - bn',
            value: 'bn'
          },
          {
            name: 'Bihari - bh',
            value: 'bh'
          },
          {
            name: 'Bork, bork, bork! - xx-bork',
            value: 'xx-bork'
          },
          {
            name: 'Bosnian - bs',
            value: 'bs'
          },
          {
            name: 'Breton - br',
            value: 'br'
          },
          {
            name: 'Bulgarian - bg',
            value: 'bg'
          },
          {
            name: 'Bhutanese - bt',
            value: 'bt'
          },
          {
            name: 'Cambodian - km',
            value: 'km'
          },
          {
            name: 'Catalan - ca',
            value: 'ca'
          },
          {
            name: 'Cherokee - chr',
            value: 'chr'
          },
          {
            name: 'Chichewa - ny',
            value: 'ny'
          },
          {
            name: 'Chinese (Simplified) - zh-cn',
            value: 'zh-cn'
          },
          {
            name: 'Chinese (Traditional) - zh-tw',
            value: 'zh-tw'
          },
          {
            name: 'Corsican - co',
            value: 'co'
          },
          {
            name: 'Croatian - hr',
            value: 'hr'
          },
          {
            name: 'Czech - cs',
            value: 'cs'
          },
          {
            name: 'Danish - da',
            value: 'da'
          },
          {
            name: 'Dutch - nl',
            value: 'nl'
          },
          {
            name: 'Elmer Fudd - xx-elmer',
            value: 'xx-elmer'
          },
          {
            name: 'English - en',
            value: 'en'
          },
          {
            name: 'Esperanto - eo',
            value: 'eo'
          },
          {
            name: 'Estonian - et',
            value: 'et'
          },
          {
            name: 'Ewe - ee',
            value: 'ee'
          },
          {
            name: 'Faroese - fo',
            value: 'fo'
          },
          {
            name: 'Filipino - tl',
            value: 'tl'
          },
          {
            name: 'Finnish - fi',
            value: 'fi'
          },
          {
            name: 'French - fr',
            value: 'fr'
          },
          {
            name: 'Frisian - fy',
            value: 'fy'
          },
          {
            name: 'Ga - gaa',
            value: 'gaa'
          },
          {
            name: 'Galician - gl',
            value: 'gl'
          },
          {
            name: 'Georgian - ka',
            value: 'ka'
          },
          {
            name: 'German - de',
            value: 'de'
          },
          {
            name: 'Greek - el',
            value: 'el'
          },
          {
            name: 'Greenlandic - kl',
            value: 'kl'
          },
          {
            name: 'Guarani - gn',
            value: 'gn'
          },
          {
            name: 'Gujarati - gu',
            value: 'gu'
          },
          {
            name: 'Hacker - xx-hacker',
            value: 'xx-hacker'
          },
          {
            name: 'Haitian Creole - ht',
            value: 'ht'
          },
          {
            name: 'Hausa - ha',
            value: 'ha'
          },
          {
            name: 'Hawaiian - haw',
            value: 'haw'
          },
          {
            name: 'Hebrew - iw',
            value: 'iw'
          },
          {
            name: 'Hebrew - he',
            value: 'he'
          },
          {
            name: 'Hindi - hi',
            value: 'hi'
          },
          {
            name: 'Hungarian - hu',
            value: 'hu'
          },
          {
            name: 'Icelandic - is',
            value: 'is'
          },
          {
            name: 'Igbo - ig',
            value: 'ig'
          },
          {
            name: 'Indonesian - id',
            value: 'id'
          },
          {
            name: 'Interlingua - ia',
            value: 'ia'
          },
          {
            name: 'Irish - ga',
            value: 'ga'
          },
          {
            name: 'Italian - it',
            value: 'it'
          },
          {
            name: 'Japanese - ja',
            value: 'ja'
          },
          {
            name: 'Javanese - jw',
            value: 'jw'
          },
          {
            name: 'Kannada - kn',
            value: 'kn'
          },
          {
            name: 'Kazakh - kk',
            value: 'kk'
          },
          {
            name: 'Kinyarwanda - rw',
            value: 'rw'
          },
          {
            name: 'Kirundi - rn',
            value: 'rn'
          },
          {
            name: 'Klingon - xx-klingon',
            value: 'xx-klingon'
          },
          {
            name: 'Kongo - kg',
            value: 'kg'
          },
          {
            name: 'Korean - ko',
            value: 'ko'
          },
          {
            name: 'Krio (Sierra Leone) - kri',
            value: 'kri'
          },
          {
            name: 'Kurdish - ku',
            value: 'ku'
          },
          {
            name: 'Kurdish (Soranî) - ckb',
            value: 'ckb'
          },
          {
            name: 'Kyrgyz - ky',
            value: 'ky'
          },
          {
            name: 'Laothian - lo',
            value: 'lo'
          },
          {
            name: 'Latin - la',
            value: 'la'
          },
          {
            name: 'Latvian - lv',
            value: 'lv'
          },
          {
            name: 'Lingala - ln',
            value: 'ln'
          },
          {
            name: 'Lithuanian - lt',
            value: 'lt'
          },
          {
            name: 'Lozi - loz',
            value: 'loz'
          },
          {
            name: 'Luganda - lg',
            value: 'lg'
          },
          {
            name: 'Luo - ach',
            value: 'ach'
          },
          {
            name: 'Macedonian - mk',
            value: 'mk'
          },
          {
            name: 'Malagasy - mg',
            value: 'mg'
          },
          {
            name: 'Malay - ms',
            value: 'ms'
          },
          {
            name: 'Malayalam - ml',
            value: 'ml'
          },
          {
            name: 'Maltese - mt',
            value: 'mt'
          },
          {
            name: 'Maldives - mv',
            value: 'mv'
          },
          {
            name: 'Maori - mi',
            value: 'mi'
          },
          {
            name: 'Marathi - mr',
            value: 'mr'
          },
          {
            name: 'Mauritian Creole - mfe',
            value: 'mfe'
          },
          {
            name: 'Moldavian - mo',
            value: 'mo'
          },
          {
            name: 'Mongolian - mn',
            value: 'mn'
          },
          {
            name: 'Montenegrin - sr-me',
            value: 'sr-me'
          },
          {
            name: 'Myanmar - my',
            value: 'my'
          },
          {
            name: 'Nepali - ne',
            value: 'ne'
          },
          {
            name: 'Nigerian Pidgin - pcm',
            value: 'pcm'
          },
          {
            name: 'Northern Sotho - nso',
            value: 'nso'
          },
          {
            name: 'Norwegian - no',
            value: 'no'
          },
          {
            name: 'Norwegian (Nynorsk) - nn',
            value: 'nn'
          },
          {
            name: 'Occitan - oc',
            value: 'oc'
          },
          {
            name: 'Oriya - or',
            value: 'or'
          },
          {
            name: 'Oromo - om',
            value: 'om'
          },
          {
            name: 'Pashto - ps',
            value: 'ps'
          },
          {
            name: 'Persian - fa',
            value: 'fa'
          },
          {
            name: 'Pirate - xx-pirate',
            value: 'xx-pirate'
          },
          {
            name: 'Polish - pl',
            value: 'pl'
          },
          {
            name: 'Portuguese - pt',
            value: 'pt'
          },
          {
            name: 'Portuguese (Brazil) - pt-br',
            value: 'pt-br'
          },
          {
            name: 'Portuguese (Portugal) - pt-pt',
            value: 'pt-pt'
          },
          {
            name: 'Punjabi - pa',
            value: 'pa'
          },
          {
            name: 'Quechua - qu',
            value: 'qu'
          },
          {
            name: 'Romanian - ro',
            value: 'ro'
          },
          {
            name: 'Romansh - rm',
            value: 'rm'
          },
          {
            name: 'Runyakitara - nyn',
            value: 'nyn'
          },
          {
            name: 'Russian - ru',
            value: 'ru'
          },
          {
            name: 'Scots Gaelic - gd',
            value: 'gd'
          },
          {
            name: 'Serbian - sr',
            value: 'sr'
          },
          {
            name: 'Serbo-Croatian - sh',
            value: 'sh'
          },
          {
            name: 'Sesotho - st',
            value: 'st'
          },
          {
            name: 'Setswana - tn',
            value: 'tn'
          },
          {
            name: 'Seychellois Creole - crs',
            value: 'crs'
          },
          {
            name: 'Shona - sn',
            value: 'sn'
          },
          {
            name: 'Sindhi - sd',
            value: 'sd'
          },
          {
            name: 'Sinhalese - si',
            value: 'si'
          },
          {
            name: 'Slovak - sk',
            value: 'sk'
          },
          {
            name: 'Slovenian - sl',
            value: 'sl'
          },
          {
            name: 'Somali - so',
            value: 'so'
          },
          {
            name: 'Spanish - es',
            value: 'es'
          },
          {
            name: 'Spanish (Latin American) - es-419',
            value: 'es-419'
          },
          {
            name: 'Sundanese - su',
            value: 'su'
          },
          {
            name: 'Swahili - sw',
            value: 'sw'
          },
          {
            name: 'Swedish - sv',
            value: 'sv'
          },
          {
            name: 'Tajik - tg',
            value: 'tg'
          },
          {
            name: 'Tamil - ta',
            value: 'ta'
          },
          {
            name: 'Tatar - tt',
            value: 'tt'
          },
          {
            name: 'Telugu - te',
            value: 'te'
          },
          {
            name: 'Thai - th',
            value: 'th'
          },
          {
            name: 'Tigrinya - ti',
            value: 'ti'
          },
          {
            name: 'Tonga - to',
            value: 'to'
          },
          {
            name: 'Tshiluba - lua',
            value: 'lua'
          },
          {
            name: 'Tumbuka - tum',
            value: 'tum'
          },
          {
            name: 'Turkish - tr',
            value: 'tr'
          },
          {
            name: 'Turkmen - tk',
            value: 'tk'
          },
          {
            name: 'Twi - tw',
            value: 'tw'
          },
          {
            name: 'Uighur - ug',
            value: 'ug'
          },
          {
            name: 'Ukrainian - uk',
            value: 'uk'
          },
          {
            name: 'Urdu - ur',
            value: 'ur'
          },
          {
            name: 'Uzbek - uz',
            value: 'uz'
          },
          {
            name: 'Vanuatu - vu',
            value: 'vu'
          },
          {
            name: 'Vietnamese - vi',
            value: 'vi'
          },
          {
            name: 'Welsh - cy',
            value: 'cy'
          },
          {
            name: 'Wolof - wo',
            value: 'wo'
          },
          {
            name: 'Xhosa - xh',
            value: 'xh'
          },
          {
            name: 'Yiddish - yi',
            value: 'yi'
          },
          {
            name: 'Yoruba - yo',
            value: 'yo'
          },
          {
            name: 'Zulu - zu',
            value: 'zu'
          }
        ]
      },
      {
        displayName: '`travel_mode` Travel mode',
        name: 'travel_mode',
        description: 'Parameter defines the travel mode.Available options:6 - Best (Default)0 - Driving9 - Two-wheeler3 - Transit2 - Walking1 - Cycling4 - Flight',
        default: '6',
        routing: {
          request: {
            qs: {
              travel_mode: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Best (Default) - 6',
            value: '6'
          },
          {
            name: 'Driving - 0',
            value: '0'
          },
          {
            name: 'Two-wheeler - 9',
            value: '9'
          },
          {
            name: 'Transit - 3',
            value: '3'
          },
          {
            name: 'Walking - 2',
            value: '2'
          },
          {
            name: 'Cycling - 1',
            value: '1'
          },
          {
            name: 'Flight - 4',
            value: '4'
          }
        ]
      },
      {
        displayName: '`start_data_id` Starting point data ID',
        name: 'start_data_id',
        description: 'Parameter defines the data ID of the starting point for the direction you want to search. Find the data ID of a place using our Google Maps API.Alternatively, you can use start_addr or start_coords.',
        default: null,
        routing: {
          request: {
            qs: {
              start_data_id: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: '`end_data_id` Ending point data ID',
        name: 'end_data_id',
        description: 'Parameter defines the data ID of the ending point for the direction you want to search. Find the data ID of a place using our Google Maps API.Alternatively, you can use end_addr or end_coords.',
        default: null,
        routing: {
          request: {
            qs: {
              end_data_id: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: '`start_coords` Starting point GPS coordinates',
        name: 'start_coords',
        description: 'Parameter defines the GPS coordinates of the starting point for the direction you want to search. The format is latitude,longitude. E.g. 30.197471099,-97.66635289.Alternatively, you can use start_addr or start_data_id.',
        default: null,
        routing: {
          request: {
            qs: {
              start_coords: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: '`end_coords` Ending point GPS coordinates',
        name: 'end_coords',
        description: 'Parameter defines the GPS coordinates of the ending point for the direction you want to search. The format is latitude,longitude. E.g. 30.197471099,-97.66635289.Alternatively, you can use end_addr or end_data_id.',
        default: null,
        routing: {
          request: {
            qs: {
              end_coords: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: '`distance_unit` Distance Unit',
        name: 'distance_unit',
        description: 'Parameter defines the displayed distance unit.Available options:1 - miles0 - km',
        default: '1',
        routing: {
          request: {
            qs: {
              distance_unit: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'miles - 1',
            value: '1'
          },
          {
            name: 'km - 0',
            value: '0'
          }
        ]
      },
      {
        displayName: '`avoid` Avoid options',
        name: 'avoid',
        description: 'Parameter defines avoid options.Available options:highways - Highwaystolls - Tollsferries - FerriesYou can also combine multiple options by joining them with a comma (e.g.: highways,tolls).',
        default: null,
        routing: {
          request: {
            qs: {
              avoid: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: '`prefer` Perfer options',
        name: 'prefer',
        description: 'Parameter defines preferred transit options.Available options:bus - Bussubway - Subwaytrain - Traintram_light_rail - Tram and light railYou can also combine multiple options by joining them with a comma (e.g.: subway,train).Parameter works only if travel_mode parameter is set to: 3 (Transit)',
        default: null,
        routing: {
          request: {
            qs: {
              prefer: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: '`route` Route options',
        name: 'route',
        description: 'Parameter defines route options.Available options:2 - Fewer transfers3 - Less walking4 - Wheelchair accessibleParameter works only if travel_mode parameter is set to: 3 (Transit)',
        default: '2',
        routing: {
          request: {
            qs: {
              route: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Fewer transfers - 2',
            value: '2'
          },
          {
            name: 'Less walking - 3',
            value: '3'
          },
          {
            name: 'Wheelchair accessible - 4',
            value: '4'
          }
        ]
      },
      {
        displayName: '`time` Travel time',
        name: 'time',
        description: 'Parameter defines the time to travel.Available options:depart_at:xxxxxx - Specifies the departure time, where xxxxxx is the timestamp. E.g. depart_at:1698229538 specifies the departure time to 2023-10-25 10:25:38 GMT+0000arrive_by:xxxxxx - Specifies the arrival time, where xxxxxx is the timestamp. E.g. arrive_by:1698229538 specifies the arrival time to 2023-10-25 10:25:38 GMT+0000last_available - Takes the last available transit. This option works only if travel_mode parameter is set to: 3 (Transit)',
        default: null,
        routing: {
          request: {
            qs: {
              time: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
			...serpApiFields
    ]
  }
];