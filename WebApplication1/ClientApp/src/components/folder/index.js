import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import img from '../../img/folder.png';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Settings from '../header/settings';
import RemoveConfirm from './removeConfirm';

const FolderIcon = (props) => {
    const iconStyle = {
        width: "100px"
    };

    const history = useHistory();

    const [dropdown, setDropdown] = useState(false);
    const dropdownToggle = () => setDropdown(!dropdown);

    const [settings, settingsOpen] = useState(false);
    const [rename, renameOpen] = useState(false);
    const [remove, removeOpen] = useState(false);

    const link = () => {
        history.push("/folder/my/" + props.id);
    };

    const contextMenu = e => {
        e.preventDefault();
        dropdownToggle();
    };

    return (
        <>
            <Dropdown
                style={iconStyle}
                isOpen={dropdown}
                toggle={dropdownToggle}
                onContextMenu={contextMenu}
            >
                <DropdownToggle color="link" onClick={link}>
                    <img className="w-100" src={img} alt="folder" />
                    {props.name}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => settingsOpen(true)}>
                        Настройки
                    </DropdownItem>
                    <DropdownItem onClick={() => renameOpen(true)}>
                        Переименовать
                    </DropdownItem>
                    <DropdownItem onClick={() => removeOpen(true)}>
                        Удалить
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Settings
                isOpen={settings}
                setIsOpen={settingsOpen}
                id={props.id}
            />
            <RemoveConfirm
                isOpen={remove}
                setIsOpen={removeOpen}
                id={props.id}
                deleteFolder={props.deleteFolder}
            />
        </>
    )
}

export default FolderIcon;