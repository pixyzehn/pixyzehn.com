import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

export function loadYaml<T = unknown>(fileUrl: URL): T {
  return parse(readFileSync(fileUrl, 'utf-8')) as T;
}
