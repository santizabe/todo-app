import React, {useRef} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import { RiCloseCircleLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: '1000'
}

const CLOSE = {
    position: 'absolute',
    top: '0',
    right: '0'
}

const CANCEL = {
    marginRight: '3rem'
}

const BACKGROUND_MODAL = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: '999'
}

function Modal({note, edit}) {
    const titleRef = useRef();
    const descriptionRef = useRef();

    const editNote = (newNote) => {
        newNote.title = titleRef.current.value
        newNote.description = descriptionRef.current.value
        return edit(newNote)
    }

    const cancel = () => {
        return edit(note)
    }

    if (note === null) {return null};
  return (<>
    <div style={BACKGROUND_MODAL} />
    <div style={MODAL_STYLES}>
        <IconContext.Provider value={{size: '2em' }}>
            <RiCloseCircleLine style={CLOSE} onClick={cancel} />
        </IconContext.Provider>
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-1" id='title'>
                        <Form.Control
                        type='text'
                        ref={titleRef}
                        defaultValue={note.title}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" id='description'>
                        <Form.Control
                        type='textarea'
                        ref={descriptionRef}
                        defaultValue={note.description}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button style={CANCEL}
                    variant="light"
                    onClick={cancel}>Cancel</Button>
                    <Button className="ml-3"
                    variant="success"
                    onClick={()=>editNote(note)}>Edit note</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  </>
  )
}

export default Modal