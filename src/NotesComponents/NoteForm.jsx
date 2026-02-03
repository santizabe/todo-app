import React, { useRef, useState } from 'react';
import styles from '../Styles/formStyle.module.css';
import PropTypes from 'prop-types';
import '../Styles/formStyle.module.css';
import { Form, Button, Alert, ToastContainer, Toast } from "react-bootstrap";

function NoteForm(props) {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
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
    try {
      setLoading(true);
      setCount(count+1)
      await props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: titleRef.current.value,
      description: descriptionRef.current.value.replace(/\s+/g, ' ').trim(),
      status: "pending",
      color: colors[count]
      })
    } catch(err) {
      setError(err);
    }
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    setLoading(false);
  }
  return (<>
    <div className={styles.formContainer}>
      <Form onSubmit={noteSave}>
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
    {error && <ToastContainer position='top-end'>
      <Toast onClose={() => {setError('');}}
      delay={3000}
      autohide
      bg='danger'
      animation>
        <Toast.Header>
          <strong className="me-auto">Error!</strong>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
      </ToastContainer>}
  </>)
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default NoteForm