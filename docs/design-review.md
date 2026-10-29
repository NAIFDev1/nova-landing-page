# Render review

The final surface is an Operate interface. The product itself supplies the visual material; the marketing-page imagery/motion floor does not apply.

1. **Question and hierarchy.** The first screen answers what needs doing in Website launch. Editable tasks occupy the largest region, with the next active task and computed completion above them. New task is the primary action.
2. **Frame.** At 1440px, the 228px sidebar and 12px outer inset leave a 1200px sheet. Two 40px gutters leave 1120px: three 362.67px columns plus two 16px gaps. The sheet is fluid at intermediate widths; long task names wrap without horizontal overflow.
3. **Color.** The neutral sheet and sidebar carry the structure. Olive marks real progress; citron identifies the primary action and the project context. Column states remain written labels, so color never carries meaning alone.
4. **Reconciliation.** The untouched sample data contains 16 tasks: 5 done and 11 open. Product is 2/6 complete, displayed as a rounded 33%. Task state, project progress, project-index progress, and sidebar open count all derive from the same arrays. Test captures containing an added task correctly show 17 total and 12 open.
5. **Zeros and states.** Empty task lanes name their next action. A zero-result search names its filters and offers Clear filters. Counts stay actual counts. Blank input has an associated error; storage failure retains an editable visit-only demo.
6. **Labels.** Progress has an accessible name and percentage. Every task status selector names its task. Owner and due-day controls retain real labels; completion toggles expose their state.
7. **Phone.** A native modal replaces the sidebar. Explicit Ready / In progress / Done controls show one readable lane at a time. The list preserves all data; 100-character titles wrap. Task controls meet 44px touch height. Escape restores navigation focus; changing screen focuses its destination h1.

The first build pass corrected undersized metadata and a 42px task target. The independent finish review then required destination-heading focus on route navigation; the production fix was scored resolved. Remaining inspector advisories concern compact secondary labels and the small brand lockup's two font families. Neither requires altering the functional layout.

No raster picture, customer logo, testimonial, or fabricated performance benchmark is used. The result is intentionally distinct from Forge's long marketing composition: a sidebar, a task workspace, and independent screens form the entire experience.
