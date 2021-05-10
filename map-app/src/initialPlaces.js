/* eslint-disable max-len */

//
// Info about the initialPlaces in the app.
//

export const initialPlaces = [
  {
    name: 'Oulun Yliopisto',
    images: [
      './yliopisto1.png',
      './yliopisto2.jpg',
    ],
    text: 'Oulun yliopisto, tämä pohjoinen alma mater, on aivan loistava valinta opiskelupaikaksi. Etenki se takia, että se on Oulusa.\n\nOulun yliopistossa on kaheksan tiedekuntaa ja valtavasti eri oppiaineita, mikä tietenki tarkottaa että kavereita riittää. Yliopistolta löytyyki esimerkiksi harrasteporukoita vähän joka lajiin. Oulun yliopiston toiminnot on melko pitkälti yhen kampuksen alla Linnanmaalla, mutta täällä on niin hyvät pyöräbaanat, että kannattee ehottomasti tutkia elämää myös kampuksen ulukopuolella. ',
    coordinates: {
      lat: 65.05977235548156,
      lng: 25.466293498197658,
    },
    // TODO make all the challenges objects like the first one.
    challenges: [
      {text: 'Kävele lenkki koko kampuksen ympäri', isDone: false},
      {text: 'Montako ruokapaikkaa kampukselta löytyy? Älä jämähä yhteen, vaan testaa ne kaikki ja eti oma suosikki (vinkki: myös keskustasta löytyy hyviä!)', isDone: false},
      {text: 'Eti lempireitti kotoa yliopistolle (ei tartte olla suorin!)', isDone: false},
    ],
  },
  {
    name: 'Kasvitieteellinen Puutarha',
    images: [
      './puutarha_1.jpeg',
      './puutarha_2.jpg',
    ],
    text: 'Puskeeko stressi pintaan? Deadlinet paukkuu eikä pysty enää keskittymään mihinkään? Läheppä luontoon!\n\nJos ei männikkö innosta, niin onpa onni että Oulun yliopiston välittömässä läheisyydessä on yksi maailman pohjoisimpia tieteellisiä puutarhoja, josta löytyy yli 4000 mitä mielenkiintosempaa lajia. Syksyllä on hyvä kerätä porukka koolle ja lähteä puutarhaan vaikka piknikille!',
    coordinates: {
      lat: 65.06298322512127,
      lng: 25.465259642922696,
    },
    challenges: [
      {text: 'Haaste 1: Etsi puutarhasta uuvana', isDone: false},
      {text: 'Haaste 2: Tutustu Romeoon ja Juliaan', isDone: false},
      {text: 'Haaste 3: Hallaa puuta', isDone: false},
    ],
  },
  {
    name: 'Kyykkästadion',
    images: [
      './kyykka_1.jpg',
      './kyykka_2.png',
    ],
    text: 'Tiiäkkö nää mitä on kyykkä?\n\nTästä ihan läheltä löytyy Kyykkästadion, jossa voi seurata tai kisailla kyykän ja Oulun kansallispelin Mölökyn parissa. Lähteekö Akka, Pappi, Hauki vai Karttu? ',
    coordinates: {
      lat: 65.06216898080989,
      lng: 25.465774627033518,
    },
    challenges: [
      {text: 'Haaste 1: Käy katsomassa peli (mölökky tai kyykkä)', isDone: false},
      {text: 'Haaste 2: Haasta kaverit mölökkyyn', isDone: false},
      {text: 'Haaste 3: Kyykkää 15 kertaa elopainolla', isDone: false},
    ],
  },
  {
    name: 'Ainolan puisto',
    images: [
      './ainola_1.jpg',
      './ainola_2.jpg',
    ],
    text: 'Ainolan puistoon (eli Hupisaariin) kannattee tutustua jo syksyllä, jos on vielä hyviä kelejä. Se on esimerkiksi opiskelijavapun kannalta keskeinen paikka.\n\nSieltä löytyy ihania hengailupaikkoja, joissa voi opiskella rauhassa tai viettää aikaa tutustumalla opiskelukavereihin ja kaupunkiin. Kampukselta on matkaa puistoon joku 6km, mutta pyörällä pääsee tosi hyvin, ja bussilla myös.',
    coordinates: {
      lat: 65.01895662086322,
      lng: 25.47805229819547,
    },
    challenges: [
      {text: 'Haaste 1: Käy jätskillä enneku ilimat kylymenee', isDone: false},
      {text: 'Haaste 2: Eti kesäteatteri', isDone: false},
      {text: 'Haaste 3: Syötä sorsia (hanhi, ankka tai joutsenki käy)', isDone: false},
    ],
  },
  {
    name: 'Tori',
    images: [
      './torinranta_1.jpg',
      './torinranta_2.jpg',
    ],
    text: 'Torinranta on vanahaa Oulun parraimmillaan, ja se on myös monien menojen keskittymä.\n\nKesäiltasin Torinrannan laitureilla hengaillee porukkaa ku pipua, ja voi kait siellä talavellaki käyä vaikka kahavilla. Torinranta on ihan keskustan tuntumassa, ja sieltä pääsee mukavasti jatkamaan matkaa vaikka Pikisaareen tai Kuusisaareen. Myös pääkirjasto ja teatteri on Torinrannassa.',
    coordinates: {
      lat: 65.01338475886655,
      lng: 25.46458589634565,
    },
    challenges: [
      {text: 'Haaste 1: Käy haistelemassa tunnelmaa Kauppahallissa', isDone: false},
      {text: 'Haaste 2: Käväse heittämässä kolikko kirjaston vesilähteeseen. Muista toivoa!', isDone: false},
      {text: 'Haaste 3: Tätä ei voi missata: Käy moikkaamassa Toripolliisia!', isDone: false},
    ],
  },
];
