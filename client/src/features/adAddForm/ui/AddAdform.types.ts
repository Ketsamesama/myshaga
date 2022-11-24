interface IFormType {
  title: string;
  text: string;
  radio: string;
}

interface Img {
  file: Blob;
  path: string;
}

type IPrewImg = Array<Img | null>;

interface IParamsSubmitForm {
  data: IFormType;
  prewImg: IPrewImg;
}

export type { IFormType, IParamsSubmitForm, IPrewImg, Img };
