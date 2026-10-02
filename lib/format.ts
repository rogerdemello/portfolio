const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

/** 7 -> "seven" (falls back to digits above ten). */
export const numberWord = (n: number) => WORDS[n] ?? String(n);

/** "seven" -> "Seven" */
export const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
