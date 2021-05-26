import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {}
	},
	mutations: {
		SET_USER(state, payload) {
			return (state.user = payload);
		}
	},

	actions: {
		async fetchUserData({ commit }) {
			try {
				// const res = await axios.get(
				// 	'https://www.memofly.it:3000/MW/v0.1/collaboratore'
				// );

				const res = {
					data: {
						id: 3212,
						nome: 'Laura',
						cognome: 'Rossi',
						telefono: '3452141451',
						testo: 'laurarossi@gmail.com',
						citta: 'Selargius',
						ruolo: 'Parrucchiera',
						ruoloSecondario:
							'Proprietaria di Hair spa e specializzata in taglio donna',
						descrizione:
							'Eccello nel taglio donna and more stuff that i don’t have the want to write'
					}
				};

				setTimeout(() => {
					console.log('res.data', res.data);
					commit('SET_USER', res.data);
				}, 1000);
			} catch (e) {
				console.log('Error:', e);
			}
		}
	},
	modules: {}
});
