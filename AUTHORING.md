# Authoring guide (instructors)

How to create an ROI Training course in this Holcim departmental repo with an AI coding agent. Follow **[PIPELINE.md](PIPELINE.md)** for the step-by-step agent sessions.

## 1. Create your repository

- Prefer **GitHub → Use this template** so you get a clean course repo.
- Or copy this folder and `git init`.

You do **not** need the slides viewer or lab viewer source code in your repo.

## 2. Open in your editor

Use any editor with a coding agent:

- Cursor  
- Visual Studio Code + GitHub Copilot  
- Claude Code  
- Antigravity / Gemini  

Pointer files in this repo (`.cursorrules`, `CLAUDE.md`, `AGENTS.md`, `.github/copilot-instructions.md`) tell the agent to follow the Course Factory skills. You should not need global machine setup.

If the agent seems unaware of the rules, say explicitly:

> Read PIPELINE.md and the skill listed for this step, then follow them.

## 3. Course layout (slides)

```text
course/
  00-introduction.md
  01-your-first-chapter.md
  02-…
  images/
    roi-logo-with-name.png   # stock — do not regenerate
    welcome.png
    agenda.png
    who-should-attend.png
    prerequisites.png
    qa.png
    …                        # your diagrams / screenshots
```

- **Multi-chapter courses:** one Markdown file per chapter (required by the skill).
- **Stock images** are already in `course/images/`. Copy them into place for every new course folder if you split courses later; do not reinvent them.
- Replace `course/sample-course.md` with your real chapters when you start (or keep it as a layout reference).

## 4. Labs layout

```text
labs/
  lab-01-getting-started/
    lab.md
    images/
  lab-02-…
```

Follow:

- [.agents/skills/lab-generator/SKILL.md](.agents/skills/lab-generator/SKILL.md)
- [.agents/skills/lab-generator/examples/lab-template.md](.agents/skills/lab-generator/examples/lab-template.md)

See also [labs/README.md](labs/README.md) and the sample at `labs/lab-01-sample-lab-viewer-format/lab.md`.

### Lab stubs on slides

A lab slide’s body is `Lab link: TODO`. A person adds the URL later. Do not put a time on the slide. Do not write full lab steps in the slide deck.

## 5. Work with the agent

Suggested sequence: follow [PIPELINE.md](PIPELINE.md) (one fresh session per step: architect, spine, content, instructor review, graphics, technical edit, labs, lab test, copy edit).

## 6. Preview

### Slides

1. Push your repo to GitHub (public, or ensure the viewer can read it).
2. Open the [HTML Slides Viewer](https://slidesv.roitraining.com/).
3. **Open → GitHub**, paste the URL to your `course/` folder (or a single `.md` file).

Local alternative: run any static server in a checkout of the slides viewer and pass `?course=` at your Markdown URL.

### Labs

Use the [HTML Lab Viewer](https://labv.roitraining.com/) and paste a GitHub URL to the lab folder.

## 7. What not to do

- Do not paste an entire multi-chapter course into one mega-file (unless you intentionally author a short single-file workshop and accept that it diverges from the default skill).
- Do not invent instructor bios on the Welcome slide.
- Do not use `&` in slide titles/body (write “and”; use **Questions and Answers**, not “Q&A”).
- Do not regenerate the stock intro/outro images—reuse the files in `course/images/`.
- Do not put full lab procedures in slide Markdown—use `labs/` and the Lab Generator skill.
- Do not put a lab URL on the course lab stub (body is `Lab link: TODO`; humans add the link later).
- Do not use Qwiklabs `ql-*` tags or fragments in Lab Viewer manuals.

## 8. Skill reference

- Pipeline: [PIPELINE.md](PIPELINE.md)
- Architect: [.agents/skills/course-architect/SKILL.md](.agents/skills/course-architect/SKILL.md)
- Spine: [.agents/skills/course-spine-generator/SKILL.md](.agents/skills/course-spine-generator/SKILL.md)
- Course: [.agents/skills/course-generator/SKILL.md](.agents/skills/course-generator/SKILL.md)
- Instructor review: [.agents/skills/instructor-review/SKILL.md](.agents/skills/instructor-review/SKILL.md)
- Course graphics: [.agents/skills/course-graphics-designer/SKILL.md](.agents/skills/course-graphics-designer/SKILL.md)
- Technical editor: [.agents/skills/technical-editor/SKILL.md](.agents/skills/technical-editor/SKILL.md)
- Copy editor: [.agents/skills/copy-editor/SKILL.md](.agents/skills/copy-editor/SKILL.md)
- Labs: [.agents/skills/lab-generator/SKILL.md](.agents/skills/lab-generator/SKILL.md)
- Lab tester: [.agents/skills/lab-tester/SKILL.md](.agents/skills/lab-tester/SKILL.md)  
