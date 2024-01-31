import qrImage from "../assets/image-qr-code.png";

export default function () {
  return (
    <div className="max-w-xs space-y-4 rounded-xl bg-white p-4 shadow-lg">
      <div className="overflow-hidden rounded-lg">
        <img src={qrImage} alt="QR Code" className="h-full w-full" />
      </div>
      <div className="mb-4 space-y-4 p-2">
        <h1 className="text-center text-xl font-bold text-dark-blue">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-center text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
