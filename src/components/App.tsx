import * as React from "react";
import Layout from "./Layout";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Element, Link } from "react-scroll";

const SCROLL_OFFSET = 0;
const SCROLL_SPEED = 1000;
const nums = Array.from(Array(10).keys());

const App = () => {
  return (
    <Layout>
      <div className="content__blocks">
        {nums.map((num) => (
          <div key={num} className="content__block">
            <div>
              <h1>Block {num}</h1>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
                non mi porta gravida at eget metus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Maecenas sed diam eget risus
                varius blandit sit amet non magna. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet. Etiam porta sem
                malesuada magna mollis euismod. Donec ullamcorper nulla non
                metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Etiam porta sem malesuada magna mollis euismod.
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default App;
