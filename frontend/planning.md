# planning du developement du jeux

Si j'étais à ta place, je suivrais cet ordre précis :

### 1. Comprendre et écrire les règles

Avant de coder quoi que ce soit.

À la fin de cette étape, tu dois pouvoir répondre à :

* Comment une case est jouée ?
* Comment les graines sont distribuées ?
* Comment se fait une capture ?
* Quand une partie se termine ?
* Comment détermine-t-on le gagnant ?

---

### 2. Créer le plateau en HTML/CSS

Sans logique.

Affiche simplement :

* les 14 cases
* le nombre de graines dans chaque case
* les scores

À la fin :

```text
Le plateau ressemble à un vrai Songo.
```

---

### 3. Représenter l'état du jeu en JavaScript

Par exemple :

```javascript
let board = [5,5,5,5,5,5,5,5,5,5,5,5,5,5];
let currentPlayer = 1;
let score1 = 0;
let score2 = 0;
```

À la fin :

```text
Toutes les données du jeu sont stockées en mémoire.
```

---

### 4. Implémenter le déplacement des graines

Quand un joueur clique sur une case :

```javascript
playMove(index)
```

Les graines sont distribuées correctement.

Ignore les captures au début.

À la fin :

```text
Les graines circulent correctement.
```

---

### 5. Ajouter les captures

C'est souvent la partie la plus difficile.

À la fin :

```text
Une partie complète peut être jouée.
```

---

### 6. Gérer la fin de partie

Détecter :

* victoire
* égalité
* score final

À la fin :

```text
Le moteur du jeu est terminé.
```

---

### 7. Tester énormément

Joue :

* contre toi-même
* avec des amis
* des dizaines de parties

Corrige les bugs.

À la fin :

```text
Le jeu local fonctionne parfaitement.
```

---

### 8. Ajouter PHP + MySQL

Créer :

* utilisateurs
* parties
* stockage des états du jeu

À la fin :

```text
Les parties peuvent être enregistrées.
```

---

### 9. Ajouter le multijoueur

Créer :

* créer une partie
* rejoindre une partie
* envoyer un coup
* recevoir les mises à jour

À la fin :

```text
Deux personnes peuvent jouer en ligne.
```

---

### 10. Ajouter les améliorations

* classement
* historique
* chat
* IA
* tournois
* design moderne

---

Donc en une phrase :

**Commence par les règles → puis le moteur du jeu en JavaScript → puis l'interface → puis PHP/MySQL → puis le multijoueur → puis les fonctionnalités avancées.**

La plus grosse erreur serait de commencer par les comptes utilisateurs ou le serveur avant d'avoir un moteur de Songo qui fonctionne parfaitement en local. C'est le moteur du jeu qui est le cœur du projet.
