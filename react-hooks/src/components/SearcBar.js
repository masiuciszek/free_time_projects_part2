import React, { useState, useEffect, useRef } from 'react';
import { FaAngellist } from 'react-icons/fa';
import { Form, Input, Button } from '../styled';

export default function SearcBar() {
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

  // this is for to close the form when the input is opened, set bar opened to flase (toggle)
  const handleClick = e => {
    if (formRef.current.contains(e.target)) {
      return;
    }
    console.log('Click Outside the form');
    setBarOpened(false);
  };

  // When form submitted, clear input , close the search bar and do something
  const onFormSubmit = e => {
    e.preventDefault();
    setInput('');
    setBarOpened(false);
    console.log(`Form was submitted with input : ${input} `);
  };

  return (
    <div className="cool-input">
      <Form
        barOpened={barOpened}
        onClick={() => {
          // when clicked the set to open and focus effect on the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={barOpened}>
          <FaAngellist size={33} />
        </Button>
        <Input
          onChange={e => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="search for something"
        />
      </Form>
    </div>
  );
}
