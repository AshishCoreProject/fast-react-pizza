import CreateUser from "../features/user/CreateUser"
function Home() {
  return (
    <div className="my-10 sm:my-16 sm:text-center">
      <h1 className="mb-8 text-xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-500" > Straight out of the oven, straight to you.</span>
       <CreateUser/>
      </h1>
    </div>
  );
}

export default Home;
