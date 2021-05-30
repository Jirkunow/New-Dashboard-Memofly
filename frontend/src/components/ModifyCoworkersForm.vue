<template>
	<b-form @submit="onSubmit" @reset="onReset">
		<!-- first-line -->
		<b-row class="mb-4">
			<b-col cols="6">
				<b-form-group id="input-group-1">
					<b-form-input
						id="input-1"
						v-model="user.nome"
						placeholder="Nome"
						required
					></b-form-input>
				</b-form-group>
			</b-col>

			<b-col cols="6">
				<b-form-group id="input-group-2">
					<b-form-input
						id="input-2"
						v-model="user.cognome"
						placeholder="Cognome"
						required
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<!-- first-line -->

		<!-- second-line -->
		<b-row class="justify-content-center mb-4">
			<b-col cols="12" col md="4" class="mb-4 mb-md-0">
				<b-form-group id="input-group-1">
					<b-form-input
						id="input-1"
						v-model="user.telefono"
						placeholder="Telefono"
						required
					></b-form-input>
				</b-form-group>
			</b-col>

			<b-col cols="12" col md="4" class="mb-4 mb-md-0">
				<b-form-group id="input-group-2">
					<b-form-input
						id="input-2"
						v-model="user.testo"
						placeholder="Email"
						type="email"
						required
					></b-form-input>
				</b-form-group>
			</b-col>

			<b-col cols="12" col md="4" class="mb-md-0">
				<b-form-group id="input-group-2">
					<b-form-input
						id="input-2"
						v-model="user.citta"
						placeholder="Сittà"
						required
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<!-- second-line -->

		<!-- third-line -->
		<b-row class="mb-5">
			<b-col cols="6">
				<b-form-group id="input-group-1">
					<b-form-input
						id="input-1"
						v-model="user.ruolo"
						placeholder="Ruollo"
						required
					></b-form-input>
				</b-form-group>
			</b-col>

			<b-col cols="6">
				<b-form-group id="input-group-2">
					<b-form-input
						id="input-2"
						v-model="user.ruoloSecondario"
						placeholder="Ruollo Cecondario"
						required
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<!-- third-line -->

		<b-form-textarea
			id="textarea"
			v-model="user.descrizione"
			placeholder="Descrizione"
		></b-form-textarea>

		<div class="button-container">
			<b-button class="btn-shadow-primary m-1" type="submit" variant="primary"
				>Salva</b-button
			>
			<b-button class="btn-shadow-danger m-1" type="reset" variant="danger"
				>Annulla</b-button
			>
		</div>
	</b-form>
</template>

<script>
export default {
	name: 'ModifyCoworkersForm',
	props: {
		user: {
			default: () => {},
			required: true,
			type: Object
		}
	},

	methods: {
		onSubmit(event) {
			event.preventDefault();
			this.$store.dispatch('saveUser', this.user);
		},
		onReset(event) {
			event.preventDefault();
			this.$store.dispatch('deleteUser', this.user.id);
		}
	}
};
</script>

<style scoped>
.button-container {
	display: flex;
	justify-content: flex-end;
	margin-top: 1.25rem;
	margin-bottom: 0;
}

.btn-shadow-primary {
	box-shadow: 0 7px 14px 0 rgb(80 110 228 / 50%);
}

.btn-shadow-danger {
	box-shadow: 0 7px 14px 0 rgb(251 89 164 / 50%);
}
</style>
