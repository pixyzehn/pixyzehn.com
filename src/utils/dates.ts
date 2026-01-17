export function toDate(value: string | Date): Date {
  return value instanceof Date ? value : new Date(value);
}

export function formatPostDate(value: string | Date): string {
  const date = toDate(value);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function formatArchiveDate(value: string | Date): string {
  const date = toDate(value);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short'
  }).format(date);
}

export function formatYear(value: string | Date): string {
  const date = toDate(value);
  return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
}
