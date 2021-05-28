<template>
	<b-container class="pt-2" fluid>
		<Profile :user="user" />
		<Description :user="user" />
	</b-container>
</template>

<script>
import { mapState } from 'vuex';
import { isEmpty } from 'lodash';
import Profile from '@/components/Profile';
import Description from '@/components/Description';

export default {
	name: 'Home',
	components: { Profile, Description },

	created() {
		if (isEmpty(this.$store.state.user)) {
			this.$store.dispatch('fetchUser');
		}
	},

	computed: mapState(['user'])
};
</script>
