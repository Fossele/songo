function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class SongoGame {
    constructor() {
        // 14 cases, 5 graines chacune
        this.board = Array(14).fill(5);

        this.player1Score = 0;
        this.player2Score = 0;

        this.currentPlayer = 1;
    }

    getPlayerPits(player) {
        /*obtiens les range des jouer a leur tours*/ 
        return player === 1
            ? [0, 1, 2, 3, 4, 5, 6]
            : [7, 8, 9, 10, 11, 12, 13];
    }

    isOwnPit(index) {
        /*permet de savoir a qui appartient la range*/
        return this.currentPlayer === 1
            ? index >= 0 && index <= 6
            : index >= 7 && index <= 13;
    }

    isOpponentPit(index) {
        /*permet de savoir la rangee oppose*/
        return !this.isOwnPit(index);
    }

    makeMove(startPit) {

        if (!this.isOwnPit(startPit)) {
            throw new Error("Tu dois jouer dans ton camp.");
        }

        let seeds = this.board[startPit];

        if (seeds === 0) {
            throw new Error("Case vide.");
        }

        this.board[startPit] = 0;

        let current = startPit;

        // Semis
        while (seeds > 0) {

            current = (current + 1) % 14;

            // sauter la case de départ
            if (current === startPit) {
                current = (current + 1) % 14;
            }

            this.board[current]++;
            seeds--;
            
        }

        // Capture
        this.capture(current);

        // Changement de joueur
        this.currentPlayer =
            this.currentPlayer === 1 ? 2 : 1;
    }

    capture(lastPit) {

        if (!this.isOpponentPit(lastPit)) {
            return;
        }

        let captured = 0;
        let pit = lastPit;

        while (this.isOpponentPit(pit)) {

            const seeds = this.board[pit];

            if (seeds === 2 || seeds === 3) {

                captured += seeds;
                this.board[pit] = 0;

                pit = (pit - 1 + 14) % 14;

            } else {
                break;
            }
        }

        if (this.currentPlayer === 1) {
            this.player1Score += captured;
        } else {
            this.player2Score += captured;
        }
    }

    getWinner() {

        if (this.player1Score > this.player2Score) {
            return "Joueur 1";
        }

        if (this.player2Score > this.player1Score) {
            return "Joueur 2";
        }

        return "Égalité";
    }

    isGameOver() {

        if (this.player1Score >= 36) {
            return true;
        }

        if (this.player2Score >= 36) {
            return true;
        }

        const player1Empty =
            this.board.slice(0, 7).every(v => v === 0);

        const player2Empty =
            this.board.slice(7).every(v => v === 0);

        return player1Empty || player2Empty;
    }

    printBoard() {

        console.log(
            this.board.slice(7).reverse().join(" ")
        );

        console.log(
            this.board.slice(0, 7).join(" ")
        );

        console.log(
            `P1=${this.player1Score} P2=${this.player2Score}`
        );
    }
}



function render() {

    // Mettre à jour les 14 cases
    document.querySelectorAll(".pit").forEach(pit => {

        const index = Number(pit.dataset.index);

        pit.textContent = game.board[index];
    });

    // Mettre à jour les scores
    document.getElementById("score1").textContent =
        game.player1Score;

    document.getElementById("score2").textContent =
        game.player2Score;

    // Mettre à jour le joueur courant
    document.getElementById("current-player").textContent =
        `Joueur ${game.currentPlayer}`;
}

const game = new SongoGame();

   document.querySelectorAll(".pit")
    .forEach(pit => {
        pit.addEventListener("click", () => {
            const index = Number(pit.dataset.index);
            game.makeMove(index);
            document.getElementById("current-player").innerHTML = "Jouer " + game.currentPlayer;
            render();
        });
    });


