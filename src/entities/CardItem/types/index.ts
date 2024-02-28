import { StaticImageData } from "next/image";

export default interface ICardItem {
  id: string;
  img?: string | StaticImageData;
  title: string;
  price: number;
  desc: string;
  cardQuantity: number;
}
