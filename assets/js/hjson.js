let city = [
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

let type = [
    {
        value:"apartamento",
        type:"Apartamento"
    },
    {
        value: "box",
        type: "Box"
    },
    {
        value: "casa",
        type: "Casa",
    },
    {
        value:"casa-comercial",
        type:"Casa de Condominio"
    },
    {
        value:"chacara",
        type:"Chacara"
    },
    {
        value:"cobertura",
        type:"Cobertura"
    },
    {
        value:"duplex",
        type:"Duplex"
    },
    {
        value:"Geminado",
        type:"geminado"
    },
    {
        value:"kitnet",
        type:"Kitnet"
    },
    {
        value:"loft",
        type:"Loft"
    },
    {
        value:"loja",
        type: "Loja"
    },
    {
        value:"pavilhao",
        type:"Pavilhao"
    }

]



let imoveis = [
    {
        ref: 988979,
        img: "assets/img/imovel1.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Lajeado",
        state: "RS",
        location: "Centro",
        description: "Lindo apartamento de 3 dormitórios, localizado no bairro Centro! - Cozinha separada; - Móveis proje..",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value: 334.155
    },
    {
        ref: 60355,
        img: "assets/img/imovel2.jpg",
        type: "Apartamento",
        furnished: false,
        city: "Arroio do Meio",
        state: "RS",
        location: "São Cristóvão",
        description: "Ótima localização, próximo a UNIVATES Excelente para investimento Sacada com churrasqueira Possib...",
        bedrooms: 1,
        bathrooms: 1,
        parking: 1,
        value: 186.359
    },
    {
        ref: 3109,
        img: "assets/img/imovel3.jpg",
        type: "Apartamento",
        furnished: false,
        city: "Capão de Canoa",
        state: "RS",
        location: "Americano",
        description: "Venha conhecer este belíssimo empreendimento e apaixone-se!.",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value: 949.559
    },
    {
        ref: 42088,
        img: "assets/img/imovel4.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Estrela",
        state: "RS",
        location: "Americano",
        description: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da city,...",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value: 550.359
    },
    {
        ref: 78370,
        img: "assets/img/imovel5.jpg",
        type: "Terreno",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Conventos",
        description: "- Terrenos de 300m² até 450m²; - Aproximadamente 800m da BR 386;",
        bedrooms: 0,
        bathrooms: 0,
        parking: 0,
        value: 160.555
    },
    {
        ref: 13041,
        img: "assets/img/imovel6.jpg",
        type: "Casa",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Conventos",
        description: "Casa com dois dormitórios e amplo pátio localizada a 600 metros da Av. Benjamin Constant em Convento...",
        bedrooms: 2,
        bathrooms: 1,
        parking: 1,
        value: 190.435
    },
    {
        ref: 6719,
        img: "assets/img/imovel7.jpg",
        type: "Sobrado",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Moinhos",
        description: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        value: 773.888
    },
    {
        ref: 4561,
        img: "assets/img/imovel8.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Lajeado",
        state: "RS",
        location: "Moinhos",
        description: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        value: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel9.jpg",
        type: "Sobrado",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Moinhos",
        description: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        value: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel10.jpg",
        type: "Sobrado",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Moinhos",
        description: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        value: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel10.jpg",
        type: "Sobrado",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Moinhos",
        description: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        value: 773.888
    },
    {
        ref: 6719,
        img: "assets/img/imovel10.jpg",
        type: "Sobrado",
        furnished: false,
        city: "Lajeado",
        state: "RS",
        location: "Moinhos",
        description: "Sobrado de 3 dormitórios localizado no bairro Moinhos! - Uma suíte com hidro; - quiosque e piscina...",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        value: 773.888
    },

    

]


let aluguel = [
    {
        ref: 42088,
        img: "assets/img/aluguel1.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Estrela",
        state: "RS",
        location: "Americano",
        description: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da city,...",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value: 550.359
    },
    {
        ref: 42088,
        img: "assets/img/aluguel2.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Estrela",
        state: "RS",
        location: "Americano",
        description: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da city,...",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value:890.359
    },
    {
        ref: 42088,
        img: "assets/img/aluguel3.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Estrela",
        state: "RS",
        location: "Americano",
        description: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da city,...",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value: 310.359
    },
    {
        ref: 42088,
        img: "assets/img/aluguel4.jpg",
        type: "Apartamento",
        furnished: true,
        city: "Estrela",
        state: "RS",
        location: "Americano",
        description: "Lindo apartamento localizado em excelente bairro, próximo a todos os confortos e acessos da city,...",
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        value: 420.359
    },


]