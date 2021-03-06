import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { file } from '../../../../api'
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Input,
    ModalFooter,
    Button,
} from 'reactstrap';

const CreateFile = (props) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    const submit = () => {
        file.create(name, content, props.id)
            .then(resp => resp.json())
            .then(json => {
                props.addFile(json);
                props.toggle();
            });
    };

    const close = () => {
        setName("");
        setContent("")
        props.toggle();
    }

    return (
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Создать файл</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Название
                            <Input onChange={e => setName(e.target.value)} />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>Содержимое
                            <Input onChange={e => setContent(e.target.value)} />
                    </Label>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="info" onClick={submit}>Создать</Button>
                <Button color="danger" onClick={close}>Закрыть</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateFile;