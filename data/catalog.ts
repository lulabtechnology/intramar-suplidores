export type CatalogCategory = {
  slug: string;
  name: string;
  items: string[];
};

export const catalog: CatalogCategory[] = [
  {
    slug: "textiles",
    name: "TEXTILES",
    items: [
      "Camisetas",
      "Jackets",
      "Sudaderas",
      "Overoles",
      "Chalecos en General",
      "Uniformes",
      "Sabanas",
      "Toallas",
      "Mantas",
      "Mantas Termicas"
    ]
  },
  {
    slug: "insumos-marinos",
    name: "INSUMOS MARINOS",
    items: [
      "Chalecos Salvavidas",
      "Botes Salvavidas",
      "Motores",
      "Accesorios para Buceo",
      "Sogas",
      "Sogas Marinas",
      "Muelles Flotantes"
    ]
  },
  {
    slug: "insumos-vectores",
    name: "INSUMOS VECTORES",
    items: [
      "Repelentes Adultos y Niños",
      "Toallitas Anti Mosquitos",
      "Inciensos Anti Mosquitos",
      "Diferentes Accesorios/Pulseras Anti Mosquitos",
      "Mosquiteros",
      "Mochilas de Fumigacion (Carga Solar)"
    ]
  },
  {
    slug: "kits",
    name: "KITS",
    items: [
      "Shelter Kits",
      "Water Kits",
      "Cleanning Kits",
      "Vector kit",
      "Higiene kits",
      "Food kits",
      "Baby kits",
      "Third Age Kits",
      "Home kits",
      "Dream Kits"
    ]
  },
  {
    slug: "agua",
    name: "AGUA",
    items: [
      "Pastillas Purificadoras",
      "Aqua gard",
      "Pastillas de Cloro",
      "Filtros",
      "Filtros Solares de Purificacion de Agua de Rios y de mar",
      "Tanques",
      "Bidones de 5 litros"
    ]
  },
  {
    slug: "plasticos",
    name: "PLÁSTICOS",
    items: [
      "Juguetes",
      "Cubos de 5 litros",
      "Packs para Comida",
      "Parques para Niños",
      "Insumos Escolares",
      "Mochilas"
    ]
  },
  {
    slug: "seguridad-y-proteccion",
    name: "SEGURIDAD Y PROTECCIÓN",
    items: [
      "Guantes",
      "Guantes de Seguridad",
      "Mascarillas",
      "Geles para manos",
      "Batas desechables",
      "Ropa desechable"
    ]
  },
  {
    slug: "energia",
    name: "ENERGÍA",
    items: [
      "Paneles solares",
      "Estaciones de Energia",
      "Lamparas solares",
      "Abanicos",
      "Neveras",
      "Radios Solares",
      "Biodigestores",
      "Carpas",
      "Lonas"
    ]
  },
  {
    slug: "agricolas",
    name: "AGRÍCOLAS",
    items: [
      "Motosierras",
      "Mochilas de Fumigacion",
      "Herramientas Agricolas en General",
      "Casas de Cultivo",
      "Bevederos de Animales",
      "Arados",
      "Sembradoras",
      "Fertilizantes",
      "Herbicidas",
      "Granos",
      "Semillas"
    ]
  }
];
