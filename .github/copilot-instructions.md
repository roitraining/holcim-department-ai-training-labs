# Course and lab authoring guidelines (GitHub Copilot)

When **planning** a course, follow:

- [.agents/skills/course-architect/SKILL.md](../.agents/skills/course-architect/SKILL.md)
- [.agents/skills/course-architect/examples/outline-template.md](../.agents/skills/course-architect/examples/outline-template.md)

When writing the **spine**, follow:

- [.agents/skills/course-spine-generator/SKILL.md](../.agents/skills/course-spine-generator/SKILL.md)
- [.agents/skills/shared/course-spine.md](../.agents/skills/shared/course-spine.md)

When drafting or modifying **teaching slides**, follow:

- [.agents/skills/course-generator/SKILL.md](../.agents/skills/course-generator/SKILL.md)
- [.agents/skills/course-generator/examples/layout-templates.md](../.agents/skills/course-generator/examples/layout-templates.md)
- [.agents/skills/shared/slide-markdown-rules.md](../.agents/skills/shared/slide-markdown-rules.md)
- [.agents/skills/shared/svg-craft.md](../.agents/skills/shared/svg-craft.md)

When doing an **instructor review**, follow:

- [.agents/skills/instructor-review/SKILL.md](../.agents/skills/instructor-review/SKILL.md)

When polishing **course visuals** (layouts, SVG diagrams, generated images, screenshot placeholders), follow:

- [.agents/skills/course-graphics-designer/SKILL.md](../.agents/skills/course-graphics-designer/SKILL.md)
- [.agents/skills/course-graphics-designer/examples/visual-patterns.md](../.agents/skills/course-graphics-designer/examples/visual-patterns.md)
- [.agents/skills/shared/svg-craft.md](../.agents/skills/shared/svg-craft.md)

When reviewing for **accuracy and currency**, follow:

- [.agents/skills/technical-editor/SKILL.md](../.agents/skills/technical-editor/SKILL.md)
- [.agents/skills/shared/verify-current-facts.md](../.agents/skills/shared/verify-current-facts.md)

When **proofreading** for spelling, grammar, and house-style typography, follow:

- [.agents/skills/copy-editor/SKILL.md](../.agents/skills/copy-editor/SKILL.md)
- [.agents/skills/copy-editor/examples/editing-patterns.md](../.agents/skills/copy-editor/examples/editing-patterns.md)

When drafting or modifying **labs**, follow:

- [.agents/skills/lab-generator/SKILL.md](../.agents/skills/lab-generator/SKILL.md)
- [.agents/skills/lab-generator/examples/lab-template.md](../.agents/skills/lab-generator/examples/lab-template.md)
- [.agents/skills/shared/lab-markdown-rules.md](../.agents/skills/shared/lab-markdown-rules.md)

When **testing** a lab, follow:

- [.agents/skills/lab-tester/SKILL.md](../.agents/skills/lab-tester/SKILL.md)

Place slide chapters under the matching `course-holcim-*/` folder with shared assets in that folder’s `images/`. Place each lab under `labs/<team>/lab-NN-slug/` (`lab.md` + `images/`).

Reuse stock slide images. Do not use the ampersand character in titles or body text; write “and” instead.

Default theme is `holcim-theme`. Content chapters default to quizzes after What You Learned. A lab slide’s body is `Lab link: TODO`. Questions and Answers uses `Questions?`.

Preview labs at https://labv.roitraining.com/ by pasting the lab folder URL. Pipeline: [PIPELINE.md](../PIPELINE.md).
