import "../conponents/CustomCss.css";

const Foodimg = ({ food, onClickChoice }) => {
  return (
    <>
      <div className="container ml-6 mt-14">
        <button onClick={onClickChoice(food)}>
          <image
            src={`images/FoodImg/${food?.slice(0, -1)}.jpg`}
            className="box"
          />
        </button>
      </div>
      <div className="flex justify-center mt-2 text-white">
        {food?.slice(0, -1)}
      </div>
    </>
  );
};

export default Foodimg;
