import React, { useRef, useState } from 'react';
import styles from '../Styles/formStyle.module.css';
import '../Styles/formStyle.module.css';
import { Form, Button, Alert } from "react-bootstrap";

function NoteForm(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const titleRef = useRef();
  const descriptionRef = useRef();
  // const closeForm = () => { }

  const noteSave = async (e) => {
    e.preventDefault();

    if (titleRef.current.value === '') {
      setError('Please enter a title')
    }
    try {
      setError('');
      setLoading(true);
      await props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: titleRef.current.value,
      description: descriptionRef.current.value
      })
    } catch {
      setError('Not able to place the note')
    }
    setLoading(false)
  }
  return (
    <div className={styles.formContainer}>
      <Form onSubmit={noteSave}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group id="note-title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"
          ref={titleRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            ref={descriptionRef}
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