import { UserInterface } from '../models/user.model';

const users: UserInterface[] = [
  {
    id: 11,
    name: 'User one',
    email: 'dev@test.com',
    password: '123456',
    profileImg: 'assets/images/profile1.png',
    favMovies: [
      {
        id: 1,
        categoryId: 2,
        title: 'Seis Vezes Confusão',
        poster: 'assets/movies/comedy/6vezesconfusao.jpg',
        synopsys: `Seis Vezes Confusão. Prestes a se tornar pai, ele descobre que tem
        cinco irmãos gêmeos e decide conhecer toda a turma que estava na barriga com ele.
        Marlon Wayans interpreta os seis gêmeos.`,
        views: 6,
      },
      {
        id: 3,
        categoryId: 3,
        title: 'Contato Visceral',
        poster: 'assets/movies/horror/contatovisceral.jpg',
        synopsys: `Depois de encontrar um celular perdido em uma briga, um barman de
        New Orleans começa a receber mensagens sinistras e a perder a sanidade
        pouco a pouco`,
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
    ]
  },
  {
    id: 22,
    name: 'User two',
    email: 'sup@test.com',
    password: '123456',
    profileImg: 'assets/images/profile2.png',
    favMovies: [
      {
        id: 8,
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
      {
        id: 5,
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
        id: 7,
        categoryId: 2,
        title: 'The Ridiculous 6',
        poster: 'assets/movies/comedy/theridiculous6.jpg',
        synopsys: `Para resgatar seu pai fora da lei, Tommy "Faca Branca" Stockburn
        parte em uma jornada através do velho oeste com cinco irmãos que ele nem sabia
        que existiam.`,
        views: 7,
      },
    ]
  },
]

const getUsers = (): UserInterface[] => [...users];

export {
  getUsers
}
