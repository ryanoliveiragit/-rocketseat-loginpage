import {ContainerButton} from './styles'

interface PropsButton {
    children: string;
    type: any;
}

export function Button({children, type}: PropsButton){
    return (
        <>
            <ContainerButton>{children}</ContainerButton>
        </>
    )
}