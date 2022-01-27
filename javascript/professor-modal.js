const showProfessorModal = (professor) => {
	const backdrop = document.createElement("div");
	backdrop.className = "backdrop";

	backdrop.style.top = `${window.scrollY}px`;

	const body = document.getElementsByTagName("body")[0];

	const box = document.createElement("div");
	box.className = "backdrop-box";

	const name_and_img_container = document.createElement("div");
	name_and_img_container.className = "name-img-container";

	const img = document.createElement("img");
	img.src = professor.image_path;
	img.alt = `Imagem professor ${professor.name}`;

	name_and_img_container.appendChild(img);

	const professor_name = document.createElement("strong");
	professor_name.className = "professor-name";
	professor_name.innerText = professor.name;

	name_and_img_container.appendChild(professor_name);

	const other_information = document.createElement("section");
	other_information.className = "professor-other-information";

	for (let detail of professor.details) {
		const title = document.createElement("strong");
		title.className = "details-title";

		title.innerText = detail.title;

		const texts = document.createElement("p");
		texts.className = "details-text";

		texts.innerText = detail.text;

		other_information.append(title);
		other_information.append(texts);
	}

	box.appendChild(name_and_img_container);
	box.appendChild(other_information);

	const close_button = document.createElement("button");
	close_button.className = "close-button";
	close_button.innerHTML = '<span class="material-icons">close</span>';

	close_button.addEventListener("click", () => {
		backdrop.remove();
		body.style.overflow = "auto";
	});

	box.appendChild(close_button);

	backdrop.appendChild(box);

	body.appendChild(backdrop);
	// disable scroll
	body.style.overflow = "hidden";
};

window.app = { showProfessorModal };
