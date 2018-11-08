var wordGame ={
    wordList: [
        'Bayonetta',
        'Bowser',
        'Bowser Jr.',
        'Captain Falcon',
        'Charizard',
        'Chrom',
        'Cloud',
        'Corrin',
        'Dark Pit',
        'Dark Samus',
        'Diddy Kong',
        'Donkey Kong',
        'Dr. Mario',
        'Duck Hunt',
        'Falco',
        'Fox',
        'Ganondorf',
        'Greninja',
        'Ice Climbers',
        'Ike',
        'Incineroar',
        'Ken',
        'King Dedede',
        'King K. Rool',
        'Kirby',
        'Link',
        'Little Mac',
        'Lucario',
        'Lucina',
        'Luigi',
        'Mario',
        'Marth',
        'Mega-Man',
        'Meta Knight',
        'Mewtwo',
        'Mii Brawler',
        'Mii Gunner',
        'Mii Sword Fighter',
        'Mr. Game & Watch',
        'Ness',
        'Olimar',
        'Pac-Man',
        'Palutena',
        'Peach',
        'Pichu',
        'Pikachu',
        'Piranha Plant',
        'Pit',
        'Pokemon Trainer',
        'Richter Belmont',
        'Ridley',
        'R.O.B.',
        'Robin',
        'Rosalina',
        'Roy',
        'Ryu',
        'Samus',
        'Sheik',
        'Shulk',
        'Simon Belmont',
        'Snake',
        'Sonic',
        'Squirtle',
        'Toon Link',
        'Villager',
        'Wario',
        'Wii Fit Trainer',
        'Wolf',
        'Yoshi',
        'Young Link',
        'Zelda',
        'Zero Suit Samus'
    ],
    guesses : 10,
    wins : 0,
    guessedLetters : [],
    word : "",
    gameword : "",
    hiddenWord : [],
    hiddenword: function(){
        this.hiddenWord = [];
        for(var i=0;i<this.word.length;i++){
            if(/[a-z]/i.test(this.word.charAt(i)))
            this.hiddenWord[i]="_";
            else
            this.hiddenWord[i]=this.word.charAt(i);
            console.log(this.hiddenWord[i])
        }
    },
    setword: function(){
        this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },
    guess: function(c){
        var wordCorrect = [];
        for (var i=0;i<this.word.length;i++){
            if(/[a-z]/i.test(c)==false){
                alert("Please enter a valid character from a-z.")
                return;
            }
            else if(this.word[i].toLowerCase()==c.toLowerCase()){
                wordCorrect.push(i);
            }
        }
        this.guessedLetters.push(c);
        if (wordCorrect.length == 0){
            this.guesses--;
        }
        else {
            for (var j=0;j<wordCorrect.length;j++){
                this.hiddenWord[wordCorrect[j]] = this.word.charAt(wordCorrect[j]);
            }
        }
        console.log(this.hiddenWord);
    },
    win: function(){
        this.wins++;
        this.new();
    },
    new: function(){
        this.guesses=10;
        this.guessedLetters = {};
        this.setword();
        this.hiddenword();
        this.display();
    },
    display: function(){
        gameword = '';
        for (var i=0;i<this.hiddenWord.length;i++){
        this.gameword+=this.hiddenWord[i];}
        document.getElementById("word").innerHTML=this.gameword;
        document.getElementById("guesses").innerHTML=this.guesses;
        document.getElementById("wins").innerHTML=this.wins;
        document.getElementById("guessed").innerHTML=this.guessedLetters;
    }
}
wordGame.new();