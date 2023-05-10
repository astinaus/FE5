import React from 'react';
import './EventForm.css';
import { useState } from 'react';

export default function EventForm({ addData }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [food, setFood] = useState('짜장면');

  const resetForm = () => {
    setTitle('');
    setDate('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      food: food,
    };

    addData(formData);
    resetForm();
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <strong>Event Title : </strong>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>
      <label>
        <strong>Event Date : </strong>
        <input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </label>
      <label>
        <select
          onChange={(event) => {
            setFood(event.target.value);
          }}
        >
          <option value="짜장면">짜장면</option>
          <option value="짬뽕">짬뽕</option>
          <option value="볶음밥">볶음밥</option>
        </select>
      </label>
      <button type="submit">제출하기</button>
      <button type="reset" onClick={resetForm}>
        초기화
      </button>
    </form>
  );
}
