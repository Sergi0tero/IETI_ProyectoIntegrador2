import { Input, FormControl , Flex, Heading, Divider, UnorderedList, ListItem, Center, Button} from '@chakra-ui/react'
export function AboutUs() {
    return <section>
        <Flex direction="column" borderBottomRadius="50px" bgColor="#ffd66f">
            <Heading>Quienes somos?</Heading>
            <p>Esta aplicacion funciona para organizar facilmente las tareas de todos los dias. Siempre tenemos muchas cosas de hacer, necesitamos algo que nos permita saber tareas pendientes.</p>
            <h3>Funcionalidades:</h3>
            <ul>
                <li> Crear tareas</li>
                <li> Eliminar Tareas</li>
                <li> Editar tareas</li>
                <li> Terminar tareas</li>
                <li> Activar tareas</li>
            </ul>
        </Flex>
    </section>;
}
  