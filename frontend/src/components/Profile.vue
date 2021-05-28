<template>
	<div>
		<b-card class="profile">
			<b-row align-v="center">
				<b-col col lg="4">
					<div class="profile-main">
						<div class="profile-main-pic mb-3 mb-xl-0">
							<img
								src="../assets/user-4.jpg"
								alt="user-photo"
								class="rounded-circle"
							/>
						</div>
						<div class="profile_user-detail">
							<h5 class="user-name">{{ `${user.nome} ${user.cognome}` }}</h5>
							<p class="user-name-post">{{ user.ruolo }}</p>
						</div>
					</div>
				</b-col>
				<b-col
					col
					sm="12"
					md="12"
					lg="12"
					xl="4"
					class="personal-detail-container mt-xl-0"
				>
					<ul class="list-unstyled personal-detail">
						<li class="">
							<img
								class="custom-icon"
								src="../assets/icons/phone.svg"
								alt=""
							/>
							<!-- <i class="dripicons-phone mr-2 text-info font-18"></i> -->
							<b>Telefono </b> : {{ user.telefono }}
						</li>
						<li class="mt-2">
							<!-- <i
												class="dripicons-mail text-info font-18 mt-2 mr-2"
											></i> -->
							<img class="custom-icon" src="../assets/icons/mail.svg" alt="" />
							<b>Email </b> : {{ user.testo }}
						</li>
					</ul>
				</b-col>
			</b-row>
		</b-card>
		<div class="pills-tab p-3">
			<ul class="nav nav-pills">
				<li class="nav-item">
					<img src="../assets/icons/dot-yellow.svg" alt="" />
					<span class="custom-nav-link">Taglio donna</span>
				</li>
				<li class="nav-item">
					<img src="../assets/icons/dot-red.svg" alt="" />
					<span class="custom-nav-link">Colpi di sole</span>
				</li>
				<li class="nav-item">
					<img src="../assets/icons/dot-green.svg" alt="" />
					<span class="custom-nav-link">Piega</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		user: {
			default: () => {},
			required: true,
			type: Object
		}
	}
};
</script>

<style scoped>
.profile {
	background-image: url(../assets/images/pattern2.png);
	background-repeat: repeat;
	color: #fff;
}
.card.profile {
	border-radius: 0;
}

.profile-main {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
}

.profile-main-pic {
	position: relative;
	max-width: 128px;
	max-height: 128px;
	margin-right: 24px;
}

.user-name {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 6px;
}

.user-name-post {
	color: #a4abc5;
	font-size: 14px;
}

.personal-detail-container {
	margin-left: auto;
}

.custom-icon {
	height: 18px;
	margin-right: 0.5rem;
	width: 18px;
}

.pills-tab {
	background-color: #fff;
	border-bottom-right-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}

.nav-pills {
	background-color: #edf0f5;
	padding: 0.6rem;
}

.nav-item {
	margin-right: 1rem;
}

.custom-nav-link {
	margin-left: 0.3rem;
}
</style>
