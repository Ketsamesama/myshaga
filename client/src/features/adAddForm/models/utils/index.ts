import { IPrewImg } from 'features/adAddForm/ui/AddAdform.types';

interface IUpdatePrewImg {
  filesImg: FileList | null;
  prewImg: IPrewImg;
}

const updatePrewImg = ({ filesImg, prewImg }: IUpdatePrewImg): IPrewImg => {
  let files = Array.prototype.slice.call(filesImg);

  files = files.map((item) => ({
    file: item,
    path: URL.createObjectURL(item),
  }));

  if (files.length < prewImg.length) {
    const difference = prewImg.length - files.length;

    return [...files, ...prewImg.splice(0, difference)];
  } else {
    return [...files.slice(0, 4)];
  }
};

export { updatePrewImg };
