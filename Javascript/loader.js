/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const $ = require('jquery');

$('#cssInject').replaceWith(`
<link rel="stylesheet" href="CSS/bootstrap.min.css" />
`);

$('#javaInject').replaceWith(`
<script src="Javascript/bundledpackages.js"></script>
<script src="Javascript/popper.min.js"></script>
`);

$(`#navbarInject`).replaceWith(`
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
	<a class="navbar-brand" href="index.html">Home</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="false"
		aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="Corruption.html">Corruption</a>
			</li>
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="Social Injustice.html">Social Injustice</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			</li>
		</ul>
		<form class="d-flex" role="search">
			<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
			<button class="btn btn-outline-success" type="submit">Search</button>
		</form>
	</div>
</div>
</nav>
`);
