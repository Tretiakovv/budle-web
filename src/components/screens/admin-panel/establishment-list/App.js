import '../../../../App.css';
import Tab from "../../../../ui/atoms/tab/Tab";
import Button from "../../../../ui/atoms/button/Button";
import Form from "../../../../ui/wrappers/form/Form";

function App() {
  return (
    <div className={"flex justify-center items-center w-[800px] h-[50px] m-20 bg-yellow-500"}>
        <Form>
            <Button buttonText={"Some text"} />
        </Form>
    </div>
  );
}



export default App;
