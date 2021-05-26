<template>
	<b-container fluid>
		<b-row class="justify-content-center">
			<b-col col lg="6">
				<b-card class="modify" cols="4">
					<img class="user-avatar" src="../assets/user-4.jpg" alt="" />

					<b-form @submit="onSubmit" @reset="onReset">
						<!-- first-line -->
						<b-row class="mb-4">
							<b-col cols="6">
								<b-form-group id="input-group-1">
									<b-form-input
										id="input-1"
										v-model="form.email"
										placeholder="Nome"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="6">
								<b-form-group id="input-group-2">
									<b-form-input
										id="input-2"
										v-model="form.name"
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
										v-model="form.email"
										type="email"
										placeholder="Telefono"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="12" col md="4" class="mb-4 mb-md-0">
								<b-form-group id="input-group-2">
									<b-form-input
										id="input-2"
										v-model="form.name"
										placeholder="email"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="12" col md="4" class="mb-md-0">
								<b-form-group id="input-group-2">
									<b-form-input
										id="input-2"
										v-model="form.name"
										placeholder="Citta"
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
										v-model="form.email"
										type="email"
										placeholder="Ruollo"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="6">
								<b-form-group id="input-group-2">
									<b-form-input
										id="input-2"
										v-model="form.name"
										placeholder="RuolloCecondario"
										required
									></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<!-- third-line -->

						<b-form-textarea
							id="textarea"
							v-model="form.text"
							placeholder="Descrizione"
						></b-form-textarea>

						<div class="button-container">
							<b-button
								class="btn-shadow-primary m-1"
								type="submit"
								variant="primary"
								>Salva</b-button
							>
							<b-button
								class="btn-shadow-danger m-1"
								type="reset"
								variant="danger"
								>Annulla</b-button
							>
						</div>
					</b-form>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'ModifyForm',

	data() {
		return {
			form: {
				email: '',
				name: '',
				text: ''
			},
			foods: [
				{ text: 'Select One', value: null },
				'Carrots',
				'Beans',
				'Tomatoes',
				'Corn'
			]
		};
	},

	methods: {
		onSubmit(event) {
			event.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(event) {
			event.preventDefault();

			this.form.email = '';
			this.form.name = '';
			this.form.text = '';
		}
	}
};
</script>

<style scoped>
.user-avatar {
	border: 3px dashed #e8ebf3;
	margin-bottom: 35px;
	width: 120px;
	height: auto;
}

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
