<template>
	<b-container class="pt-2" xl="6">
		<!-- component with user photo -->
		<Profile :user="user" />
		<!-- component with table -->
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
		// load user data from server only if not in store
		if (isEmpty(this.$store.state.user)) {
			this.$store.dispatch('fetchUser');
		}
	},

	computed: mapState(['user'])
};
</script>
