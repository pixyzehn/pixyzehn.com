import { parse } from 'yaml';

export function loadYaml<T = unknown>(yamlSource: string): T {
  return parse(yamlSource) as T;
}
