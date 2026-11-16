# Revision Plan: French Innovation Centre Course

Target file: `course-holcim-innovation-centre-fr/course.md` (60 slides) and `course-holcim-innovation-centre-fr/images/notebook-flow.svg`.

Sources studied:

- English course: `course-holcim-innovation-centre/course.md`
- First translation (Grok): `course-holcim-innovation-centre-fr/course.md`
- Native reviewer: marked-up PDF (slides 21–59) and typed notes (slides 14–18)

Scope: the course only. Labs come later. The labs already use some terms this plan changes (see section 6).

---

## 1. Diagnosis

The Grok translation is grammatically correct but reads as English written in French words. The main problems:

1. **Word-for-word calques:** “avoir faux”, “ce qui doit rester dehors”, “quel fichier porte les chiffres”, “tranche trois décisions”, “questions plus nettes”, “M12 a passé 42.5 MPa”, “que doit-il toujours se passer”.
2. **Wrong register for training material.** It sounds clipped and telegraphic. French course material is more explicit: it names the product (Google Drive, feuille de calcul) and states the reason.
3. **Ambiguous technical words:**
   - “fil” alone for a Gmail thread
   - “pile de contraintes” for a constraint stack
   - “Prompt” as a column heading on discussion slides, where it reads as an AI prompt
   - “Labo” for a hands-on exercise, which this audience will read as their physical laboratory
   - “clients” for Workspace tenants
4. **Wrong number format for French:** decimal points (42.5, 0.95) and thousands commas (2,600).
5. **Code blocks are too wide for the viewer.** They are cut off on screen (slides 10, 12, 37 and 39), so the reviewer could not see whole prompts. This caused one of her errors (“Below_Yes”).

## 2. How we treat the reviewer’s feedback

- **Accept by default.** She is fluent and her rewrites are better French. Where I was unsure, I kept her wording.
- **Correct where she lacked the English source** or misread a truncated or ambiguous slide. Each case is listed in section 5 so she can check our reasoning.
- **Condense where her version is too long** for the layout. Keep her vocabulary and structure, but trim the words.
- **Interface labels stay in English** (user decision). This reverts her “Aidez-moi à rédiger”, “Aidez-moi à planifier”, “Plus d’options” and “Envoyez”.

## 3. Style sheet (apply everywhere)

### Interface labels: English, bold, exactly as on screen

**Ask Gemini**, **Summarize this email**, **Help me write**, **Help me schedule**, **More options**, **Send**, **Add sources → Add from Drive**, **Match presentation style**, **Next**, **Approve**, **File → Import**, **Insert new sheet(s)**, **Tools → Create canvas**, **Data → Split text to columns**.

Refer to a feature by its label (“la fonction **Help me write**”). Do not add a French gloss.

### Glossary

| English | Use | Do not use |
| :--- | :--- | :--- |
| thread | fil de conversation (variant: échange) | fil (alone) |
| constraint stack | liste de contraintes | pile de contraintes |
| file X owns Y | X fait foi pour Y / dans quel fichier se trouve… | X porte Y |
| hands-on lab | **pending Q1** (Atelier recommended) | Labo |
| Time: | Durée : | Temps : |
| Do Now | À vous de jouer | À faire maintenant |
| Agenda | Programme | Ordre du jour |
| Today’s Sections (nav slides) | Au programme | Sections du jour |
| Holcim-Style Presentations | Présentations conformes à la charte Holcim | au style Holcim |
| brand constraints | charte graphique Holcim | contraintes de marque |
| step (in the Slides plan) | sujet | étape |
| builds (slides) | génère | construit |
| Doc / Sheet (as nouns) | document Google Docs / tableau Google Sheets; short forms: document de suivi, tableau de résultats | un Doc, un Sheet |
| project update | point d’avancement (the Doc: document de suivi de l’avancement) | |
| spec | spécification (prose and prompts) | spec |
| pass / fail | Conforme / Non conforme | Réussi / Échec |
| recast (a mix) | reformuler | refondre |
| scale-up | passage à l’échelle | montée en échelle |
| tenants (feature rollout) | environnements | clients |
| discussion “Prompt” heading | Situation | Prompt |
| draft (noun) | brouillon / premier jet | |
| canvas | canvas (lowercase; Canvas at the start of a sentence) | Canva |
| clinker factor | facteur de clinker (kept; matches the labs and the reviewer did not flag it) | |
| Loire Plant, HIC-LC3-24, file names, CSV data, column names | Unchanged. These are synthetic proper names the labs reuse. | |

### Grammar and register

- Use *vous* throughout.
- Instructions use the imperative (Ouvrez, Cliquez).
- Objectives, What You Learned and capability lists use infinitives (the reviewer’s choice on slide 53).
- Quiz options all use the same mood.

### Typography

- `« »` in prose. Straight `"` inside code fences (house rule).
- Curly apostrophe `’` in prose and in SVG text.
- Decimal comma and space for thousands (42,5 MPa; 2 600 kEUR). **Pending Q2.**
- Non-breaking space before `: ; ? !` and inside `« »`. **Pending Q3.**
- No em-dashes and no `&`. These rules are already met.

### Layout budgets (so the viewer does not break)

- Slides scroll vertically in the viewer, so long slides are fine (for example, S31 and S43). Horizontal scrolling is the problem: wrap code lines rather than shorten content.
- Code fence lines: at most **70 characters** on full-width slides, and at most **44 characters** in 2-column or 3-column slides. Add line breaks freely; extra lines cost nothing.
- French runs about 20–30% longer than English. Length is a readability concern, not a breakage risk. In column and panel layouts, keep bullets tight, but don't drop meaning to save lines.
- Do not change:
  - the slide count (60)
  - `---` separators
  - layout comments
  - image paths
  - lab URLs
  - fence language tags

## 4. Slide-by-slide changes

Numbers are viewer slide numbers (as in the PDF). “Hers” means the reviewer’s wording, used as is or nearly so.

### Section 0: Opening (slides 1–9)

No reviewer feedback here. These are my revisions using the same principles.

- **S2 Bienvenue:**
  - “ROI est un leader de la conception et de l’animation de formations sur mesure en technologie et en management”
  - “Votre formateur” replaces “Rencontrez votre formateur”
- **S3 Objectifs du cours:** Mirror S53 (her infinitive rewrite) so objectives and outcomes match:
  - Utiliser Gemini dans Google Workspace pour optimiser les activités quotidiennes du HIC
  - Élaborer des prompts avancés, ancrés dans des sources fiables
  - Résumer des échanges, effectuer des recherches, planifier des réunions et rédiger des réponses dans Gmail
  - Créer et modifier des présentations dans Google Slides, en respectant la charte graphique de Holcim
  - Analyser des données et créer des canvas interactifs dans Google Sheets
  - Élaborer des notes de synthèse sourcées et citées dans Gemini Notebook

  Her “ancrés à des sources fiables et contextualisées” is shortened, because the English says only “grounded in your sources”. Her “planifier des activités” becomes “réunions” (English: schedule).
- **S4:** Title “Programme”. Item 3 becomes “Présentations conformes à la charte Holcim dans Slides”.
- **S5:** “Responsables innovation qui présentent en revue interne” (avoids “briefent”).
- **S6:**
  - “Savoir rédiger des prompts Gemini simples”
  - “Bien maîtriser Drive, Sheets et Slides”
  - “Aucune compétence en science des données n’est requise”
- **S7:** “Vous utilisez déjà ces outils au quotidien. Aujourd’hui, vous apprenez à y tirer parti de Gemini.”
- **S8:**
  - Title: “Règles de la session”
  - Column headings: “Données” and “Fonctionnalités”
  - Utilisez les fichiers synthétiques HIC-LC3-24 fournis dans chaque atelier
  - Les résultats non publiés, les fiches formule et les noms de partenaires ne doivent jamais figurer dans un prompt
  - Vous êtes responsable de chaque chiffre qui sort de cette salle
  - Les fonctionnalités Gemini sont déployées à des dates différentes selon les environnements
  - S’il manque un bouton présenté dans une diapositive ou un atelier, signalez-le. Chaque atelier prévoit une solution de repli
  - Les libellés de l’interface évoluent. Suivez l’objectif de l’étape, pas une capture d’écran à l’identique
- **S9, S20, S27, S35, S45 (navigation):**
  - Title: “Au programme”
  - Item 3: “Présentations conformes à la charte Holcim dans Slides”

  She struck the “s” in “Sections”, but a singular title over five items reads oddly, so “Au programme” is my alternative. For item 3 she proposed “Mise en page et formatage Holcim dans Slides”. That loses the idea that Gemini *creates* the deck, so I use “charte” instead, a word she used herself on slide 53.

### Section 1: Advanced Prompt Engineering (slides 10–19)

Typed feedback covers slides 14–18.

- **S10:**
  - Title: “À vous de jouer : demander une note d’essai”
  - “Essayez ceci avant d’aborder la technique.”
  - Prompt wrapped onto two lines: `Rédigez une courte note sur notre essai de liant LC3` / `pour l’équipe de l’usine.`
  - Step 3: “Lisez la réponse.”
- **S11:**
  - Title: “Qu’est-ce qui ne va pas dans ce prompt ?”
  - Aucun fichier n’était joint : chaque chiffre a donc été inventé
  - Gemini ne peut pas deviner votre lecteur, vos sources ni ce qu’il faut exclure
  - La solution : une structure, des sources et une règle pour les informations manquantes
  - Si un chiffre ne figure pas dans la source, il n’a pas sa place dans la réponse.
- **S12:**
  - Column headings: “Prompt faible” and “Prompt structuré”
  - Bullets: “Ni lecteur, ni source, ni limites” and “Gemini comble chaque manque avec du contenu plausible”
  - Both prompts rewrapped to 44 characters or fewer
  - Example of tone: `"M12 dépasse 42,5 MPa à 28 jours. Cubes à 90 jours en attente."`
  - Sections: Objet, Besoins de l’usine, Méthodes et résultats, Questions ouvertes
- **S13 (cards):**
  - Listes de contraintes: “Regroupez toutes les limites dans un seul bloc et collez-le à la fin du prompt.”
  - Ancrage sur plusieurs fichiers: “Indiquez à Gemini quel fichier fait foi pour les méthodes, pour les chiffres et pour les réserves.”
  - Boucles de critique: “Demandez à Gemini de vérifier son brouillon par rapport aux sources avant toute relecture humaine.”
  - Méta-prompting: “Demandez à Gemini d’améliorer votre prompt et de vous poser des questions avant de commencer.”
- **S14** (hers):
  - Title: “Listes de contraintes”
  - Code: `facteur de clinker au format 0,00`
  - Bullet 2: “Si Gemini s’écarte du sujet lors d’une relance, recollez la liste. Ne recommencez pas avec un prompt flou ou sans contexte.” Her full phrase (“sans contexte ou substance, flou ou vague”) is condensed.
- **S15:**
  - In the code, “porte” becomes “fait foi pour”, “Spec” becomes “Spéc.”, and “N’estimez pas.” is kept
  - Tip (hers): “`Non trouvé` est une réponse acceptable…”
- **S16:**
  - Columns: “1. Rédiger”, “2. Critiquer”, “3. Réécrire”
  - Critique quote: « Vérifiez ce brouillon par rapport aux fichiers joints. Associez chaque affirmation à son fichier source. Marquez toute affirmation sans source comme INVENTÉ. »
  - Rewrite quote: « Réécrivez ce texte en cinq lignes pour un dirigeant. Mêmes faits. N’ajoutez rien. »
  - “votre liste de contraintes”
- **S17:**
  - “Le rendu est soigné” keeps her “est soigné” and the English “looks” (polish on the surface only)
  - “logos superflus” replaces “logos en plus”
  - Warning: “Le texte d’une image générée peut contenir des fautes. Relisez chaque mot.”
- **S18:**
  - Title: “Méta-prompting : laissez Gemini écrire le prompt”
  - Prompt ends with “Puis attendez mes réponses.” (hers)
  - Bullet 2: “Relisez la réécriture, corrigez les faits, puis relancez le prompt édité” (hers)
  - Bullet 3: “Fonctionne aussi pour les prompts de texte…”
- **Lab slides (S19, S26, S34, S44, S51):**
  - Lab name per Q1
  - “**Durée :** 30 minutes”
  - Link text per Q1
  - URLs unchanged
  - Lab 3 title uses “conformes à la charte Holcim”
  - Lab 5: “Note de synthèse sur l’essai de liant avec Gemini Notebook” (matches the French lab title)

### Section 2: Gmail (slides 20–26)

- **S21 table:**
  - Headings: Fonction | Où | Utilité
  - Feature names stay English (Help me write, Help me schedule)
  - Résumer: “**Summarize this email** dans un fil de conversation” | “Rattraper un long échange sur le transfert” (hers, adapted)
  - Interroger votre messagerie: « Qu’a demandé l’usine la semaine dernière ? »
  - Rechercher dans Gmail, Chat et Drive: “Retrouver le protocole, la décision, le fichier”
  - Help me write: “Rédiger une réponse, puis la rendre plus formelle, la développer ou la raccourcir”
  - Réponses suggérées: “En bas d’un e-mail reçu” | “Réponses courtes rédigées à partir de tout le fil de conversation”
  - Help me schedule: “Proposer des créneaux compatibles avec l’agenda de chacun”
- **S22:**
  - Title: “Rechercher dans Gmail, Chat et Drive”
  - Formulez votre demande en langage courant : « Trouvez le protocole HIC-LC3-24 et la dernière décision prise dans Chat sur l’attribution des silos. »
  - Gemini cherche uniquement dans les sources sélectionnées dans le panneau. Vérifiez-les avant de conclure que la réponse est fausse
  - Nommez précisément le fichier ou le fil de conversation. « Trouvez mes documents LC3 » est trop vague et renvoie le mauvais PDF (hers + the English consequence)
  - Les résultats de Chat dépendent de la configuration de votre Workspace. Si Chat ne renvoie rien, ouvrez le fichier Drive cité dans la réponse et poursuivez à partir de celui-ci (hers, condensed)
- **S23:**
  - Title stays “Help me schedule”
  - Répondez dans le fil de conversation, ou rédigez un nouvel e-mail en ajoutant les destinataires concernés (hers)
  - Si le bouton n’apparaît pas, ouvrez **More options**
  - “…des invités auxquels vous avez accès”
  - “…n’a pas choisi de créneau”
- **S24:**
  - Title: “Réponses suggérées et Help me write”
  - Rédigées à partir de tout le fil de conversation, pas seulement du dernier message
  - Relisez avant d’envoyer : le ton est assuré, même quand les faits sont inexacts (keeps the English warning she deleted, in clearer form)
  - Affinez le brouillon : plus formel, plus développé ou plus court
  - Utile pour une réponse qui acte trois décisions sur le transfert
  - Vous restez responsable de vérifier chaque réponse proposée par Gemini. Aucun chiffre absent du fil de conversation (hers + the English “no number” rule)
- **S25:**
  - Title: “Discussion : que faut-il toujours faire avant d’envoyer une réponse suggérée ?”
  - Left heading: “Situation”
  - En quoi cette réponse pourrait-elle être incorrecte ?
  - Quels e-mails du HIC faut-il toujours rédiger soi-même plutôt qu’envoyer en un clic ?
  - Qui est responsable si la réponse est incorrecte : Gemini ou vous ? (hers)

### Section 3: Slides (slides 27–34)

- **S28:**
  1. Ouvrez une nouvelle présentation et cliquez sur **Ask Gemini**
  2. Décrivez la présentation. Ajoutez des fichiers avec **Add sources → Add from Drive**
  3. Facultatif : utilisez **Match presentation style** avec une présentation Holcim approuvée, qui sert de modèle (hers)
  4. Cliquez sur **Next** et relisez le plan : un sujet par diapositive (hers)
  5. Modifiez, ajoutez ou supprimez des sujets, puis cliquez sur **Approve** (hers)
  6. Gardez l’onglet ouvert pendant que Gemini génère les diapositives (hers)
- **S29:**
  - Title: “Générer à partir de Google Docs ou de Google Sheets”
  - Column headings: “Le document fournit le récit” and “Le tableau fournit les chiffres”
  - “l’argumentaire”, “spécification”
  - Important box (hers, adjusted to keep the English meaning): “Précisez à Gemini dans quel fichier se trouve chaque type d’information. Sinon, il risque de mélanger les sources et de combler lui-même les manques.”
- **S30:**
  - Title: “Un prompt qui attribue un rôle à chaque fichier”. The current “attribue la responsabilité” misleads.
  - Code rewrapped to 70 characters or fewer, using “spécification” and “ne l’affichez pas”
  - Supprimez tout sujet qui invente un KPI, un client ou une usine
- **S31 (demo):**
  - Step 1: “Créez une nouvelle présentation et cliquez sur **Ask Gemini**.” (hers)
  - Step 2: “…y sont collés : ce sont les seules sources.”
  - Inside the prompt:
    - Decimal comma (pending Q2)
    - “spécification”
    - “Étape : passage à l’échelle”
    - “Échanges engagés avec l’usine sur l’attribution du silo d’argile calcinée”
    - “environ 8 % plus élevée”
    - “4 200 cm2/g Blaine”
    - “Reformuler ou abandonner M13 ?”
    - Results table: Conforme (témoin) / Conforme / Non conforme
    - Rules rewritten as natural infinitives
  - Steps 3–5: “Répondez aux éventuelles questions de Gemini, puis cliquez sur **Next**”, then “Relisez le plan des diapositives…”, then “Une fois la présentation générée…”
- **S32:**
  - Gardez le brouillon initial ouvert et poursuivez dans la même conversation Gemini (hers)
  - Joignez les documents sources et les règles de la charte graphique Holcim
  - Dans le prompt, utilisez le verbe « modifier » et non « créer » : « Modifiez les diapositives 3 et 4 à l’aide de ces fichiers. N’ajoutez pas de diapositives. » (hers)
  - Corrigez une diapositive à la fois en indiquant son numéro
  - Demandez à Gemini de remplacer ou de modifier une image qui ne convient pas (hers)
- **S33:**
  - Aspect column:
    - “Couleurs d’accent bleu et vert du logo Holcim”
    - “Pas plus de quatre éléments de liste par diapositive” (reworded so “puces” cannot be misread as *pouces*)
  - Contenu column:
    - N’utilisez que les chiffres qui figurent clairement dans les fichiers joints (hers)
    - Présentez les objectifs comme des objectifs, pas comme des résultats (hers)
    - Présentez à part les résultats à 90 jours, encore en attente (hers, adjusted)
    - Aucune hallucination : pas d’usines, de clients ni de tonnages inventés (hers, grammar fixed)
  - Tip: “Le moyen le plus rapide d’obtenir le style Holcim est d’utiliser **Match presentation style** avec un modèle Holcim approuvé. Les prompts ne servent ensuite qu’à corriger les exceptions.”

### Section 4: Sheets (slides 35–44)

- **S36:**
  - Third heading: “Exemple de demande”
  - Format row: « Mettez en gras et figez la ligne d’en-tête, activez les filtres et affichez les nombres avec une décimale. »
  - Analyze row: “…Mettez en évidence les lignes utilisées.” (hers)
  - Formulas row: « Ajoutez une colonne qui signale les valeurs non conformes à la spécification, à l’aide d’une formule de feuille de calcul. » (hers, without “Excel”)
  - Search row: « Recherchez le dernier point d’avancement dans Google Drive et résumez les risques associés au projet. » (hers)
  - Canvas row: « Créez un tableau de bord avec un indicateur par région et un filtre par statut. »
- **S37:**
  - “Demandez à Gemini de décrire les colonnes avant d’effectuer toute analyse” (hers)
  - The prompt is hers, with the bold-header instruction she dropped restored, wrapped to 44 characters: `Formatez cette feuille de calcul : figez la ligne d’en-tête et mettez-la en gras, ajustez la largeur des colonnes, affichez les nombres avec une décimale et activez les filtres. N’ajoutez ni ne supprimez aucune ligne.`
- **S38:**
  - Column headings: “Question vague” and “Question ciblée” (hers)
  - Left column: “Rien que vous puissiez vérifier” (hers)
  - Right column:
    - Prompt: « Comparez la résistance moyenne par famille de liants. Utilisez uniquement les données de cette feuille de calcul et indiquez les lignes prises en compte. » (hers)
    - Précise les colonnes, le regroupement et la source des données
    - Chaque chiffre correspond à des lignes que vous pouvez filtrer et vérifier

  Her version turned these two bullets into instructions inside the prompt. In the English they explain *why* the prompt is good, so they stay as commentary.
  - Tip: “…« Affichez maintenant ce résultat sous forme de graphique. » Gemini conserve le contexte.”
- **S39:**
  - The prompt is hers, corrected: column `Below_Spec` (not “Below_Yes”), “une formule” (not “Excel”), wrapped to 44 characters. The `=IF` block is unchanged.
  - Explain prompt: `Expliquez en langage simple la formule` / `de la cellule N2, étape par étape.`
  - La formule est intégrée dans les cellules : elle se met à jour automatiquement quand les données changent (hers)
  - Vérifiez manuellement trois lignes avant de vous fier à la colonne (hers)
- **S40:**
  - Title: “Rechercher des documents depuis le panneau” (hers)
  - Body becomes the intro line “Interrogez vos fichiers Google Drive sans quitter votre feuille de calcul :” and three numbered steps (hers, without the stray `**`)
  - The layout must still auto-split beside the image. Check this in the viewer, and fall back to bullets if it does not.
- **S41:**
  - Flatten the Canvas sub-bullet to “Une vue interactive : tableaux de bord, tableaux Kanban, galeries et calendriers” (her only real change)
  - “Modifiez les données dans le canvas : l’onglet est mis à jour”
- **S42:**
  - “Décrivez ensuite vos besoins dans le champ de saisie du prompt” (hers)
  - Note (hers, corrected): “Le canvas nécessite des données dans l’onglet, une interface en anglais, un ordinateur (pas l’application mobile) et un droit de modification. Il n’est pas disponible si le téléchargement, la copie et l’impression sont désactivés pour le fichier.” Her version said “Canva” and dropped *English*.
- **S43:**
  - Title: “À vous de jouer : créer un canvas”
  - The CSV is unchanged
  - Step 5 prompt starts with hers (“Construisez un tableau de bord de gestion de projets… Ajoutez des indicateurs clés :”) and keeps all the English content (total, at risk, budget, bar chart, filter, table), wrapped to 70 characters
  - Step 6: “2 600 kEUR”
  - Steps 7–8 polished: “Cet onglet étant actif…”, “Faites glisser une carte…”

### Section 5: Gemini Notebook (slides 45–51)

- **S47:** Use her four bullets as written (“s’écarter du sujet”, “retracée jusqu’à une source”, “dont vous devez assumer la responsabilité”).
- **S48:**
  - Title: “Sources en entrée, constats en sortie”
  - SVG changes in `notebook-flow.svg`:
    - “manques marqués” becomes “lacunes identifiées” (hers)
    - The center box uses her ideas shortened to fit 15 px text in a box about 300 px wide: “Chat ancré dans les sources”, “Questions orientées décision”, “Réponses sourcées”, “Preuves insuffisantes signalées”
    - Curly apostrophes in “Note d’essai” and “Synthèse d’essai”
  - Update the alt text to match
- **S49:**
  - Title: “Poser des questions plus précises” (hers)
  - Her four bullets, condensed for the auto-split column. Bullet 3 stays descriptive, as in the English: “Si les sources ne permettent pas de répondre, le notebook le signale plutôt que d’inventer un chiffre.”
- **S50:**
  - Bullet 2: “Limitez les sources à votre propre contenu avant de générer des résultats” (hers)
  - “ébauches de présentations”

### Wrap-up and quizzes (slides 52–60)

- **S52:**
  - Second heading: “Une action à mener sur votre propre travail”
  - Prompt row: “…et une liste de contraintes” (hers)
  - Gmail row: “…puis utilisez **Help me schedule** pour planifier les actions de suivi” (hers, label in English)
  - Slides row: “Élaborez votre prochain point d’avancement en vous appuyant sur des sources fiables et vérifiables” (hers, typo fixed)
  - Notebook row: “Regroupez les fichiers…”
- **S53:**
  - Title: “Ce que vous avez appris à faire”
  - Her infinitive list, identical to the new S3
- **S54/S55 Quiz 1:**
  - The question is hers (bold)
  - Option C: « Limitez le tableau à 20 lignes. » (hers)
  - The answer slide uses her three explanations. Each one starts with the option it explains (**B.**, **A.**, **C. et D.**), the same convention as Quiz 2.
- **S56/S57 Quiz 2:**
  - The question is hers, with “Next” and “Approve” kept in English
  - Every option uses the imperative. B becomes “Supprimez ou reformulez ce sujet dans le plan, puis cliquez sur Approve”; hers was in the infinitive.
  - Answer slide: she labeled the bullets A–D in display order, but they actually explain B, A, C and D. Reorder them A→D with correct labels:
    - **A.** Supprimer la diapositive plus tard est facile à oublier, et les chiffres inventés peuvent aussi apparaître sur d’autres diapositives
    - **B.** Le plan est le point de contrôle : le corriger à ce stade coûte moins cher que de corriger une présentation finie
    - **C.** Une note de bas de page ne rend pas un chiffre inventé acceptable
    - **D.** Recommencer revient à jeter un plan presque correct
- **S58:**
  - Left heading: “Situation”
  - Un fil de conversation de 40 messages avec Loire Plant sur le transfert
  - Les derniers résultats dans un tableau Google Sheets
  - Un document de suivi de l’avancement et un modèle de présentation approuvé par Holcim (hers)
  - Discussion questions (hers):
    - Quels outils utiliseriez-vous ? Pour quelles tâches, et dans quel ordre ?
    - Lorsque deux outils peuvent accomplir la même tâche, comment choisir le plus approprié ?
    - À quel moment une personne doit-elle vérifier le travail généré par Gemini avant de l’utiliser ?
- **S59:**
  - The intro is hers, in the singular (the English has one thread)
  - Strong answers, all as infinitives:
    - **Gmail :** résumer le fil de conversation, retrouver les décisions et utiliser **Help me schedule** pour organiser une répétition. Her “supprimez les doublons dans l’agenda” is dropped because it is new content.
    - **Sheets :** poser des questions ciblées, vérifier les formules et créer un canvas pour visualiser les données de façon dynamique
    - **Gemini Notebook :** regrouper les articles et la note d’essai, avec des réponses citées qui listent les écarts entre résultats et publications (hers, condensed)
    - **Slides :** générer la présentation à partir du document et du tableau avec **Match presentation style**, puis relire le plan. This restores the Sheet and “read the plan”, which her version dropped.
    - **Conversation Gemini :** établir une liste de contraintes pour toute note rédigée
  - Watch-fors: light polish only (“…en espérant que cela suffise”, “vérifié dans le tableau Sheets”)

## 5. Reviewer suggestions not taken as written (for her second look)

| Slide | Her suggestion | What we did | Why |
| :--- | :--- | :--- | :--- |
| 21–24, 52 | French interface labels | Kept English | User decision |
| 22 | “avant de proposer une réponse” | “avant de conclure que la réponse est fausse” | The English means “before you blame the answer” |
| 24 | “formater” | “plus formel” | The English is “formalize”, not “format” |
| 24 | “suggère trois décisions possibles” | “acte trois décisions” | The English means the reply settles decisions |
| 24 | Delete “Elles énoncent les faits avec assurance” | Reworded, not deleted | It is the core warning in the English |
| 27 | “Mise en page et formatage Holcim” | “conformes à la charte Holcim” | Keeps the idea that Gemini creates the deck |
| 33 | “pouces ou 10,16 cm” | “éléments de liste” | “puces” means bullets |
| 36, 39 | “formule Excel” | “formule” | The tool is Google Sheets |
| 37 | Dropped “en gras” | Restored | It is in the English prompt |
| 38 | Explanations moved into the prompt | Kept as commentary | In the English they explain the prompt |
| 39 | “Below_Yes” | `Below_Spec` | The code block was cut off on screen |
| 42 | “Canva… la langue soit définie” | “canvas… interface en anglais” | Product name, and English is a requirement |
| 57 | Labels A–D in display order | Reordered | The bullets explain B, A, C, D |
| 59 | “supprimez les doublons dans l’agenda” | Removed | Not in the source |
| 59 | Slides line without the Sheet or plan review | Restored both | Key lessons of the section |

## 6. Known inconsistencies with the labs (fix when we do the labs)

- The labs use “Labo”, “fiche formule”, “Help me write” and English labels. These are consistent with the plan, apart from Q1.
- The labs don’t use “pile de contraintes”, “fil” or the old Holcim-style section name in the same way yet, but they should be checked.
- Lab 3’s French title still says “au style Holcim”.

## 7. Implementation steps

1. Make a working branch (or rely on the clean `main`; the current file is committed).
2. Apply sections 3 and 4 slide by slide. Use Edit on `course.md` in slide order, one section at a time.
3. Edit `notebook-flow.svg` text. Check that the widths fit and that the file still parses as XML.
4. Run mechanical checks:
   - Slide count = 60 (the `---` count is unchanged)
   - Layout comments, image paths and lab URLs are identical to before (diff them)
   - Every fence still has `text`
   - Code line widths: 70 or fewer full width, 44 or fewer in columns
   - No em-dash or `&` in prose
   - `’` and `« »` in prose
   - Non-breaking spaces, per Q3
5. Check in the viewer (https://slidesv.roitraining.com/), especially:
   - The column slides: 12, 16, 17, 24, 33, 37–39, 41, 58 and 59
   - The panel slides: 22, 23, 28, 32 and 42
   - No code block scrolls horizontally anywhere. Vertical scrolling is fine (S31 and S43 will scroll).
   - Slide 40’s new numbered list
6. Write a short change note in French for the reviewer, covering section 5, so she can confirm the corrections.

## 8. Decisions (answered)

- **Q1: Atelier.** Use “Atelier N : …”, “Ouvrir l’atelier N”, and “atelier” on S8.
- **Q2: French number format.** Use the decimal comma and a space for thousands in prose and French prompts. The CSV data and the `=IF` formula stay unchanged.
- **Q3: Non-breaking spaces.** Add U+00A0 before `: ; ? !` and inside `« »`, in prose only, never in code fences.
- **Q4: Yes.** Write a French change note for the reviewer, saved as `reviews/innovation-centre-fr-note-relectrice.md`.
