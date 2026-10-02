function App() {
  return (
    <div className="mt-20 mx-52 flex flex-wrap rounded-lg border-1 border-black">
      <div className="w-full text-white h-14 bg-linear-to-t from-sky-500 to-indigo-500 h-24 flex justify-center items-center font-bold text-xl rounded-t">
        Lorem ipsum dolor sit amet.
      </div>
      <div className="text-center mt-6 w-full">
        <h3 className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum a,
          placeat esse suscipit minus modi!
        </p>
        <form className="flex flex-wrap">
          <input
            placeholder="your@email.com"
            className="w-full mx-52 bg-slate-200 text-center placeholder:text-sm my-4 py-2 rounded"
          />
          <button className="bg-blue-500 w-full text-white mx-52 py-2 rounded-full">Click me</button>
        </form>
        <p className="my-6 text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default App;
