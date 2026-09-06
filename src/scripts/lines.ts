/**
 * Split a heading into its rendered lines and wrap each one, so a
 * headline can rise out of a mask line by line rather than fading in
 * as a block. This is the difference between "animated" and "designed".
 *
 * Lines are found with the Range API by walking the text and watching
 * for the top offset to change, which is where the browser actually
 * broke it. Guessing at word counts would fight `text-wrap: balance`,
 * which nearly every headline here uses.
 */
export function splitLines(el: HTMLElement): boolean {
  // Refuse anything carrying inline markup. Flattening to textContent
  // would silently drop an <em> or <strong> and with it the emphasis
  // the headline was written to have.
  if (!el.classList.contains("is-split") && el.children.length > 0) return false;

  const text = (el.dataset.raw ??= el.textContent ?? "");
  if (!text.trim()) return false;

  el.textContent = text;
  const node = el.firstChild;
  if (!node || node.nodeType !== Node.TEXT_NODE) return false;

  const range = document.createRange();
  const starts: number[] = [0];
  let lastTop: number | null = null;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") continue;
    range.setStart(node, i);
    range.setEnd(node, i + 1);
    const top = Math.round(range.getBoundingClientRect().top);
    if (lastTop === null) {
      lastTop = top;
    } else if (top > lastTop) {
      lastTop = top;
      let start = i;
      while (start > 0 && text[start - 1] !== " ") start--;
      starts.push(start);
    }
  }
  starts.push(text.length);

  const html = starts
    .slice(0, -1)
    .map((start, i) => {
      const line = text.slice(start, starts[i + 1]).trim();
      return line
        ? `<span class="ln" style="--n:${i}"><span class="ln__i">${esc(line)}</span></span>`
        : "";
    })
    .join("");

  if (!html) return false;
  el.innerHTML = html;
  el.classList.add("is-split");
  return true;
}

const esc = (s: string) =>
  s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);
