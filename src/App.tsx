import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-center  underline bg-green">Hello world!</h1>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  );
}

export default App;
