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
<nav class="navbar navbar-expand-md bg-light">
	<button	class="navbar-toggler w-100" type="button" data-bs-toggle="collapse"
		data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
		aria-expanded="false"	aria-label="Toggle navigation">
		<span class='navbar-toggler-icon'></span>
	</button>
	<div class="collapse navbar-collapse mt-2 mb-1 ms-1" id="navbarSupportedContent">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="index.html">Home</a>
			</li>
			<div class='vr d-none d-md-block'></div>
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="Corruption.html">Corruption</a>
			</li>
			<div class='vr d-none d-md-block'></div>
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="Social Injustice.html">Social Injustice</a>
			</li>
			<div class='vr d-none d-md-block'></div>
			<li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			</li>
		</ul>
		<form class="d-flex mb-2" role="search">
			<input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
			<button class="btn btn-outline-success me-3" type="submit">Search</button>
		</form>
	</div>
</nav>
`);
