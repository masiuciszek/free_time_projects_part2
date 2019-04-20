import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button } from '../styled';

function SearchBar() {
  const [input, setInput] = useState('');
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.addEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e => {
    if (formRef.current.contains(e.target)) {
      return;
    }
    console.log(' Click outside the for to close it');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setInput('');
    setBarOpened(false);
    console.log(`form was opened with ${input}`);
  };
  return (
    <div className="app">
      <Form
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={barOpened}>
          Yooo
        </Button>
        <Input
          onChange={e => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Search for something..."
        />
      </Form>
    </div>
  );
}

export default SearchBar;
