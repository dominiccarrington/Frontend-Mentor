export default function () {
  return (
    <footer className="space-y-2 border-t py-4 text-sm">
      <div className="text-center">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-600"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{' '}
          <a
            href="https://github.com/dominiccarrington"
            target="_blank"
            className="text-blue-600"
          >
            Dominic Carrington
          </a>
          .
        </p>
      </div>
      <div className="text-center">
        <strong>Tech Stack</strong>
        <div className="flex justify-center gap-x-4">
          <a target="_blank" href="https://nx.dev/">
            Nx
          </a>
          <a target="_blank" href="https://react.dev/">
            React
          </a>
          <a target="_blank" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          <a target="_blank" href="https://vitejs.dev/">
            Vite
          </a>
          <a target="_blank" href="https://prettier.io/">
            Prettier
          </a>
        </div>
      </div>
    </footer>
  );
}
