import React, {useRef} from 'react';
import {Button, Card, Form} from 'react-bootstrap';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: '1000'
}

const BACKGROUND_MODAL = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: '1000'
}

function Modal({note, edit}) {
    const titleRef = useRef();
    const descriptionRef = useRef();

    const editNote = (newNote) => {
        newNote.title = titleRef.current.value
        newNote.description = descriptionRef.current.value
        return edit(newNote)
    }

    if (note === null) {return null};
  return (<>
    <div style={BACKGROUND_MODAL} />
    <div style={MODAL_STYLES}>
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group id='title'>
                        <Form.Control
                        type='text'
                        ref={titleRef}
                        placeholder={note.title}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id='description'>
                        <Form.Control
                        type='textarea'
                        ref={descriptionRef}
                        placeholder={note.description}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button variant="dark" onClick={()=>editNote(note)}>Edit note</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  </>
  )
}

export default Modal