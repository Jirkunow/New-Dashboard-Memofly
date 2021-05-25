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
</style>
