import { useApiData } from '../../components/api/API';

import KarinaCard from './KarinaCard';
import {IProductType} from "./types/IProductType";

interface IGetCardsProps {
  url: string
}
export default function GetCards({url}: IGetCardsProps) {
  const data:IProductType[] = useApiData(url, 'GET');
  return data && data.map(el => <KarinaCard card={el} key={el.id} />);
}
