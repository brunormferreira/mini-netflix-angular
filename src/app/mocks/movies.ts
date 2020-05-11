import { MoviesInterface } from '../models/movies.model';

const actionMovies: MoviesInterface[] = [
  {
    id: 1,
    categoryId: 1,
    title: 'Carga Bruta',
    poster: 'assets/movies/action/cargabruta.jpg',
    synopsys: `Carga Bruta é um filme francês de ação que trata sobre roubos.
    Sua sinopse apresenta a história de um grupo que assalta carros fortes,
    mas se vê em outro tipo de trabalho para saldar uma dívida devido ao erro
    de um dos integrantes.`,
    views: 5,
  },
  {
    id: 2,
    categoryId: 1,
    title: 'Esquadrão 6',
    poster: 'assets/movies/action/esquadrao6.jpg',
    synopsys: `Esquadrão 6 concentra-se principalmente na segunda missão da
    equipe de derrubar um ditador no país fictício chamado Turgistão (na vida real,
    o Turgistão era uma província no Afeganistão há mais de 1000 anos).`,
    views: 4,
  },
  {
    id: 3,
    categoryId: 1,
    title: 'Fim do Mundo',
    poster: 'assets/movies/action/fimdomundo.jpg',
    synopsys: `A proposta é simples: quatro adolescentes se conhecem num acampamento
    de verão, e é lá que começam a ver coisas de outro mundo – literalmente. Pouco
    depois, tudo o que eles conhecem começa a ser atacado, e o cenário que se forma
    é o pós-apocalíptico, com cidades destruídas e cenas de tirar o fôlego. Caberá
    aos quatro adolescentes salvar o mundo das criaturas`,
    views: 2,
  },
  {
    id: 4,
    categoryId: 1,
    title: 'Grande Luta',
    poster: 'assets/movies/action/grandeluta.jpg',
    synopsys: `Em A Grande Luta, quando Leo Thompson (Seth Carr), de 11 anos, descobre
    uma máscara mágica de luta livre que lhe confere super força, ele a usa para entrar
    em uma competição da WWE. Com o apoio de sua avó, Leo fará o que for preciso para
    alcançar seu sonho de se tornar um Superstar da WWE.`,
    views: 8,
  },
  {
    id: 5,
    categoryId: 1,
    title: 'Minha Primeira Caçada',
    poster: 'assets/movies/action/minhaprimeiracacada.jpg',
    synopsys: `O grande caçador Buck Ferguson e seu cinegrafista Don partem em busca
    de uma aventura épica durante o fim de semana para se reconectar com o filho de Buck,
    mas a reconciliação é mais difícil do que ele imaginava.`,
    views: 6,
  },
  {
    id: 6,
    categoryId: 1,
    title: 'Operação Fronteira',
    poster: 'assets/movies/action/operacaofronteira.jpg',
    synopsys: `Um agente americano da patrulha da fronteira entre o México e os Estados
    Unidos tenta evitar que soldados renegados das Forças Especiais façam o contrabando
    de um carregamento de heroína.`,
    views: 3,
  },
  {
    id: 7,
    categoryId: 1,
    title: 'Shaft',
    poster: 'assets/movies/action/shaft.jpg',
    synopsys: `Policiais corruptos, pequenos traficantes de drogas, informantes vulgares
    e sádicos jovens ricos estão prontos para matar. Para o detetive e policial John Shaft,
    é apenas mais uma noite no submundo de Nova York, outro turno encarando os policiais e
    criminosos que querem vê-lo morto e um sistema judicial que prospera com dinheiro, não
    com a justiça.`,
    views: 5,
  },
  {
    id: 8,
    categoryId: 1,
    title: 'Troco em Dobro',
    poster: 'assets/movies/action/trocoemdobro.jpg',
    synopsys: `Na trama de Troco em Dobro, Spenser (Mark Wahlberg), um ex-policial mais
    conhecido por causar problemas do que resolvê-los, acabou de sair da prisão. Mas
    ele se vê obrigado a ajudar seu antigo treinador de boxe Henry (Alan Arkin) e permanece
    na cidade de Boston mesmo com a intenção de ir embora. Quando dois ex-colegas de Spenser
    são assassinados, ele recruta Hawk (Winston Duke), um lutador de MMA, para ajudá-lo a
    investigar e levar os culpados à justiça.`,
    views: 3,
  },
]

const comedyMovies: MoviesInterface[] = [
  {
    id: 9,
    categoryId: 2,
    title: 'Seis Vezes Confusão',
    poster: 'assets/movies/comedy/6vezesconfusao.jpg',
    synopsys: `Seis Vezes Confusão. Prestes a se tornar pai, ele descobre que tem
    cinco irmãos gêmeos e decide conhecer toda a turma que estava na barriga com ele.
    Marlon Wayans interpreta os seis gêmeos.`,
    views: 6,
  },
  {
    id: 10,
    categoryId: 2,
    title: 'A Escalada',
    poster: 'assets/movies/comedy/aescalada.jpg',
    synopsys: `A Escalada – A Verdadeira História da Tragédia no Everest é um livro que descreve
    a versão contada pelo alpinista russo Anatoli Boukreev sobre o desastre no Monte
    Everest em 1996, durante o qual 12 alpinistas perderam a vida.`,
    views: 4,
  },
  {
    id: 11,
    categoryId: 2,
    title: 'Coffee e Kareem',
    poster: 'assets/movies/comedy/coffeekarem.jpg',
    synopsys: `Em clara homenagem a filmes como Máquina Mortífera e Duro de Matar 3,
    clássicos do gênero, Coffee & Kareem traz explosões, perseguições em alta
    velocidade, carros atravessando lanchas e troca de socos e tiros em meio a uma
    chuva de cocaína.`,
    views: 2,
  },
  {
    id: 12,
    categoryId: 2,
    title: 'O Pacote',
    poster: 'assets/movies/comedy/pacote.jpg',
    synopsys: `Um grupo de adolescentes vai acampar no meio da floresta, mas
    um acidente bizarro começa uma corrida para que os amigos consigam retornar
    à civilização a tempo e permitir que um deles fique “inteiro”.`,
    views: 4,
  },
  {
    id: 13,
    categoryId: 2,
    title: 'Pai do Ano',
    poster: 'assets/movies/comedy/paidoano.jpg',
    synopsys: `Ben (Joey Bragg) é um recém formado da faculdade, e antes de ir para
    Nova York começar em seu novo emprego, decide visitar seu pai com seu amigo
    Larry (Matt Shively). Durante a visita os dois têm uma discussão sobre qual pai
    ganahria do outro em uma briga, que eventualmente acaba com Wayne (David Spade),
    pai de Ben, enfrentado Mardy (Nat Faxon). A Partir daí, a vida deles começa a
    desmoronar.`,
    views: 7,
  },
  {
    id: 14,
    categoryId: 2,
    title: 'Sandy Wexler',
    poster: 'assets/movies/comedy/sandywexler.jpg',
    synopsys: `Sandy Wexler (Adam Sandler) é um agente determinado, empenhado e
    focado na evolução da carreira de seus excêntricos clientes. Sua rotina, no
    entanto, é abalada quando ele descobre em um parque de diversões a talentosa
    cantora Courtney Clarke (Jennifer Hudson), por quem acaba se apaixonando.`,
    views: 9,
  },
  {
    id: 15,
    categoryId: 2,
    title: 'The Ridiculous 6',
    poster: 'assets/movies/comedy/theridiculous6.jpg',
    synopsys: `Para resgatar seu pai fora da lei, Tommy "Faca Branca" Stockburn
    parte em uma jornada através do velho oeste com cinco irmãos que ele nem sabia
    que existiam.`,
    views: 7,
  },
  {
    id: 16,
    categoryId: 2,
    title: 'Zerando a Vida',
    poster: 'assets/movies/comedy/zerandoavida.jpg',
    synopsys: `Dois caras perdem todo o dinheiro e decidem fingir a própria morte,
    assumindo outras identidades. Entretanto, os novos nomes os colocam em apuros
    ainda maiores do que enfrentavam antes.`,
    views: 3,
  },

]

const horrorMovies: MoviesInterface[] = [
  {
    id: 17,
    categoryId: 3,
    title: 'A Marca do Demônio',
    poster: 'assets/movies/horror/amarcadodemo.jpg',
    synopsys: `Duas jovens irmãs abrem um livro antigo que traz ao mundo uma
    criatura diabólica. Sua única salvação é um padre possuído que luta contra
    seus próprios demônios`,
    views: 3,
  },
  {
    id: 18,
    categoryId: 3,
    title: 'Campo do Medo',
    poster: 'assets/movies/horror/campodomedo.jpg',
    synopsys: `Campo do Medo nos coloca diante de um grupo de pessoas que estão
    perdidas em um loop espaço-temporal aparentemente sem lógica dentro de um campo
    alto o suficiente para que seja impossível visualizar a saída`,
    views: 5,
  },
  {
    id: 19,
    categoryId: 3,
    title: 'Contato Visceral',
    poster: 'assets/movies/horror/contatovisceral.jpg',
    synopsys: `Depois de encontrar um celular perdido em uma briga, um barman de
    New Orleans começa a receber mensagens sinistras e a perder a sanidade
    pouco a pouco`,
    views: 2,
  },
  {
    id: 20,
    categoryId: 3,
    title: 'Eli',
    poster: 'assets/movies/horror/eli.jpg',
    synopsys: `Eli (Charlie Shotwell) está sendo submetido a um tratamento para
    sua doença que é rara e auto-imune e acaba descobrindo que a clínica em que
    está internado não é tão segura como pensava.`,
    views: 1,
  },
  {
    id: 21,
    categoryId: 3,
    title: 'Influência',
    poster: 'assets/movies/horror/influencia.jpg',
    synopsys: `Com bruxaria e satanismo, Influência (Lá Influência) chega a Netflix,
    bem silenciosa. Mas é um filme divertido pra assistir no final de semana. Depois
    de voltar para a casa da família para cuidar da mãe moribunda, uma enfermeira
    assombrada pelas lembranças da infância deve lutar contra uma força maligna na
    casa.`,
    views: 8,
  },
  {
    id: 22,
    categoryId: 3,
    title: 'O Terceiro Olho 2',
    poster: 'assets/movies/horror/oterceiroolho2.jpg',
    synopsys: `Alia procura um alento em sua vida depois da morte da irmãzinha.
    Por isso, começa a morar e fazer um trabalho social (de cozinheira e camareira)
    no orfanato de Laksmi (Sophia Latjuba) e do senhor Fadli (Jeremy Thomas).`,
    views: 5,
  },
  {
    id: 23,
    categoryId: 3,
    title: 'The Perfection',
    poster: 'assets/movies/horror/theperfection.jpg',
    synopsys: `Uma mulher que costumava ser considerada um prodígio do violoncelo
    passa a perseguir seu mentor e a nova pupila que é o centro de suas atenções,
    deixando sua busca por perfeição tomar um rumo sinistro.`,
    views: 9,
  },
  {
    id: 24,
    categoryId: 3,
    title: 'The Silence',
    poster: 'assets/movies/horror/thesilence.jpg',
    synopsys: `O mundo está sob ataque de criaturas mortais, que caçam guiadas pelo
    som. Para escapar, uma jovem e sua família deixam a cidade e acabam descobrindo
    um culto sinistro.`,
    views: 4,
  },
]

const romanceMovies: MoviesInterface[] = [
  {
    id: 25,
    categoryId: 4,
    title: 'A Barraca do Beijo',
    poster: 'assets/movies/romance/abarracadobeijo.jpg',
    synopsys: `Melhores amigos desde sempre, Elle (Joey King) e Lee (Joel Courtney)
    têm a inventiva ideia de gerenciar uma barraca do beijo durante um evento da
    escola. Para fazer da proposta um sucesso, a garota tenta convencer o galã Noah
    (Jacob Elordi), seu crush e irmão mais velho de Lee, a participar da brincadeira.
    Ele mostra-se irredutível, mas os dois acabam se aproximando como nunca, o que
    estremece a amizade de Elle e Lee.`,
    views: 2,
  },
  {
    id: 26,
    categoryId: 4,
    title: 'Amor em Obras',
    poster: 'assets/movies/romance/amoremobras.jpg',
    synopsys: `Uma executiva de San Francisco ganha uma pousada em Nova Zelândia e
    deixa a vida na cidade grande para reformar a propriedade com a ajuda de um empreiteiro
    bonitão.`,
    views: 4,
  },
  {
    id: 27,
    categoryId: 4,
    title: 'Caído do Céu',
    poster: 'assets/movies/romance/caidodoceu.jpg',
    synopsys: `Para conquistar um lugar no Céu, o lendário cantor e ator mexicano
    Pedro Infante é enviado de volta à Terra no corpo de um imitador para corrigir
    seu jeito mulherengo.`,
    views: 5,
  },
  {
    id: 28,
    categoryId: 4,
    title: 'Crush a Altura',
    poster: 'assets/movies/romance/crushaaltura.jpg',
    synopsys: `Jodi é uma menina adolescente cheia de inseguranças por ser a pessoa
    mais alta de sua escola. Porém, quando o aluno de intercâmbio sueco, Stig
    Luke Eisner), chega na sua classe, ela finalmente tem a chance de namorar um
    garoto mais alto que ela. Entre muitas confusões e com a ajuda de seus amigos
    e sua irmã mais velha, Jodi vai aprender que é muito mais do que sua aparência.`,
    views: 2,
  },
  {
    id: 29,
    categoryId: 4,
    title: 'O Date Perfeito',
    poster: 'assets/movies/romance/odateperfeito.jpg',
    synopsys: `Precisando de dinheiro para pagar pela faculdade, Brooks (Noah Centineo)
    decide criar um aplicativo que permite contratar um namorado para todo tipo de
    situação imaginável. Porém, adotar uma personalidade e um par romântico diferente
    para cada dia começa a se mostrar uma tarefa difícil e ele começa a se perguntar
    quem ele é de verdade e como pode encontrar o amor verdadeiro.`,
    views: 1,
  },
  {
    id: 30,
    categoryId: 4,
    title: 'Para Todos os Garotos que já Amei',
    poster: 'assets/movies/romance/paratodososg.jpg',
    synopsys: `Lara Jean Song Covey escreve cartas de amor secretas para todos os
    seus antigos paqueras. Um dia, as cartas são misteriosamente enviadas para os
    destinatários, virando sua vida de cabeça para baixo.`,
    views: 7,
  },
  {
    id: 31,
    categoryId: 4,
    title: 'Por Lugares Incríveis',
    poster: 'assets/movies/romance/porlugaresincriveis.jpg',
    synopsys: `O enredo de Por Lugares Incríveis acompanha Violet Markey
    (Elle Fanning) e Theodore Finch (Justice Smith), que têm suas vidas
    transformadas para sempre quando se conhecem. Juntos, eles se apoiam
    para curar os estigmas emocionais e físicos que adquiriram no passado.`,
    views: 4,
  },
  {
    id: 32,
    categoryId: 4,
    title: 'Quando nos Conhecemos',
    poster: 'assets/movies/romance/quandonosconhecemos.jpg',
    synopsys: `Noah (Adam Devine) teve um encontro perfeito com a garota dos
    seus sonhos (Alexandra Daddario), mas é visto apenas como um amigo por ela.
    Ele passa então os próximos três anos tentando entender o que aconteceu de
    errado, até que ele tem a inesperada chance de viajar no tempo e alterar a
    noite e seu destino, mais de uma vez.`,
    views: 9,
  },
]

const allMovies: MoviesInterface[] = [
  ...actionMovies,
  ...comedyMovies,
  ...horrorMovies,
  ...romanceMovies
];

const getMovies = (): MoviesInterface[] => [
  ...allMovies
];

export {
  getMovies,
}
