import { HeroSection } from './../../app/(web)/home/(components)/Hero';
import { ContentType } from "../app";

export type ConfigType = {
  name: string;
  owner: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: string;
  company_name: string;
  location: string;
  currency: string;
  logo: string;
  url: string;
  height: number;
  width: number;
  quote: string;
  quote_by: string;
  footer_description: string;
  email: string;
  contact_number: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  whatsapp: string;
  viber: string;
  tiktok: string;
  theme: string;
  hero_type: string;
  doctype: string;
  content: ContentType[];
};

export type ConfigAPIResponse = {
  Data: ConfigType;
  initialData : ConfigType;
};
export type HeroSectionProps = {
  initialData: ConfigType;
};