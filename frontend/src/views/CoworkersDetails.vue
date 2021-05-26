<template>
	<b-container class="pt-2">
		<Profile :user="user" />
		<Description :user="user" />
	</b-container>
</template>

<script>
import { mapState } from 'vuex';
import Profile from '@/components/Profile';
import Description from '@/components/Description';
export default {
	name: 'Home',
	components: { Profile, Description },

	created() {
		this.$store.dispatch('fetchUserData');
	},

	computed: mapState(['user'])
};
</script>
