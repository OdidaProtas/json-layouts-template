import { Link } from "react-router-dom";

export default function renderLink(text:string, to:string) {
  return <Link to={to} >{text}</Link>;
}
