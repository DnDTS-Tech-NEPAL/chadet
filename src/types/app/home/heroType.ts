export type HomePageType = {
  hero_type: string;
  content: ContentType[];
};

export type ContentType = {
  hero_image: string;
  hero_image_link: string;
  hero_image_redirect_link: string;
  hero_description: string;
  background_color: string;
  hero_title: string;
  hero_tagline: string;
  align_content: "Left" | "Right";
  hero_title_color: "string";
  hero_tagline_color: "string";
  hero_description_color: "string";
  button_1_label: "string";
  button_1_color: "string";
  button_1_text_color: "string";
  button_1_redirect_link: "string";
  button_2_label: "string";
  button_2_color: "string";
  button_2_text_color: "string";
  button_2_redirect_link: "string";
};
export type HomePageAPIResponseType = {
  Data: HomePageType;
};