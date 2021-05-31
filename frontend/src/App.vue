<template>
	<div id="app">
		<header></header>
		<main class="mx-3">
			<router-view />
		</main>
		<footer></footer>
	</div>
</template>

<style lang="scss">
body {
	background-color: #edf0f5 !important;
	color: #313f66;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #313f66;
}

.h6 {
	color: #313f66;
	font-size: 17px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	line-height: 20px !important;
	letter-spacing: 0em !important;
}

.custom-text {
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	color: #7182b7;
}

.table th {
	text-align: center;
}

.table td {
	text-align: center;
}

// .form-control {
// 	color: #313f66 !important;
// }
.form-control:disabled,
.form-control[readonly] {
	background-color: transparent !important;
	opacity: 0.65 !important;
}
</style>
