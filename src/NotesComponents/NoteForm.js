import React, { useRef, useState } from 'react';
import styles from '../Styles/formStyle.module.css';
import '../Styles/formStyle.module.css';
import { Form, Button, Alert } from "react-bootstrap";

function NoteForm(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)
  const titleRef = useRef();
  const descriptionRef = useRef();

  const colors = [
    'yellow',
    'green',
    'purple',
    'blue'
  ]

  if (count > 3) {
    setCount(0)
  } 

  const noteSave = async (e) => {
    e.preventDefault();

    if (titleRef.current.value === '') {
      setError('Please enter a title')
    }
    try {
      setError('');
      setLoading(true);
      setCount(count+1)
      await props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      status: "pending",
      color: colors[count]
      })
    } catch(err) {
      console.error(err)
      setError('Not able to place the note')
    }
    setLoading(false)
  }
  return (
    <div className={styles.formContainer}>
      <Form onSubmit={noteSave}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group id="note-title">
          <Form.Control type="text"
          className='mt-3'
          ref={titleRef}
          placeholder="Title"
          ></Form.Control>
        </Form.Group>
        <Form.Group id="description">
          <Form.Control
            className='mt-3'
            type="text"
            ref={descriptionRef}
            placeholder="description"
          ></Form.Control>
        </Form.Group>
        <br />
        <Button disabled={loading} className="w-100" type="submit">
          Add note
        </Button>
      </Form>
    </div>
  )
}

export default NoteForm