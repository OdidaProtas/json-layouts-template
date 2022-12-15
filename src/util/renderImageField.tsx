import ImageField, { IImageFied } from "./components/ImageField";

export default function renderImageField({
  desc,
  value,
  handleChange,
}: IImageFied) {
  return <ImageField desc={desc} value={value} handleChange={handleChange} />;
}