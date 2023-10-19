import { Col, Input } from 'antd';

import { useStringColumn } from './hooks';
import { SearchBarColumnStringTypeProps } from '../types';
// ! La funcion devuelve una columna para cada tipo identificado 
// ! la data viene por props de columnFilterValue
export function StringColumn<T>(props: SearchBarColumnStringTypeProps) {
    const { columnFilterValue } = props;
// !Desde el hook está sensando el tipo del filtro de busqueda activo
    const { onColumnChange } = useStringColumn<T>(props);
// !renderiza una columna para cada filtro de busqueda
    return (
        <Col>
            <Input.Search
                placeholder={columnFilterValue.column.placeholder}
                value={columnFilterValue.value}
                onChange={onColumnChange}
            />
        </Col>
    );
}
