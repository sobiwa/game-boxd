import { useRef, useState, useEffect } from 'react';
import {
  useNavigation,
  Form,
  useLoaderData,
} from 'react-router-dom';
import searchIcon from '../assets/icons/search.svg';

interface FontSizeRecord {
  breakingPoint?: number;
  [key: number]: number;
}

export default function SearchBar() {
  const data= useLoaderData() as {q?: string};
  const inputRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef(0);
  const fontSizeRecords = useRef({} as FontSizeRecord);
  const [fontSize, setFontSize] = useState<number | null>(null);

  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  function isOverflown(element: HTMLInputElement) {
    return element.scrollWidth > element.clientWidth;
  }

  function manageFontSize() {
    if (!inputRef.current) return;
    const currentInputLength = (inputRef.current as HTMLInputElement).value
      .length;
    if (isOverflown(inputRef.current)) {
      const cssUnitValue = inputRef.current.computedStyleMap().get('font-size');
      if (!cssUnitValue) return;
      const currentFontSize = (cssUnitValue as CSSUnitValue).value;
      setFontSize((prev) => {
        let newFontSize;
        if (prev === null) {
          fontSizeRecords.current.breakingPoint = currentInputLength;
          newFontSize = currentFontSize - 1;
        } else {
          newFontSize = prev - 1;
        }
        const filteredFontSize = newFontSize >= 16 ? newFontSize : 16;
        fontSizeRecords.current[currentInputLength] = filteredFontSize;
        return filteredFontSize;
      });
    } else if (fontSize !== null) {
      setFontSize((prev) => {
        /* if for some reason input length is less than the point
        at which font size was altered, font size reverts back and
        fontSizeRecords resets */
        if (
          (fontSizeRecords.current.breakingPoint &&
            currentInputLength < fontSizeRecords.current.breakingPoint) ||
          currentInputLength === 0 ||
          prev === null
        ) {
          fontSizeRecords.current = {};
          return null;
        }

        /* if backspacing, sets font size to cached size at that 
        value.length if exists, otherwise returns current fontSize
        unchanged */
        if (
          lengthRef.current >
          (inputRef.current as HTMLInputElement).value.length
        ) {
          if (currentInputLength in fontSizeRecords.current) {
            return fontSizeRecords.current[currentInputLength];
          }
          return prev;
        }

        /* user is typing without overflow after alterations 
        on font size (prev is not null), so font size is cached
        for this input length and font size is unchanged */
        fontSizeRecords.current[currentInputLength] = prev;
        return prev;
      });
    }
    lengthRef.current = currentInputLength;
  }

  useEffect(() => {
    const searchInput = document.getElementById('q');
    if (searchInput) {
      (searchInput as HTMLInputElement).value = data?.q ?? '';
    }
  }, [data?.q]);

  return (
    <Form className='search-form' role='search' action='/search'>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className='search-input-label' htmlFor='search-input' />
      <div className='search-form--contents'>
        <input
          style={{ fontSize: fontSize ? `${fontSize}px` : '' }}
          ref={inputRef}
          id='q'
          className={`search ${searching ? 'searching' : ''}`}
          type='search'
          name='q'
          defaultValue={data?.q ?? ''}
          onChange={manageFontSize}
        />
        <button className='search-button' type='submit'>
          <img src={searchIcon} alt='search' />
        </button>
      </div>
    </Form>
  );
}
