import { IoClose } from "react-icons/io5";

type input = {
  name: string;
  type: "password" | "text" | "email" | "number" | "textarea" | "select";
};

export default function Modal({
  title,
  subTitle,
  inputs,
  onClose,
  onSubmit,
}: {
  title: string;
  subTitle: string;
  inputs: input[];
  onClose: () => void;
  onSubmit: (data: { [key: string]: string }) => void;
}) {
  return (
    <>
      <div className="absolute z-30 h-screen w-full inset-0">
        <div className="w-52 inset-0 mx-auto bg-neutral-50">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-neutral-800">{title}</h1>
            <div onClick={() => onClose()}>
              <IoClose className="text-lg" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-screen w-full bg-neutral-900/20 inset-0"
        onClick={() => onClose()}
      ></div>
    </>
  );
}
