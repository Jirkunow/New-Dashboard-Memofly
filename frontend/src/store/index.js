import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import { clone } from 'lodash';
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
		async fetchUser({ commit }) {
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
							'Eccello nel taglio donna and more stuff that i don’t have the want to write',
						calendario: 'laurarossihair@gmail.com',
						calendarioOptions: [
							'laurarossihair@gmail.com',
							'laurarossihair_2@gmail.com',
							'laurarossihair_3@gmail.com',
							'laurarossihair_4@gmail.com',
							'laurarossihair_5@gmail.com',
							'laurarossihair_6@gmail.com',
							'laurarossihair_7@gmail.com'
						],
						orari_di_lavoro: 'azienda',

						items: [
							{
								isActive: false,
								weekday: 'Lunedì',
								apertura: '00:00',
								inizio_pausa: '00:00',
								fine_pausa: '00:00',
								chiusura: '00:00'
							},
							{
								isActive: true,
								weekday: 'Martedì',
								apertura: '09:30',
								inizio_pausa: '13:30',
								fine_pausa: '14:30',
								chiusura: '20:30'
							},
							{
								isActive: true,
								weekday: 'Mercoledì',
								apertura: '09:30',
								inizio_pausa: '13:30',
								fine_pausa: '14:30',
								chiusura: '20:30'
							},
							{
								isActive: true,
								weekday: 'Giovedì',
								apertura: '09:30',
								inizio_pausa: '13:30',
								fine_pausa: '14:30',
								chiusura: '20:30'
							},
							{
								isActive: true,
								weekday: 'Venerdì',
								apertura: '09:30',
								inizio_pausa: '13:30',
								fine_pausa: '14:30',
								chiusura: '20:30'
							},
							{
								isActive: true,
								weekday: 'Sabato',
								apertura: '09:30',
								inizio_pausa: '13:30',
								fine_pausa: '14:30',
								chiusura: '20:30'
							},
							{
								isActive: false,
								weekday: 'Domenica',
								apertura: '00:00',
								inizio_pausa: '00:00',
								fine_pausa: '00:00',
								chiusura: '00:00'
							}
						]
					}
				};

				setTimeout(() => {
					commit('SET_USER', res.data);
				}, 1000);
			} catch (e) {
				console.log('Error:', e);
			}
		},

		async saveUser({ commit }, payload) {
			try {
				// const res = await axios.post(
				// 	'https://www.memofly.it:3000/MW/v0.1/collaboratore',
				// 	payload
				// );

				setTimeout(() => {
					commit('SET_USER', payload);
					router.push('/');
				}, 800);
			} catch (e) {
				console.log('Error:', e);
			}
		},

		async deleteUser({ commit }, payload) {
			try {
				// const res = await axios.delete(
				// 	'https://www.memofly.it:3000/MW/v0.1/collaboratore',
				// 	payload
				// );

				setTimeout(() => {
					console.log('user was deleted id: ', payload);
					commit('SET_USER', {});
					router.push('/collaboratori');
				}, 1500);
			} catch (e) {
				console.log('Error:', e);
			}
		}
	},

	getters: {
		userClone(state) {
			const userClone = clone(state.user);
			return userClone;
		}
	},

	modules: {}
});
