import { Trans } from '@lingui/macro';
import { Button, Row } from 'antd';

import { S } from './SearchBar.styles';
import { SearchBarColumn } from './SearchBarColumn';
import { SearchBarData } from './types';

export function SearchBar(props: SearchBarData) {
// !   Column filter values estado actual de los inputs de busqueda
// ! Funcion onCHange observando llos 3 listados y posibles modificaciones
// ! El reset para volver a los valores en memoria (por default)
    const { columnsFilterValues, onChangeColumnFilter, onResetFilters } = props;
// console.log(columnsFilterValues.map(item=>item))
    return (
        <S.Container>
            <Row gutter={[32, 16]}>
                {columnsFilterValues.map((columnFilterValue, columnIndex) => (
                    <SearchBarColumn
                        key={`search-bar-column-${columnIndex}`}
                        columnFilterValue={columnFilterValue}
                        onChange={onChangeColumnFilter}
                    />
                ))}
            </Row>

            <Button onClick={onResetFilters}>
                <Trans>Reset</Trans>
            </Button>
        </S.Container>
    );
}
