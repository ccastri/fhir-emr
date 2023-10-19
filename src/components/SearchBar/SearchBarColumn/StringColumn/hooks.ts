import { useCallback } from 'react';

import { SearchBarColumnStringTypeProps } from '../types';
// !El onChange sensa los tres filtros de busqueda, empleando un indice
// !(columnFilterValue.column.id) para cada lista
export function useStringColumn<T>(props: SearchBarColumnStringTypeProps) {
    const { onChange, columnFilterValue } = props;
    // !El callback memoriza el valor previo al evento.
    // !Solo hay re render si el valor del input cambia
    // !O si la columna de busqueda cambia
    const onColumnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value, columnFilterValue.column.id);
        },
        [onChange, columnFilterValue],
    );

    return { onColumnChange };
}
