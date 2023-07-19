import { useState, useRef } from 'react';
import { format, parseISO } from 'date-fns';

export default function ReleaseDate({ rawDate }: { rawDate: string }) {
  const date = parseISO(rawDate);
  const year = format(date, 'yyyy');
  const rest = format(date, 'MMMM d');
  return (
    <div className='release-date'>
      <div className='year'>{year}</div>
      <div className='rest-container'>
        <div className='rest-wrapper'>
          <div className='rest'>
            <span>{`| ${rest}`}</span>
          </div>
        </div>
        <div className='rest-placeholder'>
          <span>{`| ${rest}`}</span>
        </div>
      </div>
    </div>
  );
}
