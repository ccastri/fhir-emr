import { DateColumn } from './DateColumn';
import { StringColumn } from './StringColumn';
import { SearchBarColumnDateTypeProps, SearchBarColumnProps, SearchBarColumnStringTypeProps } from './types';
// ! SearchBarColumn es el componente que se encarga de renderizar los componentes string o date
// ! Y asignarles las props respectivas al tipo de columna de busqueda
export function SearchBarColumn<T>(props: SearchBarColumnProps<T>) {
    const { columnFilterValue } = props;
// console.log(columnFilterValue)
    switch (columnFilterValue.column.type) {
        case 'string':
            return <StringColumn<T> {...(props as SearchBarColumnStringTypeProps)} />;
        case 'date':
            return <DateColumn<T> {...(props as SearchBarColumnDateTypeProps)} />;
        default:
            return null;
    }
}
