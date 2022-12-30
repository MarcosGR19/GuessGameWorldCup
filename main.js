let players = [
    {
        id: 0,
        name: "Ronaldo",
        country: "https://i.pinimg.com/736x/dd/00/3f/dd003f1c3399ca88f366ca89695be171.jpg",
        player:"https://digitalhub.fifa.com/transform/9d9740e9-c656-456d-b402-2ea49cfdf38a/Faro-Portugal-1-September-2021-Cristiano-Ronaldo-of-Portugal-celebrates-following-the-FIFA-World-Cup-2022-qualifying-group-A-match-between-Portugal-and-Republic-of-Ireland-at-Estadio-Algarve-in-Faro-Portugal-Photo-By-Stephen-McCarthy-Sportsfile-via-Getty-Images"
    },
    {
        id: 1,
        name: "Messi",
        country: "http://www.teleadhesivo.com/es/img/mrs04-jpg/folder/products-listado-merchant/pegatinas-coches-motos-argentina---escudo-de-futbol.jpg",
        player: "https://estaticos-cdn.sport.es/clip/790ac9ac-dcf5-4d4c-9e6e-c253afdfd3f6_alta-libre-aspect-ratio_default_0.jpg"
    },
    {
        id: 2,
        name: "Mbappe",
        country: "https://i.pinimg.com/236x/10/44/a5/1044a58e19d558a8f0fea4f0db726917.jpg",
        player: "https://piks-eldesmarqueporta.netdna-ssl.com/bin/2022/12/10/kylian_mbappe_celebra_el_fallo_de_kane_en_el_inglaterra_francia_foto_cordon_press_001.jpg"
    },
    {
        id: 3,
        name: "Neymar",
        country: "https://i.pinimg.com/236x/98/da/b9/98dab96b86ebf6ad43db0d2603f87cbc.jpg",
        player: "https://media.bleacherreport.com/image/upload/x_0,y_229,w_1800,h_1198,c_crop/c_fill,g_faces,w_1600,h_1600,q_95/v1669391914/wptk2ap9m9hhtlr6sfqw.jpg"
    },
    {
        id: 4,
        name: "Pedri",
        country: "https://i.pinimg.com/236x/62/d5/bb/62d5bbd457928d3fbe976b57c592dba1.jpg",
        player: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/28/16484948625328.jpg"
    },
    {
        id: 5,
        name: "Muller",
        country: "https://i.pinimg.com/236x/5b/1b/a0/5b1ba0fe05a6f15617a23b5fba38d5c5.jpg",
        player: "https://dtvsportsimages.akamaized.net/images/72c56224-4319-4f2e-96df-73869ce66286?width=726"
    },
    {
        id: 6,
        name: "Modric",
        country: "https://www.teleadhesivo.com/es/img/mrs20-jpg/folder/products-listado-merchant/pegatinas-coches-motos-croacia---escudo-de-futbol.jpg",
        player: "https://s.yimg.com/ny/api/res/1.2/2BtX6y8Tkmxl0GGpGK3vvw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/afp.com/1233af68480843c91dc4fb948e923a3a"
    },
    {
        id: 7,
        name: "Achraf",
        country: "https://www.teleadhesivo.com/es/img/mrs18-jpg/folder/products-listado-merchant/pegatinas-coches-motos-marruecos---escudo-de-futbol.jpg",
        player: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/MCFWY5BBH5YIF7MQZLHUBVCC6I.jpg"
    },
    {
        id: 8,
        name: "Vlahovic",
        country: "https://www.teleadhesivo.com/es/img/mrs29-jpg/folder/products-listado-merchant/pegatinas-coches-motos-serbia---escudo-de-futbol.jpg",
        player: "https://www.jornadaperfecta.com/blog/wp-content/uploads/sites/2/2022/10/vlahovic.jpg"
    }
];

const getCards = () => {
    const card = document.querySelector("#card1");
    card.style.backgroundImage = `url('${players[0].img}')`;
}

const showCards = (n) => {
    //Get the n cards
    players.splice(n, players.length - n);        
    
    //Create array of (players + countries)
    let cards = [];
    for(let item of players){
        const playerInfo = {id:item.id,img:item.player};
        const CountryInfo = {id:item.id,img:item.country};
        cards.push(playerInfo,CountryInfo);
    }

    //Shuffle array of cards
    cards.sort(function() { return Math.random() - 0.5 });

    console.log(cards)
    //Show on HTML the array
    for(let card of cards){
        //Create Player Card
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        cardContainer.style.backgroundImage = `url('${card.img}')`;

        //Append to father container
        const fatherContainer = document.querySelector('.card-container');
        fatherContainer.style.display="flex";
        fatherContainer.appendChild(cardContainer);
    }
}

const main = () => {
    const button = document.querySelector("#button-1");
    button.addEventListener('click', event => {
        //Hide form in HTML
        const form = document.querySelector("#form-1");
        form.style.display='None';

        //Get number of cards from HTML
        const numberOfCards = parseInt(document.querySelector("#numberOfPlayers").value);

        showCards(numberOfCards);
    });

    // showCards();
}

main();