import expandEntry from '../expandEntry';
import { FileSystemEntry } from '../../types';

it('expands entry', () => {
  const entries: FileSystemEntry[] = [
    { item: { path: 'app/test', type: 'folder' }, state: { isExpanded: false } },
  ];

  expect(expandEntry(entries, 'app/test')).toEqual([
    { item: { path: 'app/test', type: 'folder' }, state: { isExpanded: true } },
  ]);

  expect(expandEntry(entries, 'app/test', true)).toEqual([
    { item: { path: 'app/test', type: 'folder' }, state: { isExpanded: true } },
  ]);

  expect(expandEntry(entries, 'app/test', false)).toEqual([
    { item: { path: 'app/test', type: 'folder' }, state: { isExpanded: false } },
  ]);
});
