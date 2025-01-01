import Link from 'next/link';
import React from 'react';

interface sheet {
  id: string;
  title: string;
  content: string;
}

const sheetLis: sheet[] = [
  {
    id: '1',
    title: 'Sheet1',
    content: 'This is Sheet 1 content',
  },
  {
    id: '2',
    title: 'Sheet2',
    content: 'This is Sheet 2 content',
  },
];

const Sheet = () => {
  return (
    <div>
      <ul>
        {sheetLis.map((sheet) => (
          <li key={sheet.id}>
            <Link href={`/sheet/${sheet.id}`}>{sheet.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sheet;