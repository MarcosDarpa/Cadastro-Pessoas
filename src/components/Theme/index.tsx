import { ReactNode } from 'react';
import *as C from './styles';

type Props = {
    children: ReactNode;
}

export const theme = ({ children }: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>

                    </C.Sidebar>
                    <C.page>
                        {children}
                    </C.page>

                </C.Steps>
            </C.Area>

        </C.Container>
    )

}