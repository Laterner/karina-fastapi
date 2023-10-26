import { useApiData } from '../../components/api/API';

import KarinaCard from './KarinaCard';

export default function GetCards(props) {
  const data = useApiData(props.url, 'GET');
  return data && data.map(el => <KarinaCard {...el} key={el.id} />);
}
