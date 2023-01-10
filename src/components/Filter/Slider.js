import ReactSlider from "react-slider";

import "./Slider.scss";

const Slider = (props) => {
  return (
    <ReactSlider 
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      min={1950}
      max={new Date().getFullYear()}
      defaultValue={[1950, new Date().getFullYear()]}
      ariaLabel={["Lower thumb", "Upper thumb"]}
      onAfterChange={(state) => {
        props.addYears(state);
      }}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      minDistance={2}
    />
  )
}

export default Slider;