// !Tipado para el objeto de columnas cuya forma sera un arreglo
// ! el cual o tiene la forma de SearchBarStringColumn o de SearchBarDateColumn
export interface SearchBarProps {
    columns: SearchBarColumn[];
}
// !Si es una consulta por paciente o por profesional
export type SearchBarStringColumn = {
    id: 'patientOrPractitioner';
    type: 'string';
    placeholder: string;
};
//! Si la consulta es por fecha
export type SearchBarDateColumn = {
    id: string;
    type: 'date';
    placeholder: [string, string];
};
// !Array conteniendo el periodo de fecha de inicio y fin
export type DateColumnFilterValue = [moment.Moment, moment.Moment];
// !La columna puede ser o de tipo string o de tipo fecha
export type SearchBarColumn = SearchBarStringColumn | SearchBarDateColumn;
// !Tipado de los elementos que conforman las 3 columnas de la lista de encuentros
export interface ColumnFilterValue {
    column: SearchBarColumn;
    value?: DateColumnFilterValue | string;
}
// !Cuando sea un string el tipo de la columna de busqueda
export interface StringTypeColumnFilterValue {
    column: SearchBarStringColumn;
    value?: string;
}
// !Cuando sea una columna de busqueda por fecha
export interface DateTypeColumnFilterValue {
    column: SearchBarDateColumn;
    value?: DateColumnFilterValue;
}
// ! Objeto encargado de decirle a la barra de busqueda
// ! cuál de los 3 campos sufrio un cambio y hacer la busqueda por id de esa columna
// !OnChange especificamente está escuchando los cambios
// ! y modifica el estado columnsFilterValues de acuerdo al id del listado
// !OnReset restaura los valores por defecto
export interface SearchBarData {
    columnsFilterValues: ColumnFilterValue[];
    onChangeColumnFilter: (value: DateColumnFilterValue | string, key: string) => void;
    onResetFilters: () => void;
}
