var wordGame = {
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
    guesses: 6,
    wins: 0,
    guessedLetters: [],
    word: "",
    gameword: "",
    hiddenWord: [],
    hiddenword: function () {
        for (var i = 0; i < this.word.length; i++) {
            if (/[a-z]/i.test(this.word.charAt(i)))
                this.hiddenWord[i] = "_";
            else
                this.hiddenWord[i] = this.word.charAt(i);
        }
    },
    setword: function () {
        this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },
    guess: function (c) {
        if (/[a-z]/i.test(c) == false) {
            alert("Please enter a valid character from a-z.")
            return;
        }
        else if (this.guessedLetters.indexOf(c.toLowerCase()) != -1) {
            alert("Please guess a letter you haven't already guessed.")
            return;
        }
        var wordCorrect = [];
        for (var i = 0; i < this.word.length; i++) {

            if (this.word[i].toLowerCase() == c.toLowerCase()) {
                wordCorrect.push(i);
            }
        }
        this.guessedLetters.push(c);
        this.guessedLetters.sort();
        if (wordCorrect.length == 0) {
            this.guesses--;
            if (this.guesses == 0) {
                alert("You ran out of guesses. The correct answer was " + this.word);
                wordGame.newgame();
            }
        }
        else {
            for (var j = 0; j < wordCorrect.length; j++) {
                this.hiddenWord[wordCorrect[j]] = this.word.charAt(wordCorrect[j]);
            }
            if (this.hiddenWord.indexOf("_") == -1) {
                this.display();
                setTimeout(this.win,200);
            }
        }
        this.display();
    },
    win: function () {
        this.wins++;
        alert("You won!");
        wordGame.newgame();
    },
    newgame: function () {
        this.guesses = 6;
        this.guessedLetters = [];
        this.hiddenWord = [];
        this.setword();
        this.hiddenword();
        this.display();
    },
    display: function () {
        this.gameword = '';
        for (var i = 0; i < this.hiddenWord.length; i++) {
            this.gameword += this.hiddenWord[i];
        }
        document.getElementById("word").innerHTML = this.gameword;
        document.getElementById("guesses").innerHTML = this.guesses;
        document.getElementById("wins").innerHTML = this.wins;
        document.getElementById("guessed").innerHTML = this.guessedLetters;
    }
}
wordGame.newgame();
document.onkeyup = function (event) {
    var guess = event.key;
    wordGame.guess(guess);

}