# Building a Low-Carbon CEM and Geocycle Briefing with Gemini Notebook

## Time Required

30 minutes

## Overview

In this lab, you will build a Gemini Notebook (NotebookLM) briefing pack for Holcim Operational Excellence. You add synthetic CEM clinker-factor and Geocycle AF sources, research public context with web sources, draft cited talking points in chat, and generate Studio outputs grounded in your selected sources.

### You learn how to:

- Create a Gemini Notebook and add Holcim OE CEM and Geocycle sources.
- Research public cement and alternative-fuel context using web sources.
- Draft grounded, cited leadership talking points in chat.
- Use sources to generate an Infographic and Slide Deck in Studio.

## Scenario

![Holcim Logo](./images/holcim-logo.png)

You are preparing a short Operational Excellence update that must cover two related levers: **CEM clinker-factor/product-mix progress** and **Geocycle thermal substitution**. Digging through scattered notes every month wastes time and risks inconsistent stories. A Gemini Notebook keeps the briefing grounded in sources you choose.

> [!WARNING]
> Every source in this lab is **synthetic training content**. Do not attach real unpublished plant KPIs or real customer waste contracts during this lab.

## Lab Instructions

### Task 1: Create a notebook and add OE sources

In this task, you create the notebook and load the internal sources that will ground later answers.

1. Open [https://notebooklm.google.com/](https://notebooklm.google.com/) and sign in with your account.

2. On the home page, create a **New notebook**.

![Gemini Notebook home page](images/new-notebook.png)

3. Rename the notebook to:

```text
Holcim OE — Low-Carbon CEM and Geocycle Briefing
```

4. Click **Add sources**, choose **Drive**, and add these two shared files (confirm you can view each link first):

   - CEM clinker-factor brief: [https://drive.google.com/file/d/1Gxj6nPDWLB33ecD68EoDlfTd4_xLAhGG/view?usp=drive_link](https://drive.google.com/file/d/1Gxj6nPDWLB33ecD68EoDlfTd4_xLAhGG/view?usp=drive_link)
   - Geocycle AF brief: [https://drive.google.com/file/d/1SAkzt4tigtlLx6KOyxkr08w20XqJkKQw/view?usp=drive_link](https://drive.google.com/file/d/1SAkzt4tigtlLx6KOyxkr08w20XqJkKQw/view?usp=drive_link)

<!-- TODO IMAGE: Screenshot of Add sources with both OE briefs visible -->
![Adding the OE CEM and Geocycle briefs](images/add-drive-sources.png)

5. Wait until both sources appear as ready in the **Sources** panel.

### Task 2: Research public context with web sources

In this task, you use **Search for Web Sources** to pull public context so your briefing can use standard industry language.

1. In the **Search the Web for new sources** tool, enter:

```text
EN 197-1 cement types CEM I CEM II CEM III clinker factor supplementary cementitious materials overview
```

![Searching the web for CEM and clinker-factor context](images/search-web-esg-sources.png)

2. Review the results, and **Import** a number of reputable overviews (or all of them if you prefer).

3. Run a second search:

```text
cement kiln alternative fuels thermal substitution waste co-processing overview
```

4. Import relevant results. Confirm the **Sources** panel includes your OE briefs plus web sources.

![All sources ready](images/all-sources-panel.png)

### Task 3: Draft cited talking points in chat

In this task, you use chat to produce leadership-ready talking points with citations.

1. Ensure all sources are selected.

2. Ask:

```text
Create a 6-bullet leadership briefing that covers:
1) CEM clinker-factor direction
2) product mix toward CEM II–V / ECOPlanet
3) Geocycle thermal substitution direction
4) why the two levers are related but not identical
5) one risk or data gap
6) one recommended OE follow-up
Cite sources for each bullet. If a figure is not in the sources, say so instead of inventing it.
```

3. Review the answer. Save it to a note (push pin/save to note). Notes are saved in the Sources list. click the __Sort sources__ icon and sort them by most recent. You will see your chat answer at the top. 

![Chat talking points saved as a note](images/note-sources.png)

4. Stress-test the draft:

```text
Review the briefing bullets. Flag any bullet that invents a KPI or over-claims carbon performance. Suggest a safer rewrite for each flagged bullet.
```

5. Save the cleaned version as another note. 


### Task 4: Generate Studio outputs from Holcim OE sources only

In this task, you narrow sources and generate visual outputs for the briefing.

1. In Sources, select only your OE briefs (and converted notes), not every web source—unless a web source is essential for definitions.

![Select Holcim OE sources only](images/select-holcim-sources-only.png)

2. In Gemini Notebook **Studio**,  click the **Infographic** button, then click __Generate now__.

3. Once the image is generated review it. If you want changes, click the __Infographic__ button again, and add instructions before generating it again. 

![Infographic Output](images/infographic.png)


3. Click the **Slide Deck** button. Choose __Presenter Slides__. Enter the following prompt to provide instructions to the model and generate the slides. 

```
Create a 15-minute executive briefing presentation. Use Holcim colors and a "Green Energy" theme. Use the selected sources for data, and do not make up any numbers. Real data only. 
```

4. Review the slide deck. If you want changes, try regeneratiing it with more detailed instructions. 

[Example Slide Deck](https://drive.google.com/file/d/1YMuQqev9PT-SLNY93Jknoc--LIvK58qO/view?usp=sharing)


### Bonus Task 5: Exploring Gemini Notebook Studio

1. If you have time, experiment with the other Gemini Notebook Studio features. Try creating an Audio Overview, Mind Map, Quiz, or something else that interests you. Explore the features and add instructions as you see appropriate. 

2. Try regenerating outputs with different sources selected. 

3. Try asking the Chat different questions, save the chat responses as notes and use those as sources for creating outputs in the Studio. 


## Congratulations!

You built a Gemini Notebook briefing pack that keeps CEM clinker-factor progress and Geocycle AF progress grounded, citable, and ready for Studio outputs.
