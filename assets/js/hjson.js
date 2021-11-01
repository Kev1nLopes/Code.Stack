let cidade = [
    {
        value: "arroio-do-meio,rs",
        name: "Arroio do Meio",
        state: "RS"
    },
    {
        value: "capao-de-canoa,rs",
        name: "Capao de Canoa",
        state: "RS"
    },
    {
        value: "cruzeiro-do-sul,rs",
        name: "Cruzeiro do Sul",
        state: "RS"
    },
    {
        value: "estrela,rs",
        name: "Estrela",
        state: "RS"
    },
    {
        value: "fazenda-vilanova,rs",
        name: "Fazenda Vilanova",
        state: "RS"
    },
    {
        value: "lajeado,rs",
        name: "Lajeado",
        state: "RS"
    },
    {
        value: "marques-de-souza,rs",
        name: "Marques de Souza",
        state: "RS"
    },
    {
        value: "santa-clara-do-sul,rs",
        name: "Santa Clara do Sul",
        state: "RS"
    }
]

let tipo = [
    {
        value:"apartamento",
        tipo:"Apartamento"
    },
    {
        value: "box",
        tipo: "Box"
    },
    {
        value: "casa",
        tipo: "Casa",
    },
    {
        value:"casa-comercial",
        tipo:"Casa de Condominio"
    },
    {
        value:"chacara",
        tipo:"Chacara"
    },
    {
        value:"cobertura",
        tipo:"Cobertura"
    },
    {
        value:"duplex",
        tipo:"Duplex"
    },
    {
        value:"Geminado",
        tipo:"geminado"
    },
    {
        value:"kitnet",
        tipo:"Kitnet"
    },
    {
        value:"loft",
        tipo:"Loft"
    },
    {
        value:"loja",
        tipo: "Loja"
    },
    {
        value:"pavilhao",
        tipo:"Pavilhao"
    }

]



let imoveis = [
    {
        ref: 988979,
        img: "assets/img/imovel1.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Centro",
        descricao: "Lindo apartamento de 3 dormitórios, localizado no bairro Centro! - Cozinha separada; - Móveis proje..",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor: 334.155
    },
    {
        ref: 60355,
        img: "assets/img/imovel2.jpg",
        tipo: "Apartamento",
        mobiliado: false,
        cidade: "Arroio do Meio",
        estado: "RS",
        localidade: "São Cristóvão",
        descricao: "Ótima localização, próximo a UNIVATES Excelente para investimento Sacada com churrasqueira Possib...",
        quartos: 1,
        banheiros: 1,
        vagasGaragem: 1,
        valor: 186.359
    },
    {
        ref: 3109,
        img: "assets/img/imovel3.jpg",
        tipo: "Apartamento",
        mobiliado: false,
        cidade: "Capão de Canoa",
        estado: "RS",
        localidade: "Americano",
        descricao: "Venha conhecer este belíssimo empreendimento e apaixone-se!.",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor: 949.559
    },
    {
        ref: 42088,
        img: "assets/img/imovel4.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Estrela",
        estado: "RS",
        localidade: "Americano",
        descricao: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da cidade,...",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor: 550.359
    },
    {
        ref: 78370,
        img: "assets/img/imovel5.jpg",
        tipo: "Terreno",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Conventos",
        descricao: "- Terrenos de 300m² até 450m²; - Aproximadamente 800m da BR 386;",
        quartos: 0,
        banheiros: 0,
        vagasGaragem: 0,
        valor: 160.555
    },
    {
        ref: 13041,
        img: "assets/img/imovel6.jpg",
        tipo: "Casa",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Conventos",
        descricao: "Casa com dois dormitórios e amplo pátio localizada a 600 metros da Av. Benjamin Constant em Convento...",
        quartos: 2,
        banheiros: 1,
        vagasGaragem: 1,
        valor: 190.435
    },
    {
        ref: 6719,
        img: "assets/img/imovel7.jpg",
        tipo: "Sobrado",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Moinhos",
        descricao: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        quartos: 3,
        banheiros: 3,
        vagasGaragem: 2,
        valor: 773.888
    },
    {
        ref: 4561,
        img: "assets/img/imovel8.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Moinhos",
        descricao: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        quartos: 3,
        banheiros: 3,
        vagasGaragem: 2,
        valor: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel9.jpg",
        tipo: "Sobrado",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Moinhos",
        descricao: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        quartos: 3,
        banheiros: 3,
        vagasGaragem: 2,
        valor: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel10.jpg",
        tipo: "Sobrado",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Moinhos",
        descricao: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        quartos: 3,
        banheiros: 3,
        vagasGaragem: 2,
        valor: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel10.jpg",
        tipo: "Sobrado",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Moinhos",
        descricao: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        quartos: 3,
        banheiros: 3,
        vagasGaragem: 2,
        valor: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel10.jpg",
        tipo: "Sobrado",
        mobiliado: false,
        cidade: "Lajeado",
        estado: "RS",
        localidade: "Moinhos",
        descricao: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        quartos: 3,
        banheiros: 3,
        vagasGaragem: 2,
        valor: 773.888
    },

    

]


let aluguel = [
    {
        ref: 42088,
        img: "assets/img/aluguel1.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Estrela",
        estado: "RS",
        localidade: "Americano",
        descricao: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da cidade,...",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor: 550.359
    },
    {
        ref: 42088,
        img: "assets/img/aluguel2.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Estrela",
        estado: "RS",
        localidade: "Americano",
        descricao: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da cidade,...",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor:890.359
    },
    {
        ref: 42088,
        img: "assets/img/aluguel3.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Estrela",
        estado: "RS",
        localidade: "Americano",
        descricao: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da cidade,...",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor: 310.359
    },
    {
        ref: 42088,
        img: "assets/img/aluguel4.jpg",
        tipo: "Apartamento",
        mobiliado: true,
        cidade: "Estrela",
        estado: "RS",
        localidade: "Americano",
        descricao: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da cidade,...",
        quartos: 3,
        banheiros: 2,
        vagasGaragem: 1,
        valor: 420.359
    },


]