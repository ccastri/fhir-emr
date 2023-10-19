import { useCallback, useMemo, useState } from 'react';

import { ColumnFilterValue, DateColumnFilterValue, SearchBarData, SearchBarProps } from './types';
// ! Search hook:
// ! 1. it gets the column shaped to either String column
// !(patient/practitioner) or dateColumn
// !To save the last rendered active column value no filters by default

export function useSearchBar(props: SearchBarProps): SearchBarData {
    const { columns } = props;
    // console.log(columns);
    const defaultFiltersValues = useMemo(() => {
        return columns.map((column) => ({ column }));
    }, [columns]);

    const [columnsFilterValues, setColumnsFilterValues] = useState<ColumnFilterValue[]>(defaultFiltersValues);
    const onChangeColumnFilter = useCallback(
        (value: DateColumnFilterValue | string, id: string) => {
            setColumnsFilterValues((prevFilterValue) => {
                const newFilterValue = [...prevFilterValue];

                const editedFilterValueIndex = newFilterValue.findIndex((v) => v.column.id === id);

                if (value === '') {
                    newFilterValue[editedFilterValueIndex]!.value = undefined;
                } else {
                    newFilterValue[editedFilterValueIndex]!.value = value;
                }

                return newFilterValue;
            });
        },
        [setColumnsFilterValues],
    );

    const onResetFilters = useCallback(() => {
        setColumnsFilterValues(defaultFiltersValues);
    }, [setColumnsFilterValues, defaultFiltersValues]);

    return { columnsFilterValues, onChangeColumnFilter, onResetFilters };
}
