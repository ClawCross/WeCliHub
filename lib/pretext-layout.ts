"use client";

import { layout, layoutWithLines, prepare, prepareWithSegments, setLocale as setPretextLocale } from "@chenglou/pretext";
import type { PreparedText, PreparedTextWithSegments } from "@chenglou/pretext";

const UNBOUNDED_WIDTH = 1_000_000;
const preparedCache = new Map<string, PreparedText>();
const preparedSegmentsCache = new Map<string, PreparedTextWithSegments>();

let currentLocale: string | undefined;

function buildCacheKey(text: string, font: string): string {
  return `${font}\u0000${text}`;
}

export function syncPretextLocale(locale?: string): void {
  if (currentLocale === locale) {
    return;
  }

  currentLocale = locale;
  preparedCache.clear();
  preparedSegmentsCache.clear();
  setPretextLocale(locale);
}

export function getPreparedText(text: string, font: string): PreparedText {
  const key = buildCacheKey(text, font);
  const cached = preparedCache.get(key);
  if (cached) {
    return cached;
  }

  const prepared = prepare(text, font);
  preparedCache.set(key, prepared);
  return prepared;
}

export function getPreparedSegments(text: string, font: string): PreparedTextWithSegments {
  const key = buildCacheKey(text, font);
  const cached = preparedSegmentsCache.get(key);
  if (cached) {
    return cached;
  }

  const prepared = prepareWithSegments(text, font);
  preparedSegmentsCache.set(key, prepared);
  return prepared;
}

export function getFontFromStyles(styles: CSSStyleDeclaration): string {
  if (styles.font.length > 0) {
    return styles.font;
  }

  return `${styles.fontStyle} ${styles.fontVariant} ${styles.fontWeight} ${styles.fontSize} / ${styles.lineHeight} ${styles.fontFamily}`;
}

export function parseLineHeight(styles: CSSStyleDeclaration): number {
  const parsed = Number.parseFloat(styles.lineHeight);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  const fontSize = Number.parseFloat(styles.fontSize);
  return Number.isFinite(fontSize) && fontSize > 0 ? fontSize * 1.4 : 22;
}

export function measureSingleLineWidth(text: string, font: string): number {
  if (!text) {
    return 0;
  }

  const prepared = getPreparedSegments(text, font);
  const result = layoutWithLines(prepared, UNBOUNDED_WIDTH, 1);
  return result.lines[0]?.width ?? 0;
}

export function fitTextWithEllipsis(text: string, width: number, font: string, lineHeight: number): string {
  const source = text.trimEnd();
  if (!source) {
    return "…";
  }

  const full = `${source}…`;
  if (layout(getPreparedText(full, font), width, lineHeight).lineCount <= 1) {
    return full;
  }

  const graphemes = Array.from(source);
  let low = 0;
  let high = graphemes.length;

  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    const candidate = `${graphemes.slice(0, mid).join("").trimEnd()}…`;
    if (layout(getPreparedText(candidate, font), width, lineHeight).lineCount <= 1) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  const fitted = graphemes.slice(0, low).join("").trimEnd();
  return fitted ? `${fitted}…` : "…";
}

export function findBalancedWidth(
  prepared: PreparedTextWithSegments,
  availableWidth: number,
  lineHeight: number,
  idealLineCount?: number,
  minRatio = 0.58
): number {
  if (!(availableWidth > 0)) {
    return availableWidth;
  }

  const baseline = layout(prepared, availableWidth, lineHeight).lineCount;
  const targetLineCount = idealLineCount ? Math.min(Math.max(1, idealLineCount), baseline) : baseline;
  if (targetLineCount <= 1) {
    return availableWidth;
  }

  let low = Math.max(availableWidth * minRatio, 120);
  let high = availableWidth;

  for (let index = 0; index < 14; index += 1) {
    const mid = (low + high) / 2;
    const midLineCount = layout(prepared, mid, lineHeight).lineCount;
    if (midLineCount <= targetLineCount) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return Math.min(availableWidth, Math.max(high, 120));
}
