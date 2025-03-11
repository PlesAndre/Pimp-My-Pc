# PIMP MY PC

## Presentazione 👨‍🏫

Pimp My PC è un progetto Capstone sviluppato come parte del percorso formativo di Epicode. Si tratta di un ecommerce dedicato all'acquisto di singoli componenti per PC o di configurazioni pre-assemblate. Gli utenti possono progettare il proprio computer personalizzato scegliendo tra numerose opzioni, oppure esplorare configurazioni consigliate per gaming, ufficio o streaming.

Il sito è pensato per offrire una navigazione intuitiva e soluzioni pratiche anche per chi non ha molta esperienza nel campo, con opzioni che vanno da configurazioni "economiche" a quelle "high-end" con i componenti più avanzati disponibili sul mercato.

## Obiettivi 🎯
Il principale obiettivo del progetto è semplificare l'esperienza di acquisto per utenti non esperti, rispondendo alla domanda: "Come posso semplificare l'acquisto di un PC?"

Gli obiettivi specifici includono:

- Fornire informazioni chiare e dettagliate su ogni componente e configurazione.
- Offrire configurazioni preimpostate per diverse categorie d'uso (gaming, ufficio, streaming).
- Creare un'interfaccia utente semplice, user-friendly e con una UX/UI chiara e intuitiva.
- Garantire la miglior scelta possibile nell'acquisto del proprio PC personalizzato.
  
## Tecnologie impiegate 💻
Frontend
- JavaScript (per la logica dell'interfaccia)
- React (per lo sviluppo dell'interfaccia utente dinamica)
- Bootstrap (per il design responsive e componenti pre-stilizzati)
- CSS (per la personalizzazione dei layout e dello stile)

Backend
- Express.js (per la gestione delle rotte e delle API)
- Node.js (per il server backend)
- MongoDB (per il database NoSQL)

Autenticazione
- JWT (JSON Web Tokens) per l'autenticazione e la gestione delle sessioni utente
- Hashing delle password per garantire la sicurezza delle credenziali utente

### Credenziali di accesso per funzionalità ADMIN 🔐 
Per testare la funzionalità di ADMIN nel login, utilizza queste credenziali:
- Email: admintest@gmail.com
- Password: 1234
  
## Funzionalità Implementate ⚙️
CRUD Implementato:
- Create: Possibilità di aggiungere nuove configurazioni e componenti al sistema.
- Read: Visualizzazione delle configurazioni e dei singoli componenti, con informazioni dettagliate su ogni prodotto.

Funzionalità Non Implementate:
- Delete: I componenti e le configurazioni non vengono rimossi automaticamente dal database quando vanno fuori stock. In futuro, questa funzionalità sarà aggiunta per mantenere il database aggiornato.
- Update: I componenti e le configurazioni non vengono aggiornati nel sistema. Sebbene il nome e la scheda tecnica rimangano invariati, sarebbe utile poter modificare le informazioni dei prodotti (ad esempio, quando vengono aggiornati o ritirati dal mercato).
