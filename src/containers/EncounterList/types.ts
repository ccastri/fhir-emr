import { ColumnFilterValue, DateColumnFilterValue } from 'src/components/SearchBar/types';
//! Filtros para cada una de las columnas
// !Deberian haber 2 filtros y diferentes para un mismo compoennte de busqueda
// !Patient and practitioner should be the same searchBarComponent
// {
//     id: 'practitioner';
//     type: 'string';
//     placeholder: string;
// },
export type EncounterListFilters = ColumnFilterValue[] &
    [
        {
            id: 'patientOrPractitioner';
            type: 'string';
            placeholder: string;
        },
        {
            id: 'date';
            type: 'date';
            placeholder: [string, string];
        },
    ];
//! Usando la interfaz de column filter defina un arreglo de objetos ColumnFilterValue
// ! De tipo SearchBarString o SearchBarDate
export type EncounterListFilterValues = ColumnFilterValue[] &
    [
        {
            column: EncounterListFilters[0];
            value?: string;
        },
        {
            column: EncounterListFilters[1];
            value?: string;
        },
        {
            column: EncounterListFilters[2];
            value?: DateColumnFilterValue;
        },
    ];
