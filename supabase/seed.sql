-- ============================================================
-- INTEGRANTES
-- ============================================================
INSERT INTO public.integrantes (nome, instrumento, bio, foto_url, ativo, ordem) VALUES
(
  'Érica Marques',
  'Pandeirista',
  'Percussionista ágil e vibrante, já passou por diversos grupos como Margaridas Peludas e Batuque na Roda. Integra os arranjos e a construção rítmica do Flor de Samambaia com autenticidade e criatividade.',
  'img/erica.jpg',
  true,
  1
),
(
  'Jéssica Braz',
  'Percussionista',
  'Natural da Zona Leste de Juiz de Fora, começou sua jornada na música ainda na escola. Percussionista e psicóloga, acredita na música como ferramenta terapêutica e de transformação social. Atua fortemente nos arranjos e repertórios do grupo.',
  'img/jessica.jpg',
  true,
  2
),
(
  'Josi Silva',
  'Cavaquinista',
  'Cavaquinista carismática e com vivência no samba carioca, Josi é a alma harmônica do grupo. Sua trajetória passa por coletivos como Guerreiras de Clara, trazendo força e brasilidade para cada acorde.',
  'img/josi.jpg',
  true,
  3
),
(
  'Priscila Pinheiro',
  'Vocalista',
  'Formada em Comunicação e com mais de 20 anos de experiência em marketing, encontrou na música um refúgio e uma missão. Atua na organização do grupo, na identidade visual e na articulação profissional do projeto.',
  'img/priscila.jpg',
  true,
  4
),
(
  'Raquel Souza',
  'Violonista',
  'Multi-instrumentista com formação erudita, Raquel transita com maestria entre o violão, o canto e a direção musical. Já passou por orquestras e grupos de samba, unindo técnica e sensibilidade em cada acorde. Traz seu conhecimento técnico e seu violão firme para as construções harmônicas do grupo.',
  'img/raquel.jpg',
  true,
  5
);


-- ============================================================
-- EVENTOS (Trajetória)
-- As datas sem dia exato estão definidas como 1º do ano.
-- ============================================================
INSERT INTO public.eventos (titulo, data) VALUES
('Evento solidário no projeto Mesa Brasil, no Moinho Zona Norte com o Pagodão Só Love', '2024-01-01'),
('Autoria Casa de Cultura', '2024-01-01'),
('Espeto Du Cheff', '2024-01-01'),
('Colegial Sucos e Lanches', '2024-01-01'),
('5ª edição da Feira Desapego', '2024-01-01'),
('Julho das Pretas, na Festa Soul Charme', '2024-07-01'),
('Julho das Pretas, no movimento cultural O Cometa', '2024-07-01'),
('Arraiá do Brejô JF, coletivo lésbico de Juiz de Fora', '2024-01-01'),
('Evento Churrasquinho do Bob, no Tenetehara Instituto Cultural', '2024-01-01'),
('Aniversário do Aero Beach JF', '2024-01-01'),
('Samba da Laje', '2024-01-01'),
('Evento JF Brasil no espaço Ziriguidum e Beberico', '2024-01-01'),
('Beco da Cultura', '2024-12-06'),
('Uai Feira', '2024-01-01'),
('Bar Pão Moiado', '2024-01-01'),
('Abertura do pré-carnaval de Juiz de Fora 2025', '2025-01-01'),
('Carnaval do Parrilla Bela Vista', '2025-03-01'),
('Carnaval do Autoria Casa de Cultura', '2025-03-01'),
('Bloco do Santo', '2025-03-01'),
('Samba do Muzik', '2025-01-01');


-- ============================================================
-- CLIPPING / IMPRENSA
-- ============================================================
INSERT INTO public.clipping (titulo, veiculo, url, imagem_url, tipo, data_publicacao, ativo) VALUES
(
  'MGTV 1ª Edição – Zona da Mata',
  'MGTV',
  'https://globoplay.globo.com/v/13286127/?s=58m45s',
  'img/clipping/mgtv.jpg',
  'video',
  '2025-01-24',
  true
),
(
  'Rádio Transamérica',
  'Rádio Transamérica',
  'https://www.youtube.com/live/LDS4V_hOZBQ',
  'img/clipping/radio.jpg',
  'video',
  '2025-01-17',
  true
),
(
  'Entrevista Papo de Urutu',
  'Papo de Urutu',
  'https://www.youtube.com/watch?v=jRQJGyQ0lXg',
  'img/clipping/urutu.jpg',
  'entrevista',
  '2024-12-18',
  true
),
(
  'Reportagem PJF – Beco da Cultura',
  'PJF',
  'https://www.pjf.mg.gov.br/noticias/view.php?modo=link2&idnoticia2=85137',
  'img/clipping/pjf.jpg',
  'artigo',
  '2024-12-06',
  true
),
(
  'Reportagem Tribuna de Minas',
  'Tribuna de Minas',
  'https://tribunademinas.com.br/noticias/cultura/17-05-2024/flor-de-samambaia-apresenta-se-nesta-sexta-na-autoria.html',
  'img/clipping/tribuna.jpg',
  'artigo',
  '2024-05-17',
  true
);


-- ============================================================
-- FAQ / ENTREVISTA
-- ============================================================
INSERT INTO public.faq (pergunta, resposta, ordem, ativo) VALUES
(
  '1. Como surgiu o grupo Flor de Samambaia?',
  'O grupo surgiu da conexão entre mulheres que já participavam de coletivos femininos e musicais em Juiz de Fora, como Guerreiras de Clara, Samba das Mulheres na Praça e a Caminhada Lésbica. Todas já tocavam em outros projetos, mas sentiram a necessidade de criar um grupo com identidade própria, onde pudessem tocar as músicas que amam e expressar sua arte de forma autêntica.',
  1,
  true
),
(
  '2. Qual é a principal proposta do grupo?',
  'Nossa proposta é valorizar e difundir o samba e outros ritmos brasileiros, trazendo uma sonoridade que represente a força e a essência feminina na música. Queremos proporcionar ao público uma experiência acolhedora, cheia de energia e identidade, celebrando a cultura popular e a ancestralidade do nosso som.',
  2,
  true
),
(
  '3. Quem são as principais inspirações do Flor de Samambaia?',
  'Nossas referências vão desde grandes mulheres da música brasileira, como Elis Regina, Beth Carvalho, Clara Nunes, Dona Ivone Lara e Alcione, até artistas contemporâneas como Maria Rita, Mart''nália, Marisa Monte, Liniker e Preta Gil. São mulheres que abriram caminho e nos inspiram com sua trajetória, talento e força.',
  3,
  true
),
(
  '4. Como o grupo define o seu estilo musical?',
  'Nosso coração bate forte pelo samba, mas transitamos também por outros ritmos brasileiros, como choro, ijexá e MPB. Gostamos de misturar influências e trazer releituras com a nossa identidade, sempre respeitando a raiz da música e trazendo um toque contemporâneo.',
  4,
  true
),
(
  '5. O que o público pode esperar de um show do Flor de Samambaia?',
  'Muita energia, emoção e conexão! Nossos shows são momentos de celebração, com um repertório que passeia por clássicos do samba e músicas que marcaram a história da MPB. Além disso, trazemos arranjos que refletem a força do nosso grupo e a paixão que temos pela música.',
  5,
  true
),
(
  '6. Como vocês enxergam a importância do samba no cenário feminino e contemporâneo?',
  'O samba sempre foi um espaço de resistência e, historicamente, as mulheres precisaram lutar para ocupar esse lugar. Hoje, vemos cada vez mais mulheres protagonizando a cena do samba e trazendo novas narrativas. O Flor de Samambaia faz parte desse movimento, reafirmando o poder feminino na música e valorizando as raízes culturais brasileiras.',
  6,
  true
),
(
  '7. Quais são os próximos planos do grupo?',
  'Estamos trabalhando para expandir nossos shows para outras cidades, produzir material autoral e gravar nosso primeiro EP. Queremos fortalecer nossa presença na cena musical e levar nossa música para mais pessoas, sempre com muito amor e dedicação ao que fazemos.',
  7,
  true
);


-- ============================================================
-- SEÇÕES (Sobre)
-- ============================================================
INSERT INTO public.secoes (slug, titulo, conteudo, ativo, ordem) VALUES
(
  'sobre',
  'Sobre o grupo',
  'Flor de Samambaia nasceu do encontro de cinco mulheres apaixonadas pela música brasileira, que se conectaram por meio de coletivos femininos e movimentos culturais em Juiz de Fora.

Unidas pelo desejo de criar um trabalho autoral e autêntico, elas transformaram seu amor pelo samba e pelos ritmos brasileiros em um espaço de acolhimento, diversão e cultura.

Inspiradas por grandes nomes da música, como Clara Nunes, Dona Ivone Lara e Alcione, o grupo resgata e celebra a força feminina no cenário musical, trazendo uma sonoridade envolvente e repleta de identidade. Com raízes no samba, o grupo também explora forró, MPB e outros ritmos que expressam a diversidade e a riqueza da cultura popular.

No palco, o Flor de Samambaia não é apenas um show, mas uma experiência vibrante de conexão, ancestralidade e resistência. Cada apresentação é construída com cuidado, afeto e um olhar político sobre o papel das mulheres na música.',
  true,
  1
);
