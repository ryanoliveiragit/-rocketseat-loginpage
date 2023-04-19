import {ContainerButton} from './styles'

interface PropsButton {
    children: string;
    type: string;
}

export function Button({children, type}: PropsButton){
    return (
        <>
            <ContainerButton>{children}</ContainerButton>
        </>
    )
}