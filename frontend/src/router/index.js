import Vue from 'vue';
import VueRouter from 'vue-router';
import CoworkersDetails from '../views/CoworkersDetails.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'CoworkersDetails',
		component: CoworkersDetails
	},
	{
		path: '/modify-form',
		name: 'ModifyCoworkers',
		component: () =>
			import(
				/* webpackChunkName: "modify-coworkers" */ '../views/ModifyCoworkers.vue'
			)
	},
	{
		path: '/modify-form-v2',
		name: 'ModifyCoworkers-v2',
		component: () =>
			import(
				/* webpackChunkName: "modify-coworkers-v2" */ '../views/ModifyCoworkers-v2.vue'
			)
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
