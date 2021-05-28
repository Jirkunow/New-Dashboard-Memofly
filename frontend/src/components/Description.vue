<template>
	<b-card class="desc">
		<div class="calendario">
			<h6 class="h6 mb-4">Calendario</h6>
			<span class="custom-text">{{ user.calendario }}</span>
		</div>

		<h6 class="h6 mb-4">Orari di lavoro</h6>
		<b-table-lite :items="user.items" class="table" bordered></b-table-lite>

		<div class="button-container">
			<b-button class="submit-button" @click="goToModifyPage"
				>Modifica</b-button
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

	data() {
		return {};
	},

	methods: {
		goToModifyPage() {
			this.$router.push('/modify-form');
		}
	}
};
</script>

<style>
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

.calendario {
	display: flex;
	align-items: baseline;
}

.calendario h6 {
	margin-right: 0.5rem;
}

.table .bTableThStyle {
	max-width: 12rem !important;
	text-overflow: ellipsis !important;
	background-color: coral !important;
}

.button-container {
	display: flex;
	justify-content: flex-end;
	margin: 45px 0 20px 0;
}

.submit-button {
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
