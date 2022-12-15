import Select from "./components/Select";

interface Iselect{
  options:any[]
  label: string
}

export default function renderSelect({options, label}:Iselect) {
  return <Select label={label} options={options} />;
}