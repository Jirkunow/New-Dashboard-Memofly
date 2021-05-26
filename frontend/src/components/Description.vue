<template>
	<b-card class="desc">
		<h1 class="title">{{ `${user.nome} ${user.cognome}` }}</h1>

		<h6 class="subtitle text-uppercase">{{ user.ruoloSecondario }}</h6>

		<b-row align-v="center">
			<b-col col lg="6">
				<p class="user-info">
					{{ user.descrizione }}
				</p>
			</b-col>
		</b-row>
		<div class="button-container">
			<b-button class="submit-button" @click="goToModifyPage"
				>Modifica</b-button
			>
			<b-button class="cancel-button" variant="outline-primary"
				>Elimina</b-button
			>
		</div>
	</b-card>
</template>

<script>
export default {
	name: 'Description',

	props: {
		user: {
			default: () => {},
			required: true,
			type: Object
		}
	},

	methods: {
		goToModifyPage() {
			this.$router.push('/modify-form');
		}
	}
};
</script>

<style scope>
.desc {
	margin-top: 1.25rem;
}

.title {
	color: #313f66;
}

.subtitle {
	margin: 1rem 0;
	color: #313f66;
}

.user-info {
	color: #a4abc5;
}

.button-container {
	margin: 0.8rem 0 2rem 0;
}

.submit-button {
	margin-right: 0.5rem;
	color: #fff;
	background: linear-gradient(14deg, #506ee4 0%, rgba(80, 110, 228, 0.6));
	box-shadow: 0 7px 14px 0 rgb(80 110 228 / 50%);
	border-radius: 0;
}

.cancel-button:hover {
	color: #fff;
	background: linear-gradient(14deg, #506ee4 0%, rgba(80, 110, 228, 0.6));
}
</style>
