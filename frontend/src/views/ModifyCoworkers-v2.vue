<template>
	<b-container class="pt-2" fluid>
		<b-row class="justify-content-center">
			<b-col col xl="6">
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

						<b-row class="mb-4">
							<b-col col lg="8">
								<b-form-group
									id="input-group-6"
									label="Seleziona un calendario"
									label-for="modify-сoworkers-select"
									label-class="h6"
								>
									<b-form-select
										v-model="userClone.calendario"
										:options="userClone.calendarioOptions"
										id="modify-сoworkers-select"
										plain
									></b-form-select>
								</b-form-group>
							</b-col>
						</b-row>

						<b-row class="mb-4">
							<b-col>
								<b-form-group
									id="input-group-7"
									label="Orari di lavoro"
									label-class="h6"
								>
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
							</b-col>
						</b-row>

						<b-table
							:items="userClone.items"
							class="selectableTable"
							head-variant="light"
							responsive="sm"
						>
							<template #head(isActive)="data">
								<b-form-checkbox
									id="checkbox-weekday"
									v-model="isSelectedAll"
									name="checkbox-1"
									:value="true"
									:unchecked-value="false"
									@change="selectAllRows"
								>
									{{ data.columns }}
								</b-form-checkbox>
							</template>

							<template #cell(isActive)="{ item }">
								<b-form-checkbox
									v-model="item.isActive"
									:id="'checkbox-' + item.weekday"
									:name="'checkbox-' + item.weekday"
									:value="true"
									:unchecked-value="false"
									@change="selectRow(item)"
								>
								</b-form-checkbox>
							</template>

							<template #cell(weekday)="{ item }"
								><span :class="{ 'text-disabled': !item.isActive }">{{
									item.weekday
								}}</span>
							</template>

							<template #cell(apertura)="{ item }">
								<b-col col xl="10">
									<b-form-select
										v-model="item.apertura"
										:selected="item.apertura"
										:disabled="!item.isActive"
										:options="timeDropdownlist"
										plain
									></b-form-select>
								</b-col>
							</template>

							<template #cell(inizio_pausa)="{ item }">
								<b-col col xl="10">
									<b-form-select
										v-model="item.inizio_pausa"
										:selected="item.inizio_pausa"
										:disabled="!item.isActive"
										:options="timeDropdownlist"
										plain
									></b-form-select>
								</b-col>
							</template>

							<template #cell(fine_pausa)="{ item }">
								<b-col col xl="10">
									<b-form-select
										v-model="item.fine_pausa"
										:selected="item.fine_pausa"
										:disabled="!item.isActive"
										:options="timeDropdownlist"
										plain
									></b-form-select>
								</b-col>
							</template>

							<template #cell(chiusura)="{ item }">
								<b-col col xl="10">
									<b-form-select
										v-model="item.chiusura"
										:selected="item.chiusura"
										:disabled="!item.isActive"
										:options="timeDropdownlist"
										plain
									></b-form-select>
								</b-col>
							</template>
						</b-table>

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
	name: 'ModifyCoworkers-v2',

	data() {
		return {
			isSelectedAll: false,
			selected: [],
			time: []
		};
	},

	created() {
		if (isEmpty(this.$store.state.user)) {
			this.$store.dispatch('fetchUser');
		}
	},

	computed: {
		...mapGetters(['userClone']),

		timeDropdownlist() {
			let hours, minutes;
			const time = [];
			for (var i = 0; i <= 1430; i += 30) {
				hours = Math.floor(i / 60);
				if (hours < 10) {
					hours = '0' + hours;
				}
				minutes = i % 60;
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				time.push(hours + ':' + minutes);
			}
			return time;
		}
	},

	methods: {
		onSubmit(event) {
			event.preventDefault();
			this.$store.dispatch('saveUser', this.userClone);
		},
		onReset(event) {
			event.preventDefault();
			this.$store.dispatch('deleteUser', this.userClone.id);
		},
		selectAllRows() {
			if (this.isSelectedAll) {
				this.userClone.items.map((i) => (i.isActive = true));
			} else {
				this.userClone.items.map((i) => (i.isActive = false));
			}
		},
		selectRow(item) {
			console.log('item', item.isActive);
			if (this.userClone.items.some((i) => !i.isActive)) {
				this.isSelectedAll = false;
			} else {
				this.isSelectedAll = true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
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

.form-control {
	border: 0;
	border-radius: 0;
	border-bottom: 1px solid #dddee0;
	transition: border-color 0s ease-out;
}

.form-control:focus {
	box-shadow: none;
	border-color: #007bff;
}

.selectableTable .form-control {
	border-bottom: none;
}

.text-disabled {
	opacity: 0.65 !important;
}
</style>
