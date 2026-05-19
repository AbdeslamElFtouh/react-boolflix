# 🎬 Esercizio: BoolFlix (repo: `react-boolflix`)

In questo esercizio iniziamo a replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm. Per fare questo, utilizzeremo un'API pubblica che ci permette di avere un insieme di risultati congrui alla nostra ricerca.

---

## 🔑 Preparazione e API Key

1. Iscriviti al sito [The Movie Database (TMDB)](https://www.themoviedb.org) (è completamente gratuito).
2. Richiedi la tua `API_KEY` che verrà utilizzata in tutte le chiamate per identificare chi sta effettuando la richiesta.
   - Per richiederla: clicca sul tuo profilo utente ➡️ **Impostazioni** ➡️ **API** ➡️ clicca su **"Richiedi una nuova API key"**.
3. Una volta generata, la troverai sempre in *Impostazioni / API*. Sarà indispensabile per ogni chiamata.

> 📝 **Documentazione:** A questo URL trovi tutte le chiamate possibili all'API: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3). Come prima cosa ci concentreremo su **Search > Movies**.

**Esempio di chiamata API (Film):**
`https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro`

---

## 🎯 Milestones del Progetto

### 🔹 Milestone 1
Creare un layout base con una **searchbar** (un input e un button) in cui scrivere completamente o parzialmente il nome di un film. Al click del bottone, l'app deve cercare sull'API tutti i film che contengono la query inserita.

Dopo la risposta dell'API, visualizza a schermo i seguenti valori per ogni film trovato:
* Titolo
* Titolo Originale
* Lingua
* Voto

### 🔹 Milestone 2
1. **Gestione Lingue:** Trasforma la stringa statica della lingua nella vera e propria bandiera della nazione corrispondente. Gestisci il caso in cui non sia presente la bandiera della nazione ritornata dall'API (le flag non sono presenti in *Bootstrap Icons*).
2. **Estensione della ricerca:** Allarga la ricerca anche alle **serie tv**. Con la stessa azione di ricerca dovrai recuperare sia i film che le serie tv corrispondenti alla query, prestando attenzione a uniformare i dati in uscita (i JSON di risposta per film e serie hanno campi simili ma non sempre identici).

**Esempio di chiamata API (Serie TV):**
`https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs`

### 🔹 Milestone 3
1. **Aggiunta Copertina:** Aggiungi la copertina del film o della serie all'elenco. L'API restituisce solo la parte finale dell'URL (il path). Dovrai comporre l'URL finale partendo dall'URL base delle immagini di TMDB (`https://image.tmdb.org/t/p/`), aggiungendo la dimensione desiderata (puoi verificare le dimensioni disponibili a [questo link](https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400)) e infine il path dell'API.
   - *Esempio URL finale:* `https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`
2. **Voto in Stelle:** Trasforma il voto decimale da 1 a 10 in un numero intero da 1 a 5. Questo ti permetterà di stampare a schermo un numero corrispondente di stelle piene, lasciando le restanti vuote (usa le icone di *Bootstrap Icons*).
   - *Installazione icone:* `pnpm add bootstrap-icons`
   - *Arrotondamento:* All'inizio arrotonda sempre per eccesso all'unità successiva, successivamente pensa a come implementare l'utilizzo della mezza stella.

### 🔹 Milestone 4
Trasforma quello che hai fatto finora in una vera e propria webapp, creando un **layout completo simil-Netflix**:
* Un **header** che contiene il logo e la search bar.
* Una griglia di **card** per i risultati, in cui lo sfondo è rappresentato dall'immagine di copertina (consigliato `poster_path` con larghezza `w342`).
* **Effetto Hover:** Passando con il mouse sopra una card (`on hover`), devono apparire in overlay le informazioni aggiuntive recuperate nei punti precedenti, insieme alla descrizione (*overview*).

---

## 🌟 Milestone Facoltative (Opzionali)

*Se hai terminato le milestone precedenti e vuoi andare oltre, puoi implementare i seguenti punti:*

### 🔸 Milestone 5 (Opzionale)
Partendo da un film o da una serie, richiedi all'API quali sono gli attori che fanno parte del cast. Aggiungi alla scheda solo i **primi 5 attori** restituiti (Nome e Cognome) e i **generi** associati al titolo seguendo questo schema: *"Genere 1, Genere 2, ..."*.

### 🔸 Milestone 6 (Opzionale)
Crea una lista di generi richiedendo quelli disponibili direttamente all'API. Successivamente, implementa dei **filtri** per genere (sia per TV che per Movie) per mostrare o nascondere le schede ottenute dalla ricerca.

---

## 💡 Consigli Utili

* ⚠️ **Procedi in ordine:** Segui le milestone una alla volta. **Non pensare all'interfaccia grafica fino alla Milestone 4**. Tutto può essere risolto inizialmente con una lista `<ul>` non stilizzata.
* 🧩 **Caso base minimo:** Affronta sempre prima la situazione più semplice senza complicazioni (domande come *"Se il titolo originale è uguale al titolo dovrei nasconderlo?"* o *"Se non ci sono risultati cosa scrivo?"* vanno evitate finché il caso base non funziona).
* ⚙️ **Non copiare e incollare:** Se ti viene voglia di duplicare il codice, non farlo! Crea piuttosto una funzione. Ti aiuterà a mantenere il codice leggibile e ti farà risparmiare tempo in futuro.
* ✨ **Qualità del codice:** Prima di passare alla milestone successiva, assicurati che il codice attuale sia scritto nel miglior modo possibile (niente ripetizioni, funzioni chiare e riutilizzabili). Meglio risolvere una milestone in meno ma con codice scritto bene.
* 🌐 **ISO Lingue:** Per avere la corrispondenza della lista delle lingue puoi utilizzare: [List of ISO 639-1 codes (Wikipedia)](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).