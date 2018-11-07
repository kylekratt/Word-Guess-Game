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
    guesses = 10,
    wins = 0,
    guessedLetters = {},
    word,
    hiddenword = {},
    hiddenword: function(){
        for(var i=0;i<this.word.length;i++){
            if(/a-z/i.test(this.word.charAt(i)))
            hiddenword[i]=_;
            else
            hiddenword[i]=this.word.charAt(i);
        }
    },
    setword: function(){
        this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },
    guess: function(c){
        this.guessedLetters.push(c);
        var wordCorrect = {};
        for (var i=0;i<this.word.length;i++){
            if(this.word[i]==c){
                wordCorrect.push(i);
            }
        }
        if (wordCorrect.length = 0){
            this.guesses--;
        }
        else {
            for (var j=0;j<wordCorrect.length;j++){
                hiddenword[wordCorrect[j]] = word.charAt(wordCorrect[j]);
            }
        }
    },
    win: function(){
        this.wins++;
        this.guesses=10;
        this.guessedLetters = {};
        this.setword();
        this.hiddenword();
    },
    display: function(){
        document.getElementById(guesses)=this.guesses;
        document.getElementById(wins)=this.wins;
        document.getElementById(guessed)=this.guessedLetters.toString();
    }
}