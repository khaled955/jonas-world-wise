import { useNavigate } from "react-router";
import Button from "../components/button/button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      &larr;Back
    </Button>
  );
}
