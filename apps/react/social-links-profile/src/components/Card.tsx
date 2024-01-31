import profileImage from '../assets/avatar-jessica.jpeg';

type ButtonProps = React.PropsWithChildren<{
  href?: string;
}>;

const Button = ({ href = '#', children }: ButtonProps) => (
  <a
    href={href}
    className="bg-neutral-gray hover:bg-primary-green hover:text-neutral-dark-gray focus:bg-primary-green focus:text-neutral-dark-gray w-full rounded-lg px-4 py-3 text-center font-bold text-white transition-colors "
  >
    {children}
  </a>
);

export default function () {
  return (
    <section className="bg-neutral-dark-gray flex w-full max-w-md flex-col items-center gap-y-8 overflow-hidden rounded-xl p-8">
      <img
        src={profileImage}
        alt="Image of Jessica Randall"
        className="h-24 w-24 rounded-full"
      />
      <h1 className="text-center text-3xl font-bold text-white">
        Jessica Randall
        <small className="text-primary-green mt-2 block text-lg font-semibold">
          London, United Kingdom
        </small>
      </h1>
      <p className="text-center text-white">
        "Front-end developer and avid reader."
      </p>
      <div className="flex w-full flex-col gap-y-4">
        <Button>GitHub</Button>
        <Button>Frontend Mentor</Button>
        <Button>LinkedIn</Button>
        <Button>Twitter</Button>
        <Button>Instagram</Button>
      </div>
    </section>
  );
}
