import { codeToHtml } from 'shiki'

export interface Diagnostic {
  line: number
  severity: 'error' | 'warning' | 'info'
  message: string
}

export interface Step {
  description: string
  code: string
  lang?: string
  diagnostics?: Diagnostic[]
}

export const SEVERITY_ICON: Record<Diagnostic['severity'], string> = {
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
}

export function changedLines(before: string, after: string): Set<number> {
  const a = before.split('\n')
  const b = after.split('\n')
  const changed = new Set<number>()
  const max = Math.max(a.length, b.length)
  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i] && i < b.length) changed.add(i + 1)
  }
  return changed
}

export async function renderStep(
  code: string,
  lang: string,
  diagnostics: Diagnostic[],
  diffSet: Set<number>
): Promise<{ html: string }> {
  const diagMap = new Map(diagnostics.map((d) => [d.line, d]))
  const html = await codeToHtml(code, {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
    transformers: [
      {
        line(node, line) {
          if (diffSet.has(line)) this.addClassToHast(node, 'sc-changed')
          const diag = diagMap.get(line)
          if (diag) {
            this.addClassToHast(node, `sc-diag-${diag.severity}`)
            const wrapped = {
              type: 'element' as const,
              tagName: 'span',
              properties: { class: 'sc-diag-content' },
              children: node.children,
            }
            node.children = [wrapped]
          }
        },
      },
    ],
  })
  return { html }
}
