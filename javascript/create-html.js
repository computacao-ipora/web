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
	lattes_url: ""
};

/* CREATING PROFESSORS */
// carlos
var carlos = Object.create(professor);
carlos.name = "Carlos Antônio Ferreira";
carlos.email = "carlos.ferreira@ifgoiano.edu.br";
carlos.description = "Especialista em Arquivologia pelo Instituto de Pós-graduação e Graduação";
research_lines = [
	"exemplo1"
];
carlos.lattes_url = "http://lattes.cnpq.br/7241511249800428";

// cleon
var cleon = Object.create(professor);
cleon.name = "Cleon Xavier Pereira Junior";
cleon.email = "cleon.junior@ifgoiano.edu.br";
cleon.instagram = "https://www.instagram.com/cleonjr/";
cleon.description = "Doutor em Ciência da Computação pela Universidade Federal de Uberlândia";
cleon.image_path = "images-professor/cleon.gif";
cleon.research_lines = [
	"Tecnologias da Informação e Comunicação Aplicadas a Educação\nObjetivo: Desenvolvimento de softwares aplicáveis na área de Educação, que permitam estudos de interfaces com alunos em formação tecnológica, no desenvolvimento da criatividade e censo crítico.",
	"Controle e Automação, Sistemas Embarcados e Robótica\nObjetivo: Desenvolver projetos com uso de placa arduíno, robôs legos e sensores para automação de processos em gerais."
];
cleon.lattes_url = "http://lattes.cnpq.br/2106704642081867";

var professors = [carlos, cleon];


/* CREATING HTML */

for(var i = 0; i < professors.length; i++) {
	
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
		email_div.innerHTML = '<span class="material-icons"> email </span>' + professors[i].email;
		
		info_div.appendChild(email_div);
		
		// professor's instagram
		if(professors[i].instagram != "") {
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
	
	// where each card will be in
	var cards_div = document.getElementsByClassName("cards-professor");
	
	cards_div[0].appendChild(card);
}

/*
<div class="cards-professor">
<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Carlos Antônio Ferreira</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			carlos.ferreira@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Especialista em Arquivologia pelo Instituto de Pós-graduação e
			Graduação
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images-professor/cleon.gif" />
	<h3 class="name-professor">Cleon Xavier Pereira Junior</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			cleon.junior@ifgoiano.edu.br
		</div>
		
		<div class="instagram">
			<span class="material-icons"> person </span>
			<a href="https://www.instagram.com/cleonjr/"> instagram</a>
		</div>
		<p class="extra-professor">
			Doutor em Ciência da Computação pela Universidade Federal de
			Uberlândia
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Eliana Tiba Gomes Grande</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			eliana.tiba@ifgoiano.edu.br
		</div>
		
		<div class="instagram">
			<span class="material-icons"> person </span>
			<a href="https://www.instagram.com/elianatiba/"> instagram</a>
		</div>
		<p class="extra-professor">
			Doutora em Ciências com especialidade em Matemática pela
			Universidade do Minho
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Lívia Mancine Coelho de Campos</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			livia.mancine@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Mestra em Ciência da Computação pela Universidade Federal de
			Goiás.
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Luciana Recart Cardoso</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			luciana.cardoso@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Mestra em Ciência da Computação pela Universidade Federal de Santa
			Catarina
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Marcos Alves Vieira</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			marcos.vieira@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Mestre em Ciência da Computação pela Universidade Federal de Goiás
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Newarney Torrezão da Costa</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			newarney.costa@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Doutorando em Ciência da Computação pela Universidade Federal de
			Uberlândia
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images-professor/thamer.gif" />
	<h3 class="name-professor">Thamer Horbylon Nascimento</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			thamer.nascimento@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Doutorando em Ciência da Computação pela Universidade Federal de
			Goiás
		</p>
	</div>
</div>

<div class="card-professor">
	<img class="image-professor" src="images/user.svg" />
	<h3 class="name-professor">Wesley Flávio de Miranda</h3>
	<div class="info-professor">
		<div class="email">
			<span class="material-icons"> email </span>
			wesley.miranda@ifgoiano.edu.br
		</div>

		<p class="extra-professor">
			Especialização em Tecnologia de Redes com Cabeamento Estruturado
			pela Universidade Federal de Lavras
		</p>
	</div>
</div>
*/