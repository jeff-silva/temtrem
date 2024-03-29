import Vue from 'vue';

// https://github.com/avil13/vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

// https://vuejs-tips.github.io/vue-the-mask/
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask);

// https://vue2-leaflet.netlify.app/
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-icon', LIcon);

// https://element.eleme.io/
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-BR';
Vue.use(ElementUI, {locale});


Vue.prototype.$log = function() {
	for(var i in arguments) {
		console.log(arguments[i]);
	}
};

Vue.prototype.$env = {
	NODE_ENV: process.env.NODE_ENV,
	APP_NAME: process.env.APP_NAME,
	APP_DESCRIPTION: process.env.APP_DESCRIPTION,
	APP_VERSION: (require('../../package.json').version || '0.0.0'),
	APP_COLOR: (process.env.APP_COLOR || false),
	APP_LANG: (process.env.APP_LANG || false),
};

Vue.prototype.$copy = function(text) {
	return new Promise((resolve, reject) => {
		if (text.nodeType) {
			text = text.innerText;
		}
	
		let ta = Object.assign(document.createElement('textarea'), {
			style: {position:"fixed", top:-1000},
			value: text,
		});
	
		document.body.appendChild(ta);
		ta.focus();
		ta.select();
		let bool = document.execCommand('copy');
		document.body.removeChild(ta);
		
		if (bool) resolve(text);
		else reject('Erro ao copiar');
	});
};

Vue.prototype.$debounce = function(fn, delay=500) {
	window.vueTimeouts = window.vueTimeouts||{};
	let id = fn.toString();
	if (window.vueTimeouts[id]) clearTimeout(window.vueTimeouts[id]);
	window.vueTimeouts[id] = setTimeout(fn, delay);
};

Vue.prototype.$push = function(sessions, callback) {
	let preventFirstRun = true;
	this.$fire.database.ref('push').on('value', (snap) => {
		// if (preventFirstRun) {
		// 	preventFirstRun = false;
		// 	return callback({model: {}});
		// }

		let value = snap.val();
		sessions = Array.isArray(sessions)? sessions: [sessions];
		sessions.forEach(session => {
			if (value.session!=session) return;
			callback(value);
		});
	});
};

Vue.prototype.$graphql = function(query) {
	return this.$axios.post('/graphql', {query});
};

// Filters

import moment from 'moment';

Vue.filter('date', function(value, format='DD/MM/YYYY') {
	let d = moment(value);
	return d.isValid()? d.format(format): '';
});

Vue.filter('time', function(value, format='hh:mm') {
	let d = moment(value);
	return d.isValid()? d.format(format): '';
});

Vue.filter('datetime', function(value, format='DD/MM/YYYY à\\s hh:mm') {
	let d = moment(value);
	return d.isValid()? d.format(format): '';
});

Vue.filter('numberFormat', function(value, decimals=2, decimal_separator='.', thousands_separator=',') {
	value = isNaN(value)? 0: value;
	return new Intl.NumberFormat('pt-BR', {minimumSignificantDigits:decimals, maximumSignificantDigits:decimals})
		.format(value).split(',').map(n => n.replace(/\./g, decimal_separator))
		.join(thousands_separator);
});


Vue.filter('linkWhatsapp', function(number, text='') {
	number = (number||'').replace(/[^0-9]/g, '');
	text = encodeURI(text);
	return `https://api.whatsapp.com/send?phone=${number}&text=${text}`;
});

// Directives



// Redirect
// https://auth.nuxtjs.org/api/auth/#onredirecthandler