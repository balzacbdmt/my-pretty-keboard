import Button from "../button/Button";

interface Props {
  title: string;
  text: string;
  onClose?: () => void;
}

function Modal({ title, text, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 rounded-lg shadow-lg p-6 w-full max-w-md mx-2 text-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="my-4">{text}</p>
        {onClose && <Button onClick={onClose} text="Close" />}
      </div>
    </div>
  );
}

export default Modal;
