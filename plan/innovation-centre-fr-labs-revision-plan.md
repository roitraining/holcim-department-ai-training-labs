# Revision Plan: French Innovation Centre Labs

Target: `labs/innovation-centre-fr/` (README, five `lab.md` files, and the `assets/` folders).

Sources studied:

- the English labs in `labs/innovation-centre/`
- the Grok translation
- the revised French course and its style sheet in `plan/innovation-centre-fr-revision-plan.md`

The labs must use the same vocabulary as the revised course. That style sheet is the reference, and the lab-specific additions are in section 3.

---

## 1. Findings

### 1.1 Learners get English class files

- **The Drive links point to the English files.** Every Drive link in the French labs and asset READMEs is identical to the English version, so learners download English files.
- **The translated asset files are never used.** The French `.md` assets in the repo (meeting note, glossary, project-update template, brand constraints, trial brief, and others) were translated, but no link points to them.
- **The PDFs and CSVs are byte-for-byte the English originals,** and so are all the screenshots.

What this does in each lab:

| Lab | What the learner gets | Effect |
| :--- | :--- | :--- |
| 1 | English PDFs | French prompts against English sources. It works, but Gemini’s answers come back in mixed languages. |
| 2 | English PDFs in Drive; the email body is French | Works. The search terms and file names are the same. |
| 3 | The English **Project Update** and **brand constraints** Docs | The deck is generated from English text with French prompts, so slide titles come out in mixed languages. The translated `.md` files in the repo are never used. |
| 4 | English CSV (headers and values) | Works. The column names are identifiers and should stay English. See 1.3. |
| 5 | English PDFs | The notebook answers, report, infographic and deck mix the two languages. |

Decision: keep the English files (section 5, Q1).

### 1.2 Translation quality

The text has the same problems as the course: word-for-word phrasing and the wrong register. Representative examples:

| Lab | Grok | Problem | Direction |
| :--- | :--- | :--- | :--- |
| 1 | « Demain, vous devez une note destinée à l’usine » | “you owe a note”, translated literally | « Demain, vous devez remettre une note à l’usine » |
| 1 | « les chiffres non publiés ou manquants restent dehors » | Calque | « …ne doivent pas figurer dans la note » |
| 1, 3 | « Ce qu’il porte » (table heading) | “owns”, translated literally | « Contenu de référence » / « Fait foi pour » |
| 1, 3 | « portes qualité » | “quality gates”, translated literally | « jalons qualité » |
| 1 | « une première demande faible », « un prompt plus solide » | Unnatural | « une première demande volontairement vague », « un prompt plus précis » |
| 2 | « Les libellés Gemini de Gmail bougent » / « votre espace » | “labels move” / “tenant” | « Les libellés de Gemini dans Gmail évoluent » / « votre environnement » |
| 2 | « Cherchez dans Gmail, Chat et Drive pour HIC-LC3-24 » | English word order | « Recherchez HIC-LC3-24 dans Gmail, Chat et Drive » |
| 2 | « C’est toujours vous qui cliquez sur Send » | Loses the point (you are accountable) | « C’est vous qui envoyez : vous en êtes responsable » |
| 3 | « au lieu de lutter contre un modèle restant » | Opaque | « plutôt que de partir d’un modèle existant à défaire » |
| 3 | « Vous ne taperez pas la présentation à partir d’un plan vide dans votre tête » | Calque | « Inutile de rédiger la présentation de zéro » |
| 3 | « le logo Holcim ne collisionne pas avec le texte » | Not French | « le logo ne chevauche pas le texte » |
| 4 | « contrôler par échantillon » | Clumsy | « vérifier sur quelques lignes » |
| All | Réussi / Échec, spec, refondue, montée en échelle | Same fixes as the course | Conforme / Non conforme, spécification, reformulée, passage à l’échelle |
| All | “labo” | Course decision | “atelier” |

Standard lab headings should read as natural French:

| English | Grok | Revised |
| :--- | :--- | :--- |
| Time Required | Temps requis | Durée |
| Overview | Présentation | Vue d’ensemble |
| You learn how to: | Vous apprendrez à : | Vous allez apprendre à : |
| Scenario | Scénario | Mise en situation |
| Lab Instructions | Instructions du labo | Instructions de l’atelier |
| Task N / Bonus Task N | Tâche N / Tâche bonus N | Tâche N / Tâche bonus N (kept) |
| Congratulations! | Félicitations ! | Félicitations ! (kept) |

**Check first:** the Lab Viewer builds the table of contents from headings, and it may expect the English heading names. The current French headings are already translated, so confirm in the viewer that they render before relying on it.

### 1.3 Technical risks a French learner hits that an English learner doesn’t

1. **Spreadsheet locale (labs 3 and 4).** A Google Sheet created by a user whose region is France defaults to the French locale. When the English CSVs (`52.4`, `0.95`) are imported:
   - the values may come in as text or dates instead of numbers
   - formulas display with `;` separators (`=IF(AND(F2=28;I2<J2);"Yes";"No")`), not the `,` the lab shows

   **Plan:** add a warning note, per Q2 (no extra step).
2. **Expected values in the text.** The labs check answers such as 43.3 MPa, 0.69 and M13 (41.2 MPa). The prose will show French format (43,3 MPa). Add one note per lab: “Avec les paramètres régionaux anglais, la feuille affiche 43.3”.
3. **Interface labels stay English,** as in the course. The labs already mostly do this. Tidy the stragglers, such as “Report, une Infographic” used as French nouns.
4. **Lab 5 web search query.** Keep it in English on purpose (the LC3 literature is mostly English), and say why in a short note.
5. **Gmail suggested replies** will be in the mailbox language. Change the example chips (“Sounds good”, “I can meet”) to say “for example” and give French examples alongside.

### 1.4 Carry-over from the course work

- **Code block apostrophes.** The house rule is straight quotes in code. The labs follow it (`l'équipe`); the revised course uses `’` inside its prompts. Align both on the house rule, which means a small mechanical fix to the course’s code blocks too.
- **Lab titles.** The `#` titles should match the course lab slides:
  - Lab 3 is « Présentations conformes à la charte Holcim avec Gemini dans Google Slides »
  - Lab 5 is « Note de synthèse sur l’essai de liant avec Gemini Notebook »
- **Course vocabulary everywhere:** liste de contraintes, fil de conversation, charte graphique, facteur de clinker, fiche formule, Loire Plant, and the file and Drive document names (unchanged, in English).

### 1.5 Source bug (also in English)

In the trial brief (lab 5), the M12 7-day row is missing its clinker factor cell, so every column after it shifts left (`| M12 | LC3-50 | 7 | 31.4 | (no 7-day spec) |`). Fix it in both languages. The PDF on Drive should be checked for the same problem.

## 2. Approach

1. **One lab per pass, in order 1 to 5.** For each lab, rewrite the whole `lab.md` against the English version, keeping the same structure. The English and French files have identical line counts today, which makes side-by-side review easy.
2. **Keep the structure:**
   - the same tasks and step numbers
   - the same image paths, Drive links (unless Q1 changes them) and fence tags
   - the same alerts
   - interface labels in English and bold
3. **Prompts in French,** written as a French user would type them. Identifiers stay as they are: column names, file names, `Yes`/`No`, `Not found` → `Non trouvé` (already done), and `<Mix ID>`.
4. **Asset files:** restore the English originals and translate only the asset READMEs (Q1).
5. **Mechanical checks per lab:**
   - same headings count and task numbers as English
   - links and image paths identical
   - code fences tagged
   - straight quotes in code; `’` and `« »` in prose
   - non-breaking spaces in prose
   - French number format in prose; dots inside data and formulas
6. **Lab test** (PIPELINE step): run lab 3 and lab 4 in a French-region account to confirm the locale fix, and spot-check that labs 1, 2 and 5 give French output.

## 3. Lab-specific additions to the course glossary

| English | French |
| :--- | :--- |
| plant-facing | destiné(e) à l’usine |
| handover pack | dossier de transfert |
| quality gates | jalons qualité |
| working session | séance de travail |
| fog room | chambre humide |
| lab screening / scale-up / plant-ready (CSV values) | Keep the English values; explain them in French the first time |
| canned message | message préparé |
| tenant | environnement |
| stress-test (a draft) | confronter aux sources |
| fallback | solution de repli |
| speaker notes | notes de l’orateur |
| briefing pack (lab 5) | dossier de revue |

## 4. Per-lab notes (beyond the general rewrite)

- **Lab 1:**
  - Fix the scenario sentence and the table headings.
  - The infographic text inside the prompts becomes French (titles, column headers, footer « Visuel de formation synthétique : pas de vrais KPI usine »).
  - Spelling instruction: « orthographe exacte de Holcim, LC3 et Loire ».
  - Executive rewrite heading: « Direction ».
- **Lab 2:**
  - The email subject and body are already French. Polish them (« Équipe essai liant du HIC »).
  - Chip examples per 1.3.5.
  - Rename the Task 3 heading: « Tâche 3 : Planifier une séance de travail avec Help me schedule ».
- **Lab 3:**
  - Doc and Sheet names stay English, to match course slide S30 (`@HIC-LC3-24 Project Update`).
  - Locale warning before the CSV import.
  - The checklist becomes the course’s wording (« éléments de liste », « Conforme »).
- **Lab 4:**
  - Locale warning, including what the formulas look like with `;` separators.
  - French-format expected values, with the English-locale display noted.
  - « Canvas » becomes « canvas » as in the course.
- **Lab 5:**
  - English search query, with the reason.
  - Studio output names stay English (Report, Infographic, Slide Deck, Briefing doc, Presenter slides).
  - The Infographic and Slide Deck prompts ask for French output: « Rédigez l’infographie en français. »
- **README:** Translate properly, with lab names matching the course and a note that the class files are in English (Q1).

## 5. Decisions (answered)

- **Q1: Keep the English class files.** No Drive work. In practice:
  - Replace the translated `.md` assets in `labs/innovation-centre-fr/*/assets/` with the English originals, so the repo matches what Drive serves.
  - Translate only the asset `README.md` files, and say there that the sources are in English.
  - In each lab, add one sentence in Task 1 (or the scenario) that the class files are in English, and refer to them by their English titles where the text quotes them (for example, “trial brief” → `hic-lc3-24-trial-brief.pdf`, la note d’essai).
  - Where the output language matters, add an instruction to answer in French:
    - Lab 1 extraction and rewrites
    - Lab 3 deck: « Rédigez les diapositives en français. »
    - Lab 5: check Studio’s output language, and add « Répondez en français. » to the chat prompts
  - The lab 5 trial-brief bug (1.5) is fixed in the English asset. Its Drive PDF needs a re-upload with **Manage versions** (your action).
- **Q2: Warning, not a step.** In labs 3 and 4, before the CSV import, add a `> [!NOTE]` in French. It says that if the numbers import as text, or formulas show `;` instead of `,`, the cause is the spreadsheet locale, and it gives the fix (**File → Settings → Locale → United States**, then re-import). It also says that the French locale works but displays `;` separators and decimal commas.
