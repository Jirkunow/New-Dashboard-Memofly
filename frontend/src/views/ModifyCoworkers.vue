<template>
	<b-container class="pt-2" fluid>
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
										v-model="userClone.nome"
										placeholder="Nome"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="6">
								<b-form-group id="input-group-2">
									<b-form-input
										id="input-2"
										v-model="userClone.cognome"
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
										v-model="userClone.telefono"
										placeholder="Telefono"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="12" col md="4" class="mb-4 mb-md-0">
								<b-form-group id="input-group-2">
									<b-form-input
										id="input-2"
										v-model="userClone.testo"
										placeholder="Email"
										type="email"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="12" col md="4" class="mb-md-0">
								<b-form-group id="input-group-1">
									<b-form-input
										id="input-1"
										v-model="userClone.ruolo"
										placeholder="Ruollo"
										required
									></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<!-- second-line -->

						<b-row class="mb-5">
							<b-col col lg="8">
								<b-form-group id="input-group-6">
									<label for="modifyCoworkersSelect" class="form-label h6"
										>Seleziona un calendario</label
									>
									<b-form-select
										v-model="userClone.calendario"
										:options="userClone.calendarioOptions"
										id="modifyCoworkersSelect"
										class="form-select"
									></b-form-select>
								</b-form-group>
							</b-col>
						</b-row>

						<b-row class="mb-5">
							<b-col>
								<b-form-group id="input-group-7" label="Orari di lavoro">
									<!-- <label for="modifyCoworkersRadios" class="form-label h6"
										>Orari di lavoro</label
									> -->

									<b-form-radio
										v-model="userClone.orari_di_lavoro"
										name="some-radios"
										value="azienda"
										>Eredita gli orari dell’azienda</b-form-radio
									>
									<b-form-radio
										v-model="userClone.orari_di_lavoro"
										name="some-radios"
										value="personalizzati"
										>Orari di lavoro personalizzati</b-form-radio
									>
								</b-form-group>

								<div class="form-check">
									<input
										class="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<label class="form-check-label" for="flexRadioDefault1">
										Default radio
									</label>
								</div>
								<div class="form-check">
									<input
										class="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
										checked
									/>
									<label class="form-check-label" for="flexRadioDefault2">
										Default checked radio
									</label>
								</div>
							</b-col>
						</b-row>

						<b-form-radio-group
							id="radio-group-1"
							v-model="userClone.orari_di_lavoro"
							:options="options"
							name="radio-options"
						></b-form-radio-group>

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
import { mapGetters } from 'vuex';
import { isEmpty } from 'lodash';
export default {
	name: 'ModifyForm',

	data() {
		return {
			selected: 'first',
			options: [
				{ text: 'Toggle this custom radio', value: 'first' },
				{ text: 'Or toggle this other custom radio', value: 'second' },
				{ text: 'This one is Disabled', value: 'third', disabled: true },
				{ text: 'This is the 4th radio', value: { fourth: 4 } }
			]
		};
	},

	created() {
		if (isEmpty(this.$store.state.user)) {
			this.$store.dispatch('fetchUser');
		}
	},

	computed: mapGetters(['userClone']),

	methods: {
		onSubmit(event) {
			event.preventDefault();
			this.$store.dispatch('saveUser', this.userClone);
		},
		onReset(event) {
			event.preventDefault();
			this.$store.dispatch('deleteUser', this.userClone.id);
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
