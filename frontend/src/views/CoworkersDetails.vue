<template>
	<section>
		<Profile />
		<Description />
	</section>
</template>

<script>
import Profile from '@/components/Profile';
import Description from '@/components/Description';
export default {
	name: 'Home',
	components: { Profile, Description }
};
</script>
