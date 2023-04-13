import { Input, FormControl , Flex, Heading, Divider, UnorderedList, ListItem, Center, Button} from '@chakra-ui/react'
import { useState } from "react";

export const TaskCreator = (props) => {
    const {todoList, addTask} = props;
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    function onWriteName(event){
        setName(event.target.value);
    }
    function onWriteDesc(event){
        setDesc(event.target.value);
    }
    function createTask(){
        addTask({name : name, description : desc});
    }
    const nameValid = name.length >= 3
    return(
        <Flex justifyContent="center" width= "100%">
            <FormControl width="50%" onSubmit={(event) => event.preventDefault()}>
                    <Input justifySelf="center" borderRadius="10px" width="100%" id="nameInput" type="text" placeholder="Task name" onChange={onWriteName}/>
                    <br />
                    {!nameValid && (
                    <span style={{ color: "#096bac" }}>El nombre debe tener al menos 3 caracteres</span>
            )}
            <br />
                <Input borderRadius="10px" width="100%" id="descInput" type="text" placeholder="Task description" onChange={onWriteDesc}/>
                <br />
                <Button marginTop="2%" className='icon add-task' onClick={createTask} disabled = {!nameValid}>+</Button>
            </FormControl >
        </Flex>
    )
}