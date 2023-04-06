export const navbar = `
<nav class="navbar navbar-expand-lg bg-light border border-2">
<div class="container-fluid">
	<button class="navbar-toggler w-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarText">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
				<a class="nav-link active" href="index.html">Home</a>
			</li>
			<div class="vr d-none d-lg-block"></div>
			<li class="nav-item">
				<a class="nav-link" href="./Violence In Brazil.html">Violence</a>
			</li>
			<div class="vr d-none d-lg-block"></div>
			<li class="nav-item">
				<a class="nav-link" href="./Income Inequality.html">Income Inequality</a>
			</li>
			<div class="vr d-none d-lg-block"></div>

			<li class="nav-item">
				<a class="nav-link" href="./Political Corruption.html">Political Corruption</a>
			</li>
			<div class="vr d-none d-lg-block"></div>

			<li class="nav-item">
				<a class="nav-link" href="./Human Trafficking.html">Human Trafficking</a>
			</li>
			<div class="vr d-none d-lg-block"></div>

			<li class="nav-item">
				<a class="nav-link" href="./Racism.html">Racism</a>
			</li>
		</ul>
		<div class="hstack gap-3">
			<a class="nav-link">Light</a>
			<div class="form-switch">
				<input type="checkbox" class="form-check-input" id="darkMode" />
			</div>
			<a class="nav-link me-2">Dark</a>
		</div>
	</div>
</div>
</nav>



`;

export function breadcrumb(activePage) {
	return `
	<div class="container-fluid border border-1 pt-3">
	<div class="container">
		<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
			<ol class="breadcrumb p-2">
				<li class="breadcrumb-item"><a href="index.html">Home</a></li>
				<li class="breadcrumb-item active">${activePage}</li>
			</ol>
		</nav>
	</div>
</div>
`;
}
