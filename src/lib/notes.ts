import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";
import { TOPICS, type Topic, type TopicCollection } from "../consts";

export interface Note {
  entry: CollectionEntry<TopicCollection>;
  topic: Topic;
  /** `/<topic slug>/<note slug>` */
  href: string;
  /** e.g. "3 min read" */
  readingTime: string;
  /** `publishDate` parsed to a UTC midnight date. */
  date: Date;
}

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

/**
 * Parses a `publishDate` front matter value.
 * Accepts a YAML date or a free-form "D Mon YYYY" string where the month is
 * any English spelling starting with its 3-letter abbreviation ("Sept",
 * "September", "Jan"). Falls back to `Date.parse` for anything else (ISO…).
 * Throws on an unparsable value so a typo fails the build instead of
 * silently sorting the note last.
 */
export function parsePublishDate(value: string | Date): Date {
  if (value instanceof Date) return value;

  const match = value.trim().match(/^(\d{1,2})\s+([a-z]+)\.?,?\s+(\d{4})$/i);
  if (match) {
    const [, day, monthName, year] = match;
    const month = MONTHS[monthName.slice(0, 3).toLowerCase()];
    if (month !== undefined) {
      return new Date(Date.UTC(Number(year), month, Number(day)));
    }
  }

  const fallback = new Date(value);
  if (Number.isNaN(fallback.valueOf())) {
    throw new Error(`Unparsable publishDate: "${value}"`);
  }
  return fallback;
}

function byNewest(a: Note, b: Note): number {
  return b.date.valueOf() - a.date.valueOf();
}

async function getTopicNotes(topic: Topic): Promise<Note[]> {
  const entries = await getCollection(topic.collection);
  return entries.map((entry) => ({
    entry,
    topic,
    href: `/${topic.slug}/${entry.data.slug}`,
    readingTime: readingTime(entry.body ?? "").text,
    date: parsePublishDate(entry.data.publishDate),
  }));
}

/** Every note of the garden (or of one topic), newest first. */
export async function getNotes(topic?: Topic): Promise<Note[]> {
  const topics = topic ? [topic] : TOPICS;
  const notes = await Promise.all(topics.map(getTopicNotes));
  return notes.flat().sort(byNewest);
}

/** Every topic with its note count, in `TOPICS` order (sort it yourself if needed). */
export async function getTopicsWithCount(): Promise<
  { topic: Topic; count: number }[]
> {
  return Promise.all(
    TOPICS.map(async (topic) => ({
      topic,
      count: (await getCollection(topic.collection)).length,
    })),
  );
}

const SHORT_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "20 Jan 2026" (UTC, like `parsePublishDate`). */
export function formatNoteDate(date: Date): string {
  return `${date.getUTCDate()} ${SHORT_MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** "2026-01-20", for `<time datetime>`. */
export function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** "1 note", "7 notes" */
export function formatNoteCount(count: number): string {
  return `${count} ${count === 1 ? "note" : "notes"}`;
}
