import { useSelector } from 'react-redux';

export function useTables() {
  const { tables, myTableName } = useSelector(state => state.tables);

  return {
    tables,
    myTableName,
  };
}
