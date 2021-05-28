<template>
	<div id="app">
		<header></header>
		<main class="mx-3">
			<router-view />
		</main>
		<footer></footer>
	</div>
</template>

<style>
body {
	background-color: #edf0f5 !important;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
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

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

.table th {
	text-align: center;
	background-color: #f1f5fa !important;
}

.table td {
	text-align: center;
}
</style>
