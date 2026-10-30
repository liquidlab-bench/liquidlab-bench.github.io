# liquidlab-bench.github.io

The public homepage remains a minimal coming-soon page until the project launch.

## Permanent poster QR links

- Code: https://liquidlab-bench.github.io/code/
- Paper: https://liquidlab-bench.github.io/paper/
- Dataset: https://liquidlab-bench.github.io/dataset/

These addresses stay the same for the lifetime of the printed QR codes.
All three currently show only a coming-soon message. The homepage buttons
open these pages. No full project website,
paper, code, figures, or videos are included in this change.

## Set or change a destination

Edit `redirects.json` on `main` and replace the relevant `null` with the
final public HTTPS URL as a quoted JSON string. GitHub Pages then publishes
the update. Leave a destination `null` until it is ready to be public.
Changing a destination does not require regenerating or reprinting QR codes.
Setting it back to `null` restores the coming-soon page.

Each resource page fetches this configuration without using the browser's
cached copy and redirects with `location.replace`. There is no permanent
HTTP redirect cached in the visitor's browser. GitHub Pages deployment/CDN
propagation may take a few minutes; verify the resource addresses after an
update. A visible destination link is also shown when a redirect is configured.
JavaScript is required for the automatic redirect.

Only put already-public release URLs in this public repository. The
`noindex` metadata on the resource pages discourages search indexing; it
does not make these pages or their Git history private.

For local preview, run `python3 -m http.server 8000` from this directory,
then visit `/code/`, `/paper/`, and `/dataset/` on that local server.
