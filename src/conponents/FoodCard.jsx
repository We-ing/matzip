import "../CustomCss.css";

const Foodimg = ({ food, onClickChoice }) => {
  return (
    <>
      <div className="container ml-6 mt-14">
        <button onClick={onClickChoice(food)}>
          <img src={`images/FoodImg/${food}.jpg`} className="box" />
        </button>
      </div>
      <div className="flex justify-center mt-2 text-white">{food}</div>
    </>
  );
};

export default Foodimg;
