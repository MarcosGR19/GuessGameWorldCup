const checkSelections = (selection, numberOfCards) => {
    console.log('---CHECK SELECTIONS---');
    setTimeout(()=>{
        if (selection[0].id !== selection[1].id){
            // CASE WRONG CARDS
            console.log("Wrong cards");
            // Reinitialize selection array
            const firstCard = document.querySelector(`.card-${selection[0].position}`);
            firstCard.style.backgroundImage = "url('https://m.media-amazon.com/images/I/71lMDjFTzTL._SX679_.jpg')";
            const secondCard = document.querySelector(`.card-${selection[1].position}`);
            secondCard.style.backgroundImage = `url('https://m.media-amazon.com/images/I/71lMDjFTzTL._SX679_.jpg')`;
        } else {
            // CASE MATCHING CARDS
            console.log("Matching cards");
            const firstCard = document.querySelector(`.card-${selection[0].position}`);
            firstCard.className = "card card-guessed";
            const secondCard = document.querySelector(`.card-${selection[1].position}`);
            secondCard.className = "card card-guessed";

            //Check if game is over
            if(document.querySelectorAll('.card-guessed').length == numberOfCards*2){
                console.log("Congratulations, you won!")

                //Show Winner div
                const winDiv = document.querySelector('.win-div');
                winDiv.style.display = 'block';

                const cardsDiv = document.querySelector('.card-container');
                cardsDiv.style.display = 'None';
            }
        }
    },700);
}

const main = async () => {
    let players = [
        {id: 0,name: "Ronaldo",country: "https://i.pinimg.com/736x/dd/00/3f/dd003f1c3399ca88f366ca89695be171.jpg",player:"https://digitalhub.fifa.com/transform/9d9740e9-c656-456d-b402-2ea49cfdf38a/Faro-Portugal-1-September-2021-Cristiano-Ronaldo-of-Portugal-celebrates-following-the-FIFA-World-Cup-2022-qualifying-group-A-match-between-Portugal-and-Republic-of-Ireland-at-Estadio-Algarve-in-Faro-Portugal-Photo-By-Stephen-McCarthy-Sportsfile-via-Getty-Images"},
        {id: 1,name: "Messi",country: "http://www.teleadhesivo.com/es/img/mrs04-jpg/folder/products-listado-merchant/pegatinas-coches-motos-argentina---escudo-de-futbol.jpg",player: "https://estaticos-cdn.sport.es/clip/790ac9ac-dcf5-4d4c-9e6e-c253afdfd3f6_alta-libre-aspect-ratio_default_0.jpg"},
        {id: 2,name: "Mbappe",country: "https://i.pinimg.com/236x/10/44/a5/1044a58e19d558a8f0fea4f0db726917.jpg",player: "https://piks-eldesmarqueporta.netdna-ssl.com/bin/2022/12/10/kylian_mbappe_celebra_el_fallo_de_kane_en_el_inglaterra_francia_foto_cordon_press_001.jpg"},
        {id: 3,name: "Neymar",country: "https://i.pinimg.com/236x/98/da/b9/98dab96b86ebf6ad43db0d2603f87cbc.jpg",player: "https://media.bleacherreport.com/image/upload/x_0,y_229,w_1800,h_1198,c_crop/c_fill,g_faces,w_1600,h_1600,q_95/v1669391914/wptk2ap9m9hhtlr6sfqw.jpg"},
        {id: 4,name: "Pedri",country: "https://i.pinimg.com/236x/62/d5/bb/62d5bbd457928d3fbe976b57c592dba1.jpg",player: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/28/16484948625328.jpg"},
        {id: 5,name: "Muller",country: "https://i.pinimg.com/236x/5b/1b/a0/5b1ba0fe05a6f15617a23b5fba38d5c5.jpg",player: "https://dtvsportsimages.akamaized.net/images/72c56224-4319-4f2e-96df-73869ce66286?width=726"},
        {id: 6,name: "Modric",country: "https://www.teleadhesivo.com/es/img/mrs20-jpg/folder/products-listado-merchant/pegatinas-coches-motos-croacia---escudo-de-futbol.jpg",player: "https://s.yimg.com/ny/api/res/1.2/2BtX6y8Tkmxl0GGpGK3vvw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/afp.com/1233af68480843c91dc4fb948e923a3a"},
        {id: 7,name: "Achraf",country: "https://www.teleadhesivo.com/es/img/mrs18-jpg/folder/products-listado-merchant/pegatinas-coches-motos-marruecos---escudo-de-futbol.jpg",player: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/MCFWY5BBH5YIF7MQZLHUBVCC6I.jpg"},
        {id: 8,name: "Vlahovic",country: "https://www.teleadhesivo.com/es/img/mrs29-jpg/folder/products-listado-merchant/pegatinas-coches-motos-serbia---escudo-de-futbol.jpg",player: "https://www.jornadaperfecta.com/blog/wp-content/uploads/sites/2/2022/10/vlahovic.jpg"}
    ];

    //First Screen
    const button = document.querySelector("#button-1");
    button.addEventListener('click', (e) => {
        //Hide form in HTML
        const form = document.querySelector("#form-1");
        form.style.display='None';

        //Get number of cards from HTML
        const numberOfCards = parseInt(document.querySelector("#numberOfPlayers").value);

        //Apply the number of cards
        players.splice(numberOfCards, players.length - numberOfCards);  

        //Create array of (players + countries)
        let cardsArr = [];
        for(let item of players){
            const playerInfo = {id:item.id,img:item.player};
            const CountryInfo = {id:item.id,img:item.country};
            cardsArr.push(playerInfo,CountryInfo);
        }

        //Shuffle array of cards
        cardsArr.sort(function() { return Math.random() - 0.5 });

        //Create world cup cards in HTML
        for (let i = 0; i < cardsArr.length; i++) {
            //Create Player Card
            const cardContainer = document.createElement('div');
            cardContainer.className = `card card-${i}`;
            cardContainer.style.backgroundImage = "url('https://m.media-amazon.com/images/I/71lMDjFTzTL._SX679_.jpg')";

            //Append to father container
            const fatherContainer = document.querySelector('.card-container');
            fatherContainer.style.display="flex";
            fatherContainer.appendChild(cardContainer);
        }

        //SECOND SECTION
        // select = [{position:-1,id:-1},{position:-1,id:-1}]
        let selection = [
            {position:-1, id:-1},
            {position:-1, id:-1}
        ];

        // On click
        document.addEventListener('click', (e) => {
            // Get target clicked
            const target = e.target;

            // i will be the index for the select array
            let i = 1;
            // We check if is first selection and change i in that case
            if (selection[0].position == -1){
                i = 0; //First Pick Method
            } 

            // Selection system
            if(target.matches('.card-0')){
                target.style.backgroundImage = `url('${cardsArr[0].img}')`;
                selection[i] = {position:0, id:cardsArr[0].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-1')){
                target.style.backgroundImage = `url('${cardsArr[1].img}')`;
                selection[i] = {position:1, id:cardsArr[1].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-2')){
                target.style.backgroundImage = `url('${cardsArr[2].img}')`;
                selection[i] = {position:2, id:cardsArr[2].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-3')){
                target.style.backgroundImage = `url('${cardsArr[3].img}')`;
                selection[i] = {position:3, id:cardsArr[3].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-4')){
                target.style.backgroundImage = `url('${cardsArr[4].img}')`;
                selection[i] = {position:4, id:cardsArr[4].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-5')){
                target.style.backgroundImage = `url('${cardsArr[5].img}')`;
                selection[i] = {position:5, id:cardsArr[5].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-6')){
                target.style.backgroundImage = `url('${cardsArr[6].img}')`;
                selection[i] = {position:6, id:cardsArr[6].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-7')){
                target.style.backgroundImage = `url('${cardsArr[7].img}')`;
                selection[i] = {position:7, id:cardsArr[7].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-8')){
                target.style.backgroundImage = `url('${cardsArr[8].img}')`;
                selection[i] = {position:8, id:cardsArr[8].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-9')){
                target.style.backgroundImage = `url('${cardsArr[9].img}')`;
                selection[i] = {position:9, id:cardsArr[9].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-10')){
                target.style.backgroundImage = `url('${cardsArr[10].img}')`;
                selection[i] = {position:10, id:cardsArr[10].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-11')){
                target.style.backgroundImage = `url('${cardsArr[11].img}')`;
                selection[i] = {position:11, id:cardsArr[11].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-12')){
                target.style.backgroundImage = `url('${cardsArr[12].img}')`;
                selection[i] = {position:12, id:cardsArr[12].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-13')){
                target.style.backgroundImage = `url('${cardsArr[13].img}')`;
                selection[i] = {position:13, id:cardsArr[13].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-14')){
                target.style.backgroundImage = `url('${cardsArr[14].img}')`;
                selection[i] = {position:14, id:cardsArr[14].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-15')){
                target.style.backgroundImage = `url('${cardsArr[15].img}')`;
                selection[i] = {position:15, id:cardsArr[15].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-16')){
                target.style.backgroundImage = `url('${cardsArr[16].img}')`;
                selection[i] = {position:16, id:cardsArr[16].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-17')){
                target.style.backgroundImage = `url('${cardsArr[17].img}')`;
                selection[i] = {position:17, id:cardsArr[17].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            } else if (target.matches('.card-18')){
                target.style.backgroundImage = `url('${cardsArr[18].img}')`;
                selection[i] = {position:18, id:cardsArr[18].id};
                // Check if is second pick
                if(i == 1){
                    //Check if selections id match
                    checkSelections(selection,numberOfCards);
                    //Reset selection
                    selection = [{position:-1, id:-1}, {position:-1, id:-1}];
                }
            }          
        });
    });
    
}

main();