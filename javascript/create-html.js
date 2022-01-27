/*
- Nome
- Linhas de pesquisa
- Formação
- Lattes
*/

/* PROFESSOR TEMPLATE */
const professor = {
	name: "",
	email: "",
	instagram: "",
	description: "",
	image_path: "images/user.svg",
	research_lines: [],
	lattes_url: "",
	details: [],
};

/* CREATING PROFESSORS */
// carlos
var carlos = Object.create(professor);
carlos.name = "Carlos Antônio Ferreira";
carlos.email = "carlos.ferreira@ifgoiano.edu.br";
carlos.description =
	"Especialista em Arquivologia pelo Instituto de Pós-graduação e Graduação";
carlos.lattes_url = "http://lattes.cnpq.br/7241511249800428";

// cleon
var cleon = Object.create(professor);
cleon.name = "Cleon Xavier Pereira Junior";
cleon.email = "cleon.junior@ifgoiano.edu.br";
cleon.instagram = "https://www.instagram.com/cleonjr/";
cleon.description =
	"Doutor em Ciência da Computação pela Universidade Federal de Uberlândia";
cleon.image_path = "images-professor/cleon.gif";
cleon.research_lines = [
	"Tecnologias da Informação e Comunicação Aplicadas a Educação\nObjetivo: Desenvolvimento de softwares aplicáveis na área de Educação, que permitam estudos de interfaces com alunos em formação tecnológica, no desenvolvimento da criatividade e censo crítico.",
	"Controle e Automação, Sistemas Embarcados e Robótica\nObjetivo: Desenvolver projetos com uso de placa arduíno, robôs legos e sensores para automação de processos em gerais.",
];
cleon.lattes_url = "http://lattes.cnpq.br/2106704642081867";
cleon.details = [
	{
		title: "Título aqui",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		title: "Título aqui",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		title: "Título aqui",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		title: "Título aqui",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		title: "Título aqui",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

var tiba = Object.create(professor);
tiba.name = "Eliana Tiba Gomes Grande";
tiba.email = "eliana.tiba@ifgoiano.edu.br";
tiba.instagram = "https://www.instagram.com/elianatiba/";
tiba.description =
	"Doutora em Ciências com especialidade em Matemática pela Universidade do Minho";
tiba.lattes_url = "http://lattes.cnpq.br/0877661720541361";

var livia = Object.create(professor);
livia.name = "Lívia Mancine Coelho de Campos";
livia.email = "livia.mancine@ifgoiano.edu.br";
livia.description =
	"Mestra em Ciência da Computação pela Universidade Federal de Goiás.";
livia.lattes_url = "http://lattes.cnpq.br/8044316700748891";

var luciana = Object.create(professor);
luciana.name = "Luciana Recart Cardoso";
luciana.email = "luciana.cardoso@ifgoiano.edu.br";
luciana.description =
	"Mestra em Ciência da Computação pela Universidade Federal de Santa Catarina";
luciana.lattes_url = "http://lattes.cnpq.br/5413977629183306";

var marcos = Object.create(professor);
marcos.name = "Marcos Alves Vieira";
marcos.email = "marcos.vieira@ifgoiano.edu.br";
marcos.description =
	"Mestre em Ciência da Computação pela Universidade Federal de Goiás";
marcos.lattes_url = "http://lattes.cnpq.br/8386511137551387";

var newarney = Object.create(professor);
newarney.name = "Newarney Torrezão da Costa";
newarney.email = "newarney.costa@ifgoiano.edu.br";
newarney.description =
	"Doutorando em Ciência da Computação pela Universidade Federal de Uberlândia";
newarney.lattes_url = "http://lattes.cnpq.br/4986407746430136";

var thamer = Object.create(professor);
thamer.name = "Thamer Horbylon Nascimento";
thamer.email = "thamer.nascimento@ifgoiano.edu.br";
thamer.description =
	"Doutorando em Ciência da Computação pela Universidade Federal de Goiás";
thamer.image_path = "images-professor/thamer.gif";
thamer.lattes_url = "http://lattes.cnpq.br/2782156026516535";

var wesley = Object.create(professor);
wesley.name = "Wesley Flávio de Miranda";
wesley.email = "wesley.miranda@ifgoiano.edu.br";
wesley.description =
	"Especialização em Tecnologia de Redes com Cabeamento Estruturado pela Universidade Federal de Lavras";
wesley.lattes_url = "http://lattes.cnpq.br/8724449088932015";

var professors = [
	carlos,
	cleon,
	tiba,
	livia,
	luciana,
	marcos,
	newarney,
	thamer,
	wesley,
];

/* CREATING HTML */

for (let i = 0; i < professors.length; i++) {
	// card div
	var card = document.createElement("div");
	card.className = "card-professor";

	// professor's image
	var img = document.createElement("img");
	img.className = "image-professor";
	img.src = professors[i].image_path;

	card.appendChild(img);

	// professor's name
	var pname = document.createElement("a");
	pname.href = professors[i].lattes_url;
	pname.className = "name-professor";
	pname.innerText = professors[i].name;
	pname.target = "_blank";

	card.appendChild(pname);

	// info div
	var info_div = document.createElement("div");
	info_div.className = "info-professor";

	// professor's email
	var email_div = document.createElement("div");
	email_div.className = "email";
	email_div.innerHTML =
		'<span class="material-icons"> email </span>' + professors[i].email;

	info_div.appendChild(email_div);

	// professor's instagram
	if (professors[i].instagram != "") {
		var instagram_div = document.createElement("div");
		instagram_div.className = "instagram";

		var picon = document.createElement("span");
		picon.className = "material-icons";
		picon.innerText = "person";

		instagram_div.appendChild(picon);

		var panchor = document.createElement("a");
		panchor.href = professors[i].instagram;
		panchor.innerText = " instagram";

		instagram_div.appendChild(panchor);

		info_div.appendChild(instagram_div);
	}
	// professor's extra information
	var extra = document.createElement("p");
	extra.className = "extra-professor";
	extra.innerText = professors[i].description;

	info_div.appendChild(extra);

	card.appendChild(info_div);

	const read_more_button = document.createElement("button");
	read_more_button.innerText = "Mais sobre";

	read_more_button.addEventListener("click", () => {
		window.app.showProfessorModal(professors[i]);
	});

	card.appendChild(read_more_button);

	// where each card will be in
	var cards_div = document.getElementsByClassName("cards-professor");

	cards_div[0].appendChild(card);
}
