<template>
	<b-card class="desc">
		<h1 class="title">Laura Rossi</h1>

		<h6 class="subtitle text-uppercase">some text here</h6>

		<b-row align-v="center">
			<b-col col lg="6">
				<p class="user-info">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
					voluptatibus repudiandae perferendis officiis molestias commodi
					cupiditate soluta. Sint quidem ullam odio neque at dolorum magni,
					architecto iure maxime voluptate, recusandae, exercitationem iusto
					rem consectetur quos molestias eligendi eum tenetur earum nihil velit
					deserunt asperiores. Fugit, veniam quia quod excepturi nesciunt magni
					quo eum sunt fuga iure ipsum officia voluptas recusandae! Quisquam
					nisi repudiandae voluptate quaerat, voluptatibus, distinctio cumque
					provident fugit ipsum, dolores voluptatum illo dignissimos deleniti
					maxime voluptates. Placeat alias autem maxime! Quod in temporibus
					quidem, inventore asperiores maiores corporis laudantium.
				</p>
			</b-col>
		</b-row>
		<div class="button-container">
			<b-button class="submit-button">Modifica</b-button>
			<b-button class="cancel-button" variant="outline-primary"
				>Elimina</b-button
			>
		</div>
	</b-card>
</template>

<script>
export default {
	name: 'Description'
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
