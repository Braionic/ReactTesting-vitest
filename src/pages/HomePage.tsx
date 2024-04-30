import Label from "../components/Label";

const HomePage = () => {
  console.log(location.pathname)
  return (
    <div>
      <h1>Home Page</h1>
      <Label labelId="welcome" />
    </div>
  );
};

export default HomePage;
